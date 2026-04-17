import { useState } from 'react';
import { DATI } from '../data/offerte.js';
import PercheTiscali from './PercheTiscali.jsx';

// ─── COSTANTI ─────────────────────────────────────────────────────────────────
const S = { HOME: 'home', CAT: 'cat', LIST: 'list', DETAIL: 'detail', SRV: 'srv', SRV_D: 'srv_d', PERCHE: 'perche' };

const HOME_VOCI = [
  { id: 'perche',       label: 'Perché vendere Tiscali',   sub: 'Vantaggi, APN, Freshdesk e argomenti di vendita', icon: '💡' },
  { id: 'residenziale', label: 'Residenziale',             sub: 'Offerte per privati e famiglie',                  icon: '🏠' },
  { id: 'business',     label: 'Business',                 sub: 'Partite IVA e piccole imprese · prezzi +IVA',     icon: '🏢' },
  { id: 'premium',      label: 'Business Premium',         sub: 'Fibra con Backup 4G automatico incluso · +IVA',   icon: '🛡️' },
  { id: 'servizi',      label: 'Dettagli e Specifiche',    sub: 'AXA, roaming, installazione, vincoli e servizi',  icon: '📋' },
];

const CAT_VOCI = {
  residenziale: [
    { id: 'mobile',      label: 'Mobile',          sub: 'SIM 5G/4G · da 1,99€/mese',          icon: '📱' },
    { id: 'fisso',       label: 'Fisso Fibra FTTH', sub: 'FTTH fino a 2.5 Gbps · da 19,90€/mese', icon: '📡' },
    { id: 'fwa-indoor',  label: 'Linkem FWA Indoor',  sub: '5G Indoor · da 14,90€/mese*', icon: '📶' },
    { id: 'fwa-outdoor', label: 'Linkem FWA Outdoor', sub: '5G Outdoor + 4G · da 14,90€/mese*', icon: '📡' },
    { id: 'convergente', label: 'Fisso + Mobile',  sub: 'Prezzo garantito · da 23,90€/mese',   icon: '🔗' },
  ],
  business: [
    { id: 'mobile',      label: 'Mobile Business', sub: 'SIM aziendali 5G/4G · da 1,99€+IVA/mese', icon: '📱' },
    { id: 'fisso',       label: 'Fisso Business',  sub: 'FTTH/FTTC Business · da 24,90€+IVA/mese',  icon: '📡' },
    { id: 'convergente', label: 'Fisso + Mobile',  sub: 'Convergente Business · 24,90€+IVA/mese',    icon: '🔗' },
  ],
};

// ─── BACK BUTTON STILE SKY ────────────────────────────────────────────────────
function Back({ onClick, label }) {
  return (
    <button onClick={onClick}
      className="flex items-center gap-3 w-full text-left px-4 py-3 mb-5
        bg-white border border-tiscali-600 rounded-xl shadow-sm
        hover:bg-tiscali-600 hover:text-white transition-all group">
      <div className="w-8 h-8 rounded-lg bg-tiscali-100 group-hover:bg-white/20
        flex items-center justify-center flex-shrink-0 transition-colors">
        <svg className="w-4 h-4 text-tiscali-600 group-hover:text-white transition-colors"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div>
        <p className="text-[10px] font-bold text-tiscali-400 group-hover:text-white/70 uppercase tracking-wider leading-none mb-0.5 transition-colors">Torna a</p>
        <p className="text-sm font-bold text-gray-800 group-hover:text-white leading-none transition-colors">{label}</p>
      </div>
    </button>
  );
}

