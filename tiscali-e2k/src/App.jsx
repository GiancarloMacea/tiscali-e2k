import { useState, Component } from 'react';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <TiscaliLogo />
            <span className="text-xs text-gray-400 hidden sm:block">Uso interno riservato · Aprile 2026</span>
          </div>
        </div>

        {/* ── NAV BAR VIOLA — stile Station ── */}
        <nav className="bg-tiscali-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-none">
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 px-6 py-3.5 text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all border-b-2
                    ${tab === t.id
                      ? 'bg-white/10 text-white border-white'
                      : 'text-white/70 border-transparent hover:text-white hover:bg-white/10'
                    }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* ── CONTENUTO ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
        <ErrorBoundary label={`Sezione "${tab}" non disponibile`}>
          {tab === 'listino'       && <Listino />}
          {tab === 'configuratore' && <Configuratore />}
          {tab === 'contatti'      && <ContattiSupporto />}
          {tab === 'multimedia'    && <Multimedia />}
        </ErrorBoundary>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 text-center">Tiscali E2K · Area Manager Tool · Uso interno riservato</p>
        </div>
      </footer>
    </div>
  );
}
