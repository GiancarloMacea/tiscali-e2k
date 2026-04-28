import { useState, useMemo } from 'react';
import { DATI } from '../data/offerte.js';

// ── Icone ─────────────────────────────────────────────────────────────────────
const IconChevron = ({ open }) => (
  <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4 text-tiscali-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
const IconInfo = () => (
  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Colori target — inline styles per garantire visibilità (Tailwind pura le classi dinamiche)
const TARGET_STYLE = {
  timkena: {
    border: { borderLeft: '5px solid #cc0000' },
    badge:  { background: 'linear-gradient(90deg, #cc0000 0%, #0055cc 50%, #f97316 100%)', color: '#fff', fontWeight: 700 },
  },
  orange: {
    border: { borderLeft: '5px solid #f97316' },
    badge:  { backgroundColor: '#f97316', color: '#fff', fontWeight: 700 },
  },
  blue: {
    border: { borderLeft: '5px solid #3b82f6' },
    badge:  { backgroundColor: '#3b82f6', color: '#fff', fontWeight: 700 },
  },
  green: {
    border: { borderLeft: '5px solid #22c55e' },
    badge:  { backgroundColor: '#22c55e', color: '#fff', fontWeight: 700 },
  },
  gray: {
    border: { borderLeft: '5px solid #9ca3af' },
    badge:  { backgroundColor: '#9ca3af', color: '#fff', fontWeight: 700 },
  },
};

// ── Riga espandibile ──────────────────────────────────────────────────────────
function OfferRow({ offerta, isOpen, onToggle }) {
  const ts = offerta.target ? TARGET_STYLE[offerta.target.color] : null;
  return (
    <>
      <tr onClick={onToggle}
        style={ts ? ts.border : {}}
        className={`cursor-pointer transition-colors border-b border-gray-100
          ${isOpen ? 'bg-tiscali-50 border-b-0' : 'hover:bg-gray-50'}`}>

        {/* COLONNA NOME — altezza fissa con tutto allineato verticalmente */}
        <td className="py-0 px-3 sm:px-4" style={{ height: '72px' }}>
          <div className="flex flex-col justify-center h-full gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 text-sm leading-tight">{offerta.nome}</span>
              {offerta.highlight && (
                <span className="inline-flex items-center gap-1 bg-amber-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                  <IconStar /> Consigliata
                </span>
              )}
            </div>
            {/* Badge target — sempre su linea singola, testo non va a capo */}
            {ts && offerta.target && (
              <span style={{
                ...ts.badge,
                fontSize: '10px',
                padding: '2px 8px',
                borderRadius: '999px',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                alignSelf: 'flex-start',
                lineHeight: '16px',
              }}>
                {offerta.target.label}
              </span>
            )}
            {!offerta.target && (
              <p className="text-xs text-gray-500 leading-tight">{offerta.sub || offerta.sottotitolo}</p>
            )}
          </div>
        </td>

        {/* COLONNA PREZZO */}
        <td className="py-0 px-3 sm:px-4" style={{ height: '72px' }}>
          <div className="flex flex-col justify-center h-full">
            {offerta.costoTotale ? (
              <>
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="font-condensed text-2xl font-bold text-tiscali-700">{offerta.costoTotale.label}</span>
                  {offerta.iva && <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">+IVA</span>}
                </div>
                <p className="text-xs text-gray-500 font-medium">{offerta.costoTotale.nota}</p>
              </>
            ) : (
              <>
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="font-condensed text-2xl font-bold text-tiscali-700">{offerta.label || offerta.prezzoLabel}</span>
                  <span className="text-xs text-gray-500">{offerta.suf || offerta.suffisso}</span>
                  {offerta.iva && <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">+IVA</span>}
                </div>
                {offerta.prezzoStep && (
                  <p className="text-[10px] text-orange-600 font-semibold whitespace-nowrap">{offerta.prezzoStep}</p>
                )}
              </>
            )}
          </div>
        </td>

        {/* COLONNA INCLUSO */}
        <td className="py-0 px-3 sm:px-4 hidden lg:table-cell" style={{ height: '72px' }}>
          <div className="flex items-center h-full">
            <span className="text-xs text-gray-600 leading-tight">{(offerta.features || [])[0]}</span>
          </div>
        </td>

        {/* COLONNA DETTAGLI */}
        <td className="py-0 px-3 sm:px-4 text-right" style={{ height: '72px' }}>
          <div className="flex items-center justify-end h-full">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-tiscali-600">
              {isOpen ? 'Chiudi' : 'Dettagli'}
              <IconChevron open={isOpen} />
            </span>
          </div>
        </td>
      </tr>

      {isOpen && (
        <tr className="bg-tiscali-50 border-b border-tiscali-100">
          <td colSpan={4} className="px-3 sm:px-4 pb-5 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Caratteristiche */}
              <div>
                <p className="text-[11px] font-bold text-tiscali-600 uppercase tracking-widest mb-2">Caratteristiche</p>
                <ul className="space-y-1.5">
                  {(offerta.features || []).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <IconCheck />{f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Costi */}
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-tiscali-600 uppercase tracking-widest mb-2">Costi</p>
                <div className="space-y-1.5">
                  {Object.entries(offerta.costi || {}).map(([k, v]) => (
                    <div key={k} className="flex justify-between items-baseline gap-3 text-sm border-b border-tiscali-100 pb-1 pr-1">
                      <span className="text-gray-500 truncate">{k}</span>
                      <span className="font-semibold text-gray-800 text-right whitespace-nowrap flex-shrink-0">{v}</span>
                    </div>
                  ))}
                  {offerta.iva && (
                    <p className="text-[11px] text-amber-600 font-medium pt-1">* Prezzi IVA esclusa (22%)</p>
                  )}
                  {offerta.costoTotale && (
                    <div className="mt-3 bg-tiscali-600 rounded-lg px-3 py-2.5 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-0.5">Costo mensile totale (fisso + mobile)</p>
                      <p className="font-condensed text-2xl font-bold">{offerta.costoTotale.label}</p>
                      <p className="text-[11px] opacity-75 mt-0.5">{offerta.costoTotale.nota}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* Dettagli contrattuali */}
              <div>
                {offerta.dettagli && Object.keys(offerta.dettagli).length > 0 && (
                  <>
                    <p className="text-[11px] font-bold text-tiscali-600 uppercase tracking-widest mb-2">Dettagli e Condizioni</p>
                    <div className="space-y-2">
                      {Object.entries(offerta.dettagli).map(([k, v]) => (
                        <div key={k} className="text-xs border-l-2 border-tiscali-200 pl-2">
                          <span className="block font-bold text-gray-700 mb-0.5">{k}</span>
                          <span className="text-gray-500 leading-relaxed">{v}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {(offerta.note) && (
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    <IconInfo />
                    <p className="text-xs text-amber-800 leading-relaxed">{offerta.note}</p>
                  </div>
                )}
                {offerta.postille && offerta.postille.length > 0 && (
                  <div className="mt-3 col-span-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">📋 Note contrattuali</p>
                    <ul className="space-y-1">
                      {offerta.postille.map((p, i) => (
                        <li key={i} className="text-xs text-gray-600 leading-relaxed flex gap-1.5">
                          <span className="text-gray-400 flex-shrink-0">—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// ── Sezione con intestazione ──────────────────────────────────────────────────
function Sezione({ titolo, icon, offerte, aperta, onToggle, cerca, logoLinkem, logoTiscali, evidenziata }) {
  const visibili = offerte.filter(o =>
    !cerca || o.nome.toLowerCase().includes(cerca.toLowerCase()) ||
    (o.sub || '').toLowerCase().includes(cerca.toLowerCase()) ||
    (o.features || []).some(f => f.toLowerCase().includes(cerca.toLowerCase()))
  );

  if (visibili.length === 0) return null;

  return (
    <div className={`mb-6 ${evidenziata ? 'rounded-2xl ring-2 ring-tiscali-500 shadow-lg overflow-hidden' : ''}`}>
      {/* Banner convergenza evidenziata */}
      {evidenziata && (
        <div style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 50%, #0ea5e9 100%)' }}
          className="px-4 py-2.5 flex items-center gap-2">
          <span className="text-base">⭐</span>
          <span className="text-white font-bold text-sm tracking-wide">OFFERTA BUNDLE CONSIGLIATA — Risparmio garantito</span>
          <span className="ml-auto bg-white bg-opacity-20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            FISSO + MOBILE
          </span>
        </div>
      )}
      {/* Header sezione */}
      <div className={`flex items-center gap-3 mb-3 pb-2 border-b-2 ${evidenziata ? 'border-tiscali-500 px-3 pt-3' : 'border-tiscali-600'}`}>
        {!logoLinkem && !logoTiscali && <span className="text-lg">{icon}</span>}
        {logoTiscali ? (
          <img src="/loghi/logo-tiscali.png" alt="Tiscali" className="h-7 object-contain" />
        ) : logoLinkem ? (
          <img src="/loghi/logo-linkem.png" alt="Linkem" className="h-6 object-contain" />
        ) : (
          <h3 className={`font-condensed text-xl font-bold tracking-tight ${evidenziata ? 'text-tiscali-700' : 'text-gray-800'}`}>{titolo}</h3>
        )}
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 font-medium">{visibili.length} {visibili.length === 1 ? 'offerta' : 'offerte'}</span>
      </div>

      {/* Tabella */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-md w-full bg-white">
        <table className="w-full min-w-full text-left">
          <thead>
            <tr className="bg-tiscali-700 text-white text-xs uppercase tracking-wider">
              <th className="py-2.5 px-4 font-semibold">Offerta</th>
              <th className="py-2.5 px-4 font-semibold">Prezzo</th>
              <th className="py-2.5 px-4 font-semibold hidden lg:table-cell">Incluso</th>
              <th className="py-2.5 px-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {visibili.map(o => (
              <OfferRow
                key={o.id}
                offerta={o}
                isOpen={aperta === o.id}
                onToggle={() => onToggle(o.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── LISTINO PRINCIPALE ────────────────────────────────────────────────────────
export default function Listino() {
  const [segmento, setSegmento] = useState('residenziale');
  const [aperta, setAperta]     = useState(null);
  const [cerca, setCerca]       = useState('');

  const toggle = (id) => setAperta(prev => prev === id ? null : id);

  const handleSegmento = (s) => { setSegmento(s); setAperta(null); setCerca(''); };

  // Sezioni per segmento
  const fwaRes = DATI.residenziale.fisso.filter(o => o.id && o.id.startsWith('res-fwa'));
  const fissoRes = DATI.residenziale.fisso.filter(o => !o.id || !o.id.startsWith('res-fwa'));

  const sezioniRes = [
    { titolo: 'Fisso + Mobile — Bundle Convergente', icon: '🔗', offerte: DATI.residenziale.convergente, evidenziata: true },
    {
      titolo: 'Mobile 5,99€/mese — Portabilità o Nuovo numero',
      icon: '📱',
      offerte: DATI.residenziale.mobile.filter(o => o.prezzo === 5.99),
    },
    {
      titolo: 'Mobile 7,99€/mese — Portabilità o Nuovo numero',
      icon: '📱',
      offerte: DATI.residenziale.mobile.filter(o => o.prezzo === 7.99),
    },
    {
      titolo: 'Mobile 10,99€/mese — Portabilità o Nuovo numero',
      icon: '📱',
      offerte: DATI.residenziale.mobile.filter(o => o.prezzo === 10.99),
    },
    {
      titolo: 'Mobile IoT / Domotica',
      icon: '🏠',
      offerte: DATI.residenziale.mobile.filter(o => o.prezzo === 1.99),
    },
    { titolo: 'Fisso Fibra FTTH',        icon: '📡', offerte: fissoRes },
    { titolo: 'Linkem FWA 5G Indoor',    icon: '📶', offerte: fwaRes.filter(o => o.indoor === true), logoLinkem: true },
    { titolo: 'Linkem FWA 5G Outdoor',   icon: '📶', offerte: fwaRes.filter(o => o.indoor === false && o.id !== 'res-fwa-4g'), logoLinkem: false },
    { titolo: 'Linkem FWA 4G',           icon: '📶', offerte: fwaRes.filter(o => o.id === 'res-fwa-4g'), logoLinkem: false },
  ];

  const fwaBiz = DATI.business.fisso.filter(o => o.id && o.id.startsWith('biz-fwa'));
  const fissoBiz = DATI.business.fisso.filter(o => !o.id || !o.id.startsWith('biz-fwa'));

  const sezoniBiz = [
    { titolo: 'Mobile Business',         icon: '📱', offerte: DATI.business.mobile },
    { titolo: 'Fisso Business FTTH',     icon: '📡', offerte: fissoBiz.filter(o => o.id !== 'biz-fis-2') },
    { titolo: 'Fisso + Mobile',          icon: '🔗', offerte: fissoBiz.filter(o => o.id === 'biz-fis-2') },
    { titolo: 'Linkem FWA 5G',            icon: '📶', offerte: fwaBiz },
    { titolo: 'Premium + Backup LTE',    icon: '🛡️', offerte: DATI.premium },
  ];

  const sezioni = segmento === 'residenziale' ? sezioniRes : sezoniBiz;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-condensed text-3xl font-bold text-gray-900 mb-1">Listino Offerte</h2>
        <p className="text-sm text-gray-500">Clicca su un'offerta per vedere tutti i dettagli. Aprile 2026.</p>
      </div>

      {/* Toggle segmento */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="inline-flex bg-gray-100 rounded-xl p-1">
          {[
            { id: 'residenziale', label: '🏠 Residenziale' },
            { id: 'business',     label: '🏢 Business P.IVA' },
          ].map(s => (
            <button key={s.id} onClick={() => handleSegmento(s.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150
                ${segmento === s.id ? 'bg-station-yellow text-gray-900 shadow-sm font-bold' : 'text-gray-600 hover:text-gray-900'}`}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Ricerca */}
        <div className="relative flex-1 max-w-xs">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Cerca offerta..." value={cerca}
            onChange={e => setCerca(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tiscali-500" />
        </div>
      </div>

      {/* Avviso IVA */}
      {segmento === 'business' && (
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 mb-5 text-sm text-amber-800">
          <IconInfo />
          <span>Tutti i prezzi Business si intendono <strong>IVA esclusa</strong> (22%)</span>
        </div>
      )}

      {/* Sezioni */}
      {sezioni.map(s => (
        <Sezione
          key={s.titolo}
          titolo={s.titolo}
          icon={s.icon}
          offerte={s.offerte}
          aperta={aperta}
          onToggle={toggle}
          cerca={cerca}
          logoLinkem={s.logoLinkem}
          logoTiscali={s.logoTiscali}
          evidenziata={s.evidenziata}
        />
      ))}

      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Offerte soggette a variazioni. Verificare disponibilità copertura prima dell'attivazione. Aprile 2026 — E2K Area Manager Tool.
      </p>
    </div>
  );
}
