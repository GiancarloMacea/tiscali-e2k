// Componente Contatti Supporto Tiscali — generato con AI Claude
import { useState, useMemo, useEffect } from 'react';
import {
  CONTATTI_SUPPORTO,
  CATEGORIE_CONTATTI,
  NUMERI_SUPPORTO,
  isSupportoAperto,
} from '../data/contatti';

export default function ContattiSupporto() {
  const [filtro, setFiltro] = useState('');
  const [categoriaAttiva, setCategoriaAttiva] = useState('tutti');
  const [tick, setTick] = useState(0);

  // Aggiorna lo stato "aperto/chiuso" ogni minuto
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  const vociFiltrate = useMemo(() => {
    const f = filtro.toLowerCase().trim();
    return CONTATTI_SUPPORTO.filter(v => {
      if (categoriaAttiva !== 'tutti' && v.categoria !== categoriaAttiva) return false;
      if (!f) return true;
      return (
        v.titolo.toLowerCase().includes(f) ||
        v.descrizione.toLowerCase().includes(f) ||
        v.numero.includes(f) ||
        v.tasto.toLowerCase().includes(f) ||
        (v.tags && v.tags.some(t => t.toLowerCase().includes(f)))
      );
    });
  }, [filtro, categoriaAttiva]);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          📞 Contatti Supporto Tiscali
        </h2>
        <p className="text-gray-600 text-sm">
          Albero IVR completo. Cerca per parola chiave o filtra per categoria.
        </p>
      </div>

      {/* Numeri principali */}
      <div className="grid md:grid-cols-2 gap-3 mb-6" key={tick}>
        {NUMERI_SUPPORTO.map(n => {
          const aperto = isSupportoAperto(n.tipo);
          return (
            <div key={n.numero} className="border-2 border-violet-300 rounded-xl p-4 bg-white hover:shadow-md transition">
              <div className="flex items-center justify-between mb-1">
                <a href={`tel:${n.numero}`} className="font-mono text-lg font-bold text-violet-900 hover:underline">
                  {n.numero}
                </a>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  aperto ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'
                }`}>
                  {aperto ? '🟢 Aperto ora' : '🔴 Chiuso'}
                </span>
              </div>
              <div className="text-sm text-gray-700">{n.descrizione}</div>
              <div className="text-xs text-gray-500 mt-1">{n.orari}</div>
            </div>
          );
        })}
      </div>

      {/* Input filtro */}
      <div className="mb-4">
        <input
          type="text"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          placeholder="Cerca: FWA, fatture, SIM, installatore, B2B, swap, CPE, negozio..."
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:outline-none text-sm"
        />
      </div>

      {/* Chip categorie */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setCategoriaAttiva('tutti')}
          className={`px-3 py-1.5 text-sm rounded-full font-medium transition ${
            categoriaAttiva === 'tutti'
              ? 'bg-violet-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tutti ({CONTATTI_SUPPORTO.length})
        </button>
        {Object.entries(CATEGORIE_CONTATTI).map(([k, v]) => {
          const count = CONTATTI_SUPPORTO.filter(c => c.categoria === k).length;
          if (count === 0) return null;
          return (
            <button
              key={k}
              onClick={() => setCategoriaAttiva(k)}
              className={`px-3 py-1.5 text-sm rounded-full font-medium transition ${
                categoriaAttiva === k
                  ? 'bg-violet-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {v.icon} {v.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Lista voci filtrate */}
      <div className="space-y-2">
        {vociFiltrate.length === 0 ? (
          <div className="text-center py-10 text-gray-500 text-sm">
            Nessun risultato per "<strong>{filtro}</strong>". Prova con altre parole chiave.
          </div>
        ) : (
          vociFiltrate.map(v => {
            const cat = CATEGORIE_CONTATTI[v.categoria] || {
              icon: '📞', label: v.categoria, color: 'bg-gray-100 text-gray-800'
            };
            return (
              <div
                key={v.id}
                className={`border rounded-xl p-3 md:p-4 bg-white hover:border-violet-300 transition ${
                  v.warning ? 'border-l-4 border-l-amber-500' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.color}`}>
                        {cat.icon} {cat.label}
                      </span>
                      {v.warning && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-900">
                          ⚠️ Attenzione
                        </span>
                      )}
                    </div>
                    <div className="font-semibold text-gray-900 mb-0.5">{v.titolo}</div>
                    <div className="text-sm text-gray-600">{v.descrizione}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <a
                      href={`tel:${v.numero}`}
                      className="font-mono text-sm font-bold text-violet-900 hover:underline"
                    >
                      {v.numero}
                    </a>
                    <div className="text-xs font-medium bg-violet-100 text-violet-900 px-2 py-1 rounded-md whitespace-nowrap">
                      Tasto {v.tasto}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer link PDF */}
      <div className="mt-6 p-4 bg-violet-50 rounded-xl text-sm text-violet-900">
        📄{' '}
        <a
          href="/Riepilogo_contatti_supporto_per_Business_Partner.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          Scarica il riepilogo contatti ufficiale (PDF)
        </a>
      </div>
    </div>
  );
}
