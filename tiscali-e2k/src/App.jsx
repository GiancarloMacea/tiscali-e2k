import { useState } from 'react';
import Listino from './components/Listino.jsx';
import Configuratore from './components/Configuratore.jsx';
import Multimedia from './components/Multimedia.jsx';
import NotificaMese from './components/NotificaMese.jsx';

const TABS = [
  { id: 'listino',       label: 'Listino',       icon: '📋' },
  { id: 'configuratore', label: 'Configuratore', icon: '⚙️' },
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
      <NotificaMese />

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
        {tab === 'listino'       && <Listino />}
        {tab === 'configuratore' && <Configuratore />}
        {tab === 'multimedia'    && <Multimedia />}
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
