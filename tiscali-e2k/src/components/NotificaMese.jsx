import { useState, useEffect } from 'react';

// Chiave localStorage: include anno+mese per auto-reset ogni mese
function storageKey() {
  const d = new Date();
  return `tiscali-notifica-${d.getFullYear()}-${d.getMonth() + 1}`;
}

function shouldShow() {
  // Già chiuso questo mese?
  if (localStorage.getItem(storageKey()) === 'chiuso') return false;

  const oggi = new Date();
  const giorno = oggi.getDate();
  const ultimoGiorno = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 0).getDate();

  // Primi 3 giorni OPPURE ultimi 5 giorni del mese
  return giorno <= 3 || giorno >= ultimoGiorno - 4;
}

function tipoNotifica() {
  const giorno = new Date().getDate();
  return giorno <= 3 ? 'inizio' : 'fine';
}

export default function NotificaMese() {
  const [visibile, setVisibile] = useState(false);
  const [chiuso, setChiuso] = useState(false);

  useEffect(() => {
    if (!chiuso && shouldShow()) {
      // Piccolo delay per non apparire subito al caricamento
      const t = setTimeout(() => setVisibile(true), 1200);
      return () => clearTimeout(t);
    }
  }, [chiuso]);

  const chiudi = () => {
    setVisibile(false);
    setChiuso(true);
  };

  const nonMostrare = () => {
    localStorage.setItem(storageKey(), 'chiuso');
    setVisibile(false);
    setChiuso(true);
  };

  if (!visibile || chiuso) return null;
  const oggi = new Date();
  const giorno = oggi.getDate();
  const ultimoGiorno = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 0).getDate();
  const giorniAlFine = ultimoGiorno - giorno + 1;
  // FIX (AI Claude · Apr 2026): variabile `tipo` non era definita.
  // Causava ReferenceError → schermata bianca dopo ~1.2s sul cellulare
  // ogni volta che la notifica fine/inizio mese tentava di renderizzarsi.
  const tipo = tipoNotifica();

  return (
    <>
      {/* Overlay sfumato */}
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
        onClick={() => chiudi()}
      />

      {/* Modal */}
      <div className="fixed z-50 inset-x-4 bottom-6 sm:inset-auto sm:bottom-8 sm:right-8 sm:left-auto sm:w-96 animate-bounce-once"
        style={{ animation: 'slideUp 0.35s ease-out' }}>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Header colorato */}
          <div style={{
            background: tipo === 'inizio'
              ? 'linear-gradient(135deg, #4A3F8E 0%, #6B5FBF 100%)'
              : 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)'
          }} className="px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tipo === 'inizio' ? '📦' : '⏰'}</span>
                <div>
                  <p className="text-white font-bold text-base leading-tight">
                    {tipo === 'inizio' ? 'Inizio mese — Check SIM!' : `Fine mese — mancano ${giorniAlFine} ${giorniAlFine === 1 ? 'giorno' : 'giorni'}!`}
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">
                    {tipo === 'inizio' ? 'Promemoria operativo' : 'Promemoria ordini e ricariche'}
                  </p>
                </div>
              </div>
              <button
                onClick={chiudi}
                className="text-white/70 hover:text-white transition-colors text-xl leading-none ml-2 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Contenuto */}
          <div className="px-5 py-4 space-y-3">

            {/* SIM nei cassetti */}
            <div className="flex items-start gap-3 bg-tiscali-50 rounded-xl p-3">
              <span className="text-xl flex-shrink-0">🗂️</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">Controllate i cassetti delle SIM!</p>
                <p className="text-xs text-gray-500 mt-0.5">Verificate le scorte prima di fare nuove attivazioni.</p>
              </div>
            </div>

            {/* Ordine SIM */}
            <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-3">
              <span className="text-xl flex-shrink-0">👉</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">Ordine SIM</p>
                <p className="text-xs text-gray-600 mt-0.5">
                  L'ordine va fatto sul portale <strong>MySpace</strong> o <strong>Joy</strong>
                </p>
              </div>
            </div>

            {/* Coordinate bancarie */}
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🏦</span>
                <p className="font-bold text-gray-900 text-sm">Coordinate Bancarie E2K</p>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 w-20 flex-shrink-0">IBAN</span>
                  <span className="font-mono font-bold text-gray-900 bg-white border border-gray-200 rounded px-2 py-0.5 select-all text-[11px]">
                    IT90Y0103020700000063290357
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-500 w-20 flex-shrink-0">Beneficiario</span>
                  <span className="font-semibold text-gray-800">Euroelettronica 2000 srl</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-500 w-20 flex-shrink-0">Causale</span>
                  <span className="font-semibold text-gray-800">Acquisto SIM TISCALI</span>
                </div>
              </div>
            </div>

            {/* Plafond ricariche */}
            <div className="flex items-start gap-3 bg-amber-50 rounded-xl p-3 border border-amber-200">
              <span className="text-xl flex-shrink-0">💶</span>
              <div>
                <p className="font-bold text-amber-900 text-sm">Plafond ricariche</p>
                <p className="text-xs text-amber-800 mt-0.5">
                  Minimo <strong>€50</strong> · Acquistare per multipli di <strong>€50</strong>
                </p>
              </div>
            </div>

          </div>

          {/* Footer — due bottoni */}
          <div className="px-5 pb-5 space-y-2">
            <button
              onClick={chiudi}
              className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all"
              style={{ backgroundColor: '#4A3F8E' }}
            >
              Ho capito, grazie!
            </button>
            <button
              onClick={nonMostrare}
              className="w-full py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              Non mostrare più questo mese
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </>
  );
}
