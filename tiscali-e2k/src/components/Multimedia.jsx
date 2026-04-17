import { useState, useEffect } from 'react';

const CATEGORIE = [
  { id: 'tutte',      label: 'Tutti',           icon: '📁' },
  { id: 'brochure',  label: 'Infoblocco',         icon: '📑' },
  { id: 'social',     label: 'Materiali Social',  icon: '📲' },
  { id: 'formazione', label: 'Formazione',        icon: '📚' },
  { id: 'freshdesk',  label: 'Freshdesk',         icon: '🎫' },
];

const categoriaFromPath = (p) => {
  if (p.startsWith('brochure/'))   return 'brochure';
  if (p.startsWith('promo/'))      return 'social';
  if (p.startsWith('social/'))     return 'social';
  if (p.startsWith('formazione/freshdesk/')) return 'freshdesk';
  if (p.startsWith('formazione/')) return 'formazione';
  return 'schede';
};

const formatSize = (b) => {
  if (!b) return '';
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(0)} KB`;
  return `${(b / 1048576).toFixed(1)} MB`;
};

const EXT_ICONS = {
  pdf: '📕', html: '🌐', txt: '📝',
  png: '🖼️', jpg: '🖼️', jpeg: '🖼️', webp: '🖼️',
  mp4: '🎬', mov: '🎬', pptx: '📊', ppt: '📊',
};

function FileCard({ file }) {
  const nome = file.pathname.split('/').pop();
  const ext  = nome.split('.').pop()?.toLowerCase() || '';
  const data = file.uploadedAt
    ? new Date(file.uploadedAt).toLocaleDateString('it-IT')
    : '';
  const isImage = ['png','jpg','jpeg','webp'].includes(ext);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-tiscali-300 transition-all flex flex-col gap-3 p-4">
      <div className="bg-tiscali-50 rounded-lg h-28 flex items-center justify-center overflow-hidden">
        {isImage
          ? <img src={file.url} alt={nome} className="h-full w-full object-cover rounded-lg"
              onError={e => { e.target.style.display='none'; }} />
          : <span className="text-4xl">{EXT_ICONS[ext] || '📎'}</span>
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 leading-snug truncate" title={nome}>{nome}</p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-[10px] font-bold bg-tiscali-100 text-tiscali-700 px-1.5 py-0.5 rounded uppercase">{ext}</span>
          {file.size > 0 && <span className="text-xs text-gray-400">{formatSize(file.size)}</span>}
          {data && <span className="text-xs text-gray-400">{data}</span>}
        </div>
      </div>
      <div className="flex gap-2">
        <a href={file.url} target="_blank" rel="noreferrer"
          className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-tiscali-50 hover:text-tiscali-700 transition-colors">
          👁 Apri
        </a>
        <a href={file.url} download={nome}
          className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-tiscali-600 text-white hover:bg-tiscali-700 transition-colors">
          ⬇ Scarica
        </a>
      </div>
    </div>
  );
}

export default function Multimedia() {
  const [files, setFiles]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore]   = useState(null);
  const [cat, setCat]         = useState('tutte');
  const [cerca, setCerca]     = useState('');

  useEffect(() => {
    async function carica() {
      const token = import.meta.env.VITE_BLOB_TOKEN;
      if (!token) {
        setErrore('token_missing');
        setLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/blobs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setFiles((data.blobs || []).filter(b => {
          const p = b.pathname;
          const ext = p.split('.').pop()?.toLowerCase();
          // Escludi: index.json, file .txt, voci di cartella, schede prodotto
          if (p.startsWith('index')) return false;
          if (p.startsWith('schede/')) return false;
          if (p.endsWith('/')) return false;
          if (ext === 'txt' || ext === 'json') return false;
          return true;
        }));
      } catch (e) {
        setErrore('fetch_error');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    carica();
  }, []);

  const visibili = files.filter(f => {
    const matchCat  = cat === 'tutte' || categoriaFromPath(f.pathname) === cat;
    const matchText = !cerca || f.pathname.toLowerCase().includes(cerca.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-condensed text-3xl font-bold text-gray-900 mb-1">Multimedia & Marketing</h2>
        <p className="text-sm text-gray-500">Schede prodotto, infoblocco e materiali formativi · Aprile 2026</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-xs">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Cerca file..." value={cerca}
            onChange={e => setCerca(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tiscali-400" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {CATEGORIE.map(c => (
            <button key={c.id} onClick={() => setCat(c.id)}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors
                ${cat === c.id
                  ? 'bg-tiscali-600 text-white border-tiscali-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-tiscali-300 hover:text-tiscali-600'}`}>
              {c.icon} {c.label}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <div className="w-8 h-8 border-2 border-tiscali-200 border-t-tiscali-600 rounded-full animate-spin mb-3" />
          <p className="text-sm">Caricamento materiali...</p>
        </div>
      )}

      {errore === 'token_missing' && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-sm font-bold text-amber-800 mb-3">⚙️ Configurazione necessaria</p>
          <div className="text-xs text-amber-700 space-y-1">
            <p>1. Vai su <strong>vercel.com → tiscali-e2k → Settings → Environment Variables</strong></p>
            <p>2. Aggiungi la variabile: <code className="bg-amber-100 px-1 rounded font-mono">VITE_BLOB_TOKEN</code></p>
            <p>3. Valore: il tuo <code className="bg-amber-100 px-1 rounded font-mono">BLOB_READ_WRITE_TOKEN</code></p>
            <p>4. Salva e fai <strong>Redeploy</strong> dall'ultimo deployment</p>
          </div>
        </div>
      )}

      {errore === 'fetch_error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-700">Impossibile caricare i materiali. Controlla la connessione.</p>
        </div>
      )}

      {!loading && !errore && visibili.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-3">📭</span>
          <p className="text-gray-500 text-sm">
            {files.length === 0
              ? 'Nessun materiale ancora caricato. Usa script/upload-promo.js per aggiungere file.'
              : 'Nessun file corrisponde ai filtri.'}
          </p>
        </div>
      )}

      {!loading && !errore && visibili.length > 0 && (
        <>
          <p className="text-xs text-gray-400 mb-3">{visibili.length} file disponibili</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {visibili.map(f => <FileCard key={f.url} file={f} />)}
          </div>
        </>
      )}

    </div>
  );
}
