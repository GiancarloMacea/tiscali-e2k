import { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────
// InstallPrompt · Generato con AI Claude · Aprile 2026
//
// Banner per installare l'app come PWA.
//
// Su Android Chrome / Edge / Samsung Internet:
//   - Ascolto l'evento 'beforeinstallprompt' che il browser emette quando
//     l'app soddisfa i criteri PWA (manifest valido, SW, HTTPS, icone valide).
//   - Salvo l'evento e mostro un bottone "📲 Installa app" custom.
//   - Quando l'utente clicca, chiamo .prompt() sull'evento → appare il
//     dialog nativo del browser per confermare l'installazione.
//
// Su iOS Safari:
//   - Non esiste beforeinstallprompt: Safari richiede al utente di farlo
//     manualmente da "Condividi → Aggiungi a Home".
//   - Detect iOS via user agent + non già in standalone.
//   - Mostro un banner con istruzioni passo-passo.
//
// Se l'app è GIÀ installata (display-mode: standalone o navigator.standalone),
// il banner non appare.
//
// Dismiss: l'utente può chiudere il banner. Salvato in localStorage per non
// rimostrarlo nei 7 giorni successivi (poi torna disponibile).
// ─────────────────────────────────────────────────────────────────────

const DISMISS_KEY = '__install_prompt_dismissed';
const DISMISS_DAYS = 7;

function isStandalone() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia?.('(display-mode: standalone)')?.matches ||
    window.navigator.standalone === true
  );
}

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isIDevice = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return isIDevice || isIPadOS;
}

function isSafari() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /Safari/.test(ua) && !/Chrome|CriOS|FxiOS|EdgiOS/.test(ua);
}

function wasRecentlyDismissed() {
  try {
    const ts = localStorage.getItem(DISMISS_KEY);
    if (!ts) return false;
    const diff = Date.now() - parseInt(ts, 10);
    return diff < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch (e) {
    return false;
  }
}

function dismiss() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch (e) { /* localStorage non disponibile */ }
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showIOSHelp, setShowIOSHelp] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(true); // default true: mostra solo dopo check

  useEffect(() => {
    // Check initial state al mount
    if (isStandalone()) {
      setInstalled(true);
      return;
    }

    if (wasRecentlyDismissed()) {
      setDismissed(true);
      return;
    }
    setDismissed(false);

    // Android Chrome / Edge / Samsung: beforeinstallprompt
    const handler = (e) => {
      e.preventDefault(); // impedisce al browser di mostrare il suo banner automatico
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Quando l'app viene installata, nascondi il banner
    const installedHandler = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', installedHandler);

    // iOS Safari: mostra istruzioni manuali (no beforeinstallprompt)
    // Dopo 3 secondi così non disturba subito al primo caricamento
    let iosTimer;
    if (isIOS() && isSafari() && !isStandalone()) {
      iosTimer = setTimeout(() => setShowIOSHelp(true), 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
      if (iosTimer) clearTimeout(iosTimer);
    };
  }, []);

  // Non mostrare se: già installata, già dismissata, o nessun trigger attivo
  if (installed || dismissed) return null;
  if (!deferredPrompt && !showIOSHelp) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    try {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      // outcome: 'accepted' | 'dismissed'
      if (choice?.outcome === 'dismissed') {
        dismiss();
        setDismissed(true);
      }
      setDeferredPrompt(null);
    } catch (e) {
      // se prompt() fallisce (es. browser non più disponibile), nascondo
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    dismiss();
    setDismissed(true);
  };

  // ── Banner Android/Desktop con bottone Installa ───────────────────────
  if (deferredPrompt) {
    return (
      <div
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 bg-white border-2 border-tiscali-600 rounded-2xl shadow-2xl p-4 animate-slide-up"
        style={{ animation: 'slide-up 0.3s ease-out' }}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-12 h-12 bg-tiscali-600 rounded-xl flex items-center justify-center text-2xl">
            📲
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm mb-0.5">Installa Tiscali E2K</p>
            <p className="text-xs text-gray-600 leading-snug">
              Aggiungi l'app alla schermata Home per accesso rapido a schermo intero.
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleInstall}
                className="flex-1 bg-tiscali-600 hover:bg-tiscali-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
              >
                Installa
              </button>
              <button
                onClick={handleDismiss}
                className="text-xs font-medium text-gray-500 hover:text-gray-700 px-3 py-2"
              >
                Non ora
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Chiudi"
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 -mt-1 -mr-1 p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // ── Banner iOS Safari con istruzioni manuali ──────────────────────────
  if (showIOSHelp) {
    return (
      <div
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 bg-white border-2 border-tiscali-600 rounded-2xl shadow-2xl p-4"
        style={{ animation: 'slide-up 0.3s ease-out' }}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-12 h-12 bg-tiscali-600 rounded-xl flex items-center justify-center text-2xl">
            📲
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm mb-1">Installa Tiscali E2K</p>
            <p className="text-xs text-gray-600 leading-snug mb-2">
              Per aggiungere l'app alla Home:
            </p>
            <ol className="text-xs text-gray-700 space-y-1 leading-snug">
              <li>
                1. Tocca{' '}
                <svg className="inline w-4 h-4 align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {' '}<strong>Condividi</strong> in basso
              </li>
              <li>2. Scorri e tocca <strong>"Aggiungi a Home"</strong></li>
              <li>3. Tocca <strong>Aggiungi</strong> in alto a destra</li>
            </ol>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Chiudi"
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 -mt-1 -mr-1 p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return null;
}