const Chevron = () => (
  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Bread = ({ voci }) => (
  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5 flex-wrap">
    {voci.map((v, i) => (
      <span key={i} className="flex items-center gap-1.5">
        {i > 0 && <span className="text-gray-300">›</span>}
        <span className={i === voci.length - 1 ? 'text-tiscali-600 font-semibold' : ''}>{v}</span>
      </span>
    ))}
  </div>
);

// ─── BOTTONE GRANDE (stile Sky) ───────────────────────────────────────────────

const TARGET_STYLE = {
  timkena: {
    border: '5px solid #cc0000',
    badge:  { background: 'linear-gradient(90deg, #cc0000 0%, #0055cc 50%, #f97316 100%)', color: '#fff' },
    hover:  '#fff5f5',
  },
  orange: { border: '5px solid #f97316', badge: { backgroundColor: '#f97316', color: '#fff' }, hover: '#fff7ed' },
  blue:   { border: '5px solid #3b82f6', badge: { backgroundColor: '#3b82f6', color: '#fff' }, hover: '#eff6ff' },
  green:  { border: '5px solid #22c55e', badge: { backgroundColor: '#22c55e', color: '#fff' }, hover: '#f0fdf4' },
  gray:   { border: '5px solid #9ca3af', badge: { backgroundColor: '#9ca3af', color: '#fff' }, hover: '#f9fafb' },
};

function BigBtn({ icon, label, sub, prezzo, highlight, target, onClick }) {
  const ts = target ? TARGET_STYLE[target.color] : null;
  return (
    <button onClick={onClick}
      style={ts && !highlight ? { borderLeft: ts.border.borderLeft } : {}}
      className={`w-full flex items-center gap-4 px-4 sm:px-5 py-4 bg-white rounded-xl border text-left overflow-hidden
        transition-all group hover:shadow-md
        ${highlight
          ? 'border-tiscali-400 shadow-sm hover:border-tiscali-500'
          : 'border-gray-200 shadow-sm hover:border-tiscali-300'
        }`}>
      {/* Icona */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl
        ${highlight ? 'bg-tiscali-600 text-white' : 'bg-tiscali-50'}`}>
        {icon}
      </div>
      {/* Testo */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-gray-900 text-sm">{label}</span>
          {highlight && (
            <span className="text-[10px] font-bold bg-tiscali-600 text-white px-2 py-0.5 rounded-full">⭐ Consigliata</span>
          )}
        </div>
        {/* Badge target con inline style garantito */}
        {ts && target && (
          <span style={{
            ...ts.badge,
            fontSize: '11px',
            padding: '2px 10px',
            borderRadius: '999px',
            display: 'inline-block',
            marginTop: '4px',
          }}>
            {target.label}
          </span>
        )}
        {!target && sub && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{sub}</p>}
      </div>
      {/* Prezzo + freccia */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {prezzo && (
          <span className="font-condensed text-xl font-bold text-tiscali-700 whitespace-nowrap">{prezzo}</span>
        )}
        <Chevron />
      </div>
    </button>
  );
}

// ─── SCHEDA DETTAGLIO OFFERTA ─────────────────────────────────────────────────
function Dettaglio({ offerta, bread, onBack, backLabel }) {
  return (
    <div>
      <Back onClick={onBack} label={backLabel || 'Lista Tariffe'} />

      {/* Hero prezzo */}
      <div className={`rounded-2xl p-6 mb-5 ${offerta.highlight
        ? 'bg-gradient-to-br from-tiscali-600 to-tiscali-800 text-white'
        : 'bg-tiscali-50 border border-tiscali-100'}`}>
        {offerta.highlight && (
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3">
            ⭐ Consigliata
          </span>
        )}
        <h2 className={`font-condensed text-2xl font-bold mb-1 leading-tight ${offerta.highlight ? 'text-gray-900 font-bold' : 'text-gray-900'}`}>
          {offerta.nome}
        </h2>
        <p className={`text-sm mb-4 ${offerta.highlight ? 'text-white/75' : 'text-gray-500'}`}>{offerta.sub}</p>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className={`font-condensed text-5xl font-bold ${offerta.highlight ? 'text-gray-900' : 'text-tiscali-700'}`}>
            {offerta.label}
          </span>
          <span className={`text-base ${offerta.highlight ? 'text-gray-700' : 'text-gray-500'}`}>{offerta.suf}</span>
          {offerta.iva && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${offerta.highlight ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>
              +IVA 22%
            </span>
          )}
        </div>
        {offerta.costoTotale && (
          <div className={`mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 ${offerta.highlight ? 'bg-gray-900/10' : 'bg-tiscali-600'}`}>
            <div>
              <p className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Totale mensile fisso + mobile</p>
              <p className="font-condensed text-2xl font-bold text-white">{offerta.costoTotale.label}</p>
              <p className="text-[11px] text-white/70">{offerta.costoTotale.nota}</p>
            </div>
          </div>
        )}
      </div>

      {/* Caratteristiche */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4 overflow-hidden">
        <div className="bg-tiscali-600 px-4 py-2.5">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">✓ Incluso nell'offerta</h3>
        </div>
        <ul className="divide-y divide-gray-50">
          {offerta.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 px-4 py-3">
              <span className="w-5 h-5 rounded-full bg-tiscali-100 text-tiscali-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
              <span className="text-sm text-gray-700">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Costi */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4 overflow-hidden">
        <div className="bg-gray-700 px-4 py-2.5">
          <h3 className="text-white font-bold text-xs uppercase tracking-wider">💰 Costi</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {Object.entries(offerta.costi).map(([k, v]) => (
            <div key={k} className="flex justify-between items-center px-4 py-3">
              <span className="text-sm text-gray-500">{k}</span>
              <span className="text-sm font-bold text-gray-900">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dettagli contrattuali */}
      {offerta.dettagli && Object.keys(offerta.dettagli).length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4 overflow-hidden">
          <div className="bg-tiscali-700 px-4 py-2.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider">📋 Dettagli e Condizioni</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {Object.entries(offerta.dettagli).map(([k, v]) => (
              <div key={k} className="px-4 py-3">
                <p className="text-[10px] font-bold text-tiscali-600 uppercase tracking-wider mb-1">{k}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {offerta.postille && offerta.postille.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">📌 Note contrattuali</p>
          <ul className="space-y-2">
            {offerta.postille.map((p, i) => (
              <li key={i} className="text-xs text-gray-600 leading-relaxed flex gap-2">
                <span className="text-tiscali-400 flex-shrink-0 font-bold">—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-xs text-gray-400 text-center mt-2">
        Dati aggiornati Aprile 2026 · Verificare copertura prima dell'attivazione.
      </p>
    </div>
  );
}

// ─── DETTAGLIO SERVIZIO ───────────────────────────────────────────────────────
function ServizioDettaglio({ srv, onBack }) {
  return (
    <div>
      <Back onClick={onBack} label="Dettagli e Specifiche Servizi" />
      <Bread voci={['Dettagli Servizi', srv.nome]} />
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{srv.icon}</span>
        <h2 className="font-condensed text-2xl font-bold text-gray-900">{srv.nome}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {srv.sezioni.map((sez, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-tiscali-600 px-4 py-2.5">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider">{sez.titolo}</h3>
            </div>
            <ul className="divide-y divide-gray-50">
              {sez.voci.map((v, j) => {
                // Se la voce contiene un path PDF, rendila cliccabile
                const pdfMatch = v.match(/\/[\w_-]+\.pdf/);
                return (
                  <li key={j} className="flex items-start gap-3 px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-tiscali-500 flex-shrink-0 mt-2" />
                    {pdfMatch ? (
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {v.replace(pdfMatch[0], '')}
                        <a href={pdfMatch[0]} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 ml-1 font-bold text-tiscali-600 underline hover:text-tiscali-800">
                          📄 Scarica PDF
                        </a>
                      </span>
                    ) : (
                      <span className="text-sm text-gray-700 leading-relaxed">{v}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TASTO RICOMINCIA ────────────────────────────────────────────────────────
function RicominciaBtn({ onClick }) {
  return (
    <button onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-tiscali-600 transition-colors mt-8 mx-auto font-medium">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Ricomincia dall'inizio
    </button>
  );
}


export default function Configuratore() {
  const [step, setStep]   = useState(S.HOME);
  const [seg, setSeg]     = useState(null);   // residenziale | business | premium
  const [cat, setCat]     = useState(null);   // mobile | fisso | convergente
  const [offerta, setOff] = useState(null);
  const [servizio, setSrv] = useState(null);

  const goHome = () => { setStep(S.HOME); setSeg(null); setCat(null); setOff(null); setSrv(null); };

  // Ottieni offerte per step LIST
  const getOfferte = () => {
    if (seg === 'premium') return DATI.premium;
    if (seg === 'residenziale') {
      if (cat === 'mobile')      return DATI.residenziale.mobile;
      if (cat === 'fisso')       return DATI.residenziale.fisso.filter(o => !o.id?.startsWith('res-fwa'));
      if (cat === 'fwa-indoor')  return DATI.residenziale.fisso.filter(o => o.indoor === true);
      if (cat === 'fwa-outdoor') return DATI.residenziale.fisso.filter(o => o.id?.startsWith('res-fwa') && o.indoor === false);
      if (cat === 'convergente') return DATI.residenziale.convergente;
      return DATI.residenziale[cat] || [];
    }
    if (seg === 'business') {
      if (cat === 'mobile')      return DATI.business.mobile;
      if (cat === 'fisso')       return DATI.business.fisso.filter(o => !o.id?.startsWith('biz-fwa') && o.id !== 'biz-fis-2');
      if (cat === 'fwa')         return DATI.business.fisso.filter(o => o.id?.startsWith('biz-fwa'));
      if (cat === 'convergente') return DATI.business.fisso.filter(o => o.id === 'biz-fis-2');
      return DATI.business[cat] || [];
    }
    return [];
  };

  // Breadcrumb
  const segLabel = { residenziale: 'Residenziale', business: 'Business', premium: 'Business Premium' };
  const catLabel = { mobile: 'Mobile', fisso: 'Fisso', fwa: 'Linkem FWA', 'fwa-indoor': 'Linkem FWA Indoor', 'fwa-outdoor': 'Linkem FWA Outdoor', convergente: 'Fisso + Mobile' };

  // ── HOME ──
  if (step === S.HOME) return (
    <div>
      <div className="mb-6">
        <h2 className="font-condensed text-3xl font-bold text-gray-900 mb-1">Configuratore Tiscali</h2>
        <p className="text-sm text-gray-500">Seleziona la tipologia per iniziare.</p>
      </div>
      <div className="flex flex-col gap-3 max-w-2xl">
        {HOME_VOCI.map(v => (
          <BigBtn key={v.id} icon={v.icon} label={v.label} sub={v.sub}
            onClick={() => {
              if (v.id === 'perche')   { setStep(S.PERCHE); return; }
              if (v.id === 'servizi')  { setStep(S.SRV); return; }
              if (v.id === 'premium')  { setSeg('premium'); setStep(S.LIST); return; }
              setSeg(v.id); setStep(S.CAT);
            }}
          />
        ))}
      </div>
    </div>
  );

  // ── CATEGORIA ──
  if (step === S.CAT) return (
    <div className="max-w-2xl w-full overflow-x-hidden">
      <Back onClick={goHome} label="Selezione Tipologia" />
      <div className="mb-6">
        <h2 className="font-condensed text-2xl font-bold text-gray-900">Cosa stai cercando?</h2>
      </div>
      <div className="flex flex-col gap-3">
        {(CAT_VOCI[seg] || []).map(c => (
          <BigBtn key={c.id} icon={c.icon} label={c.label} sub={c.sub}
            onClick={() => { setCat(c.id); setStep(S.LIST); }}
          />
        ))}
      </div>
      <RicominciaBtn onClick={goHome} />
    </div>
  );

  // ── LISTA TARIFFE ──
  if (step === S.LIST) {
    const offerte = getOfferte();
    const icone = { mobile: '📱', fisso: '📡', convergente: '🔗', premium: '🛡️' };
    const ico = icone[cat] || icone.premium;
    return (
      <div className="max-w-2xl w-full overflow-x-hidden">
        <Back onClick={() => seg === 'premium' ? goHome() : setStep(S.CAT)}
          label={seg === 'premium' ? 'Selezione Tipologia' : segLabel[seg]} />
        <div className="mb-6">
          <h2 className="font-condensed text-2xl font-bold text-gray-900">Scegli la tariffa</h2>
          <p className="text-sm text-gray-500 mt-0.5">Clicca per vedere tutti i dettagli e le condizioni.</p>
        </div>
        <div className="flex flex-col gap-3">
          {offerte.map(o => (
            <BigBtn key={o.id} icon={ico} label={o.nome} sub={o.sub}
              prezzo={`${o.label} ${o.suf}`} highlight={o.highlight}
              target={o.target}
              onClick={() => { setOff(o); setStep(S.DETAIL); }}
            />
          ))}
        </div>
        <RicominciaBtn onClick={goHome} />
      </div>
    );
  }

  // ── DETTAGLIO ──
  if (step === S.DETAIL && offerta) return (
    <div className="max-w-2xl w-full overflow-x-hidden">
      <Dettaglio
        offerta={offerta}
        bread={[segLabel[seg], catLabel[cat] || 'Tariffe', offerta.nome].filter(Boolean)}
        onBack={() => setStep(S.LIST)}
        backLabel={catLabel[cat] || 'Tariffe'}
      />
      <RicominciaBtn onClick={goHome} />
    </div>
  );

  // ── SERVIZI ──
  if (step === S.SRV) return (
    <div className="max-w-2xl w-full overflow-x-hidden">
      <Back onClick={goHome} label="Selezione Tipologia" />
      <div className="mb-6">
        <h2 className="font-condensed text-2xl font-bold text-gray-900">Servizi e Specifiche</h2>
        <p className="text-sm text-gray-500 mt-0.5">AXA, roaming, installazione, vincoli e servizi inclusi.</p>
      </div>
      <div className="flex flex-col gap-3">
        {DATI.servizi.map(s => (
          <BigBtn key={s.id} icon={s.icon} label={s.nome}
            onClick={() => { setSrv(s); setStep(S.SRV_D); }}
          />
        ))}
      </div>
      <RicominciaBtn onClick={goHome} />
    </div>
  );

  // ── SERVIZIO DETTAGLIO ──
  if (step === S.SRV_D && servizio) return (
    <div className="max-w-2xl w-full overflow-x-hidden">
      <ServizioDettaglio servizio={servizio} onBack={() => setStep(S.SRV)} />
      <RicominciaBtn onClick={goHome} />
    </div>
  );

  // ── PERCHÉ TISCALI ──
  if (step === S.PERCHE) return (
    <div className="max-w-2xl w-full overflow-x-hidden">
      <Back onClick={goHome} label="Menu principale" />
      <PercheTiscali />
      <RicominciaBtn onClick={goHome} />
    </div>
  );

  return null;
}
