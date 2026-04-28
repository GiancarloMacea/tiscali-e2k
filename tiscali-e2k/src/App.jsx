import { useState, useEffect, useRef, Fragment, Component } from 'react';
import Listino from './components/Listino.jsx';
import Configuratore from './components/Configuratore.jsx';
import Multimedia from './components/Multimedia.jsx';
import ContattiSupporto from './components/ContattiSupporto.jsx';
import NotificaMese from './components/NotificaMese.jsx';

// ─────────────────────────────────────────────────────────────────────
// ErrorBoundary · Generato con AI Claude · Aprile 2026
// Cattura qualsiasi crash di un componente figlio e mostra un fallback
// invece di una schermata bianca. Questo è un safety net: anche se in
// futuro un bug torna a far crashare un componente, l'utente vede un
// messaggio comprensibile invece di una pagina vuota.
// ─────────────────────────────────────────────────────────────────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // Log nella console per debug, non blocca l'utente.
    // eslint-disable-next-line no-console
    console.error('Tiscali E2K — errore catturato:', error, info);
  }
  reset = () => this.setState({ hasError: false, error: null });
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif', color: '#1f2937' }}>
          <h2 style={{ color: '#4A3F8E', marginBottom: 8 }}>Si è verificato un errore</h2>
          <p style={{ color: '#6b7280', marginBottom: 16, fontSize: 14 }}>
            {this.props.label || 'Qualcosa non ha funzionato'}. L'app continua a essere utilizzabile.
          </p>
          <button
            onClick={() => { this.reset(); window.location.reload(); }}
            style={{
              padding: '10px 18px',
              background: '#4A3F8E',
              color: '#fff',
              border: 0,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Ricarica
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─────────────────────────────────────────────────────────────────────
// NavTabs · Generato con AI Claude · Aprile 2026
// Tab bar con:
//  - divisori verticali sottili tra i tab (li separa visivamente come "cassetti")
//  - micro-animazione scroll hint al primo mount (se i tab sbordano):
//    fa un piccolo scroll a destra e ritorna, per far capire che si scorre
//  - gradient overlay a destra che indica c'è altro da scorrere su mobile
//  - sessionStorage previene che l'animazione si rifaccia ad ogni remount
// ─────────────────────────────────────────────────────────────────────
function NavTabs({ tabs, active, onChange }) {
  const scrollRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  // Detect overflow al mount + on resize + on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const overflow = el.scrollWidth > el.clientWidth + 1;
      setHasOverflow(overflow);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Scroll hint: micro-animazione al primo mount per far capire
  // che il menu è scrollabile orizzontalmente.
  // Una volta mostrata, sessionStorage la disabilita per la sessione.
  useEffect(() => {
    if (!hasOverflow) return;
    if (typeof window === 'undefined') return;
    try {
      if (sessionStorage.getItem('__nav_hint_shown')) return;
    } catch (e) { /* sessionStorage non disponibile */ }

    const el = scrollRef.current;
    if (!el) return;

    const t1 = setTimeout(() => {
      el.scrollTo({ left: 70, behavior: 'smooth' });
    }, 700);
    const t2 = setTimeout(() => {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      try { sessionStorage.setItem('__nav_hint_shown', '1'); } catch (e) {}
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hasOverflow]);

  return (
    <nav className="bg-tiscali-600 relative">
      <div className="max-w-7xl mx-auto px-safe">
        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-none">
          {tabs.map((t, idx) => (
            <Fragment key={t.id}>
              {idx > 0 && (
                <span
                  className="self-center w-px h-6 bg-white/15 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              <button
                onClick={() => onChange(t.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3.5 text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-200 border-b-2
                  ${active === t.id
                    ? 'bg-white/10 text-white border-b-white'
                    : 'text-white/70 border-b-transparent hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
              >
                <span className="text-base">{t.icon}</span>
                <span>{t.label}</span>
              </button>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Gradient mask a destra: indica visivamente che ci sono altri tab da
          scorrere. Si fade-out quando l'utente arriva a fine scroll.
          pointer-events-none così non blocca i tap sui bottoni sotto. */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 transition-opacity duration-300 sm:hidden"
        style={{
          background: 'linear-gradient(to left, #4A3F8E 0%, rgba(74,63,142,0) 100%)',
          opacity: hasOverflow && !atEnd ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </nav>
  );
}

const TABS = [
  { id: 'listino',       label: 'Listino',       icon: '📋' },
  { id: 'configuratore', label: 'Configuratore', icon: '⚙️' },
  { id: 'contatti',      label: 'Contatti',      icon: '📞' },
  { id: 'multimedia',    label: 'Materiali',      icon: '📁' },
];

// Logo Tiscali reale
function TiscaliLogo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/loghi/logo-tiscali.png"
        alt="Tiscali"
        className="h-9 object-contain"
      />
      <div className="hidden sm:flex items-center gap-2 border-l border-gray-200 pl-3">
        <span className="text-gray-500 font-light text-base">station</span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500 font-light text-sm">Area Manager</span>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('listino');

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ backgroundColor: '#F2F2F2' }}>
      <ErrorBoundary label="Notifica mese non disponibile">
        <NotificaMese />
      </ErrorBoundary>

      {/* ── HEADER BIANCO con logo ── */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-safe">
          <div className="flex items-center justify-between py-4">
            <TiscaliLogo />
            <span className="text-xs text-gray-400 hidden sm:block">Uso interno riservato · Aprile 2026</span>
          </div>
        </div>

        {/* ── NAV BAR VIOLA — stile Station con scroll hint e divisori ── */}
        <NavTabs tabs={TABS} active={tab} onChange={setTab} />
      </header>

      {/* ── CONTENUTO ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-safe py-8 overflow-x-hidden">
        <ErrorBoundary label={`Sezione "${tab}" non disponibile`}>
          {tab === 'listino'       && <Listino />}
          {tab === 'configuratore' && <Configuratore />}
          {tab === 'contatti'      && <ContattiSupporto />}
          {tab === 'multimedia'    && <Multimedia />}
        </ErrorBoundary>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-safe">
          <p className="text-xs text-gray-400 text-center">Tiscali E2K · Area Manager Tool · Uso interno riservato</p>
        </div>
      </footer>
    </div>
  );
}
