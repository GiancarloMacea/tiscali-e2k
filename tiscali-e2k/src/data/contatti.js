// Dati contatti supporto Tiscali — generato con AI Claude
// Fonte: Riepilogo_contatti_supporto_per_Business_Partner.pdf

export const CATEGORIE_CONTATTI = {
  tecnica: { label: 'Tecnica', icon: '🔧', color: 'bg-blue-100 text-blue-900' },
  commerciale: { label: 'Commerciale', icon: '💼', color: 'bg-emerald-100 text-emerald-900' },
  amministrativa: { label: 'Amministrativa', icon: '🏢', color: 'bg-amber-100 text-amber-900' },
  fwa: { label: 'FWA', icon: '📡', color: 'bg-indigo-100 text-indigo-900' },
  mobile: { label: 'Mobile', icon: '📱', color: 'bg-rose-100 text-rose-900' },
  cybersecurity: { label: 'Cybersecurity', icon: '🛡️', color: 'bg-red-100 text-red-900' },
  fatturazione: { label: 'Fatturazione', icon: '🧾', color: 'bg-yellow-100 text-yellow-900' },
  logistica: { label: 'Logistica', icon: '📦', color: 'bg-cyan-100 text-cyan-900' },
};

export const NUMERI_SUPPORTO = [
  {
    numero: '0805622001',
    descrizione: 'Business Partner — tutti i servizi',
    orari: 'Lu-Ve 9:00 → 20:00 · chiuso sab/dom/festivi',
    tipo: 'businessPartner',
  },
  {
    numero: '0707574800',
    descrizione: 'Punto vendita (B2C e B2B)',
    orari: 'Lu-Sa 8:30 → 19:00 · chiuso festivi',
    tipo: 'puntoVendita',
  },
];

// Calendario festività italiane (fissi + pasqua mobile approssimata)
function getFestivi() {
  const anno = new Date().getFullYear();
  const festivi = [
    new Date(anno, 0, 1), // 1 gennaio
    new Date(anno, 0, 6), // 6 gennaio
    new Date(anno, 4, 1), // 1 maggio
    new Date(anno, 5, 2), // 2 giugno
    new Date(anno, 7, 15), // 15 agosto
    new Date(anno, 10, 1), // 1 novembre
    new Date(anno, 11, 8), // 8 dicembre
    new Date(anno, 11, 25), // 25 dicembre
    new Date(anno, 11, 26), // 26 dicembre
  ];
  
  // Pasqua (algoritmo di Computus semplificato per anni 1900-2100)
  const a = anno % 19;
  const b = Math.floor(anno / 100);
  const c = anno % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mese = Math.floor((h + l - 7 * m + 114) / 31);
  const giorno = ((h + l - 7 * m + 114) % 31) + 1;
  festivi.push(new Date(anno, mese - 1, giorno)); // Pasqua
  festivi.push(new Date(anno, mese - 1, giorno + 1)); // Lunedì dell'Angelo
  
  return festivi;
}

const FESTIVI = getFestivi();

function isFestivo(data) {
  return FESTIVI.some(f => 
    f.getFullYear() === data.getFullYear() &&
    f.getMonth() === data.getMonth() &&
    f.getDate() === data.getDate()
  );
}

export const CONTATTI_SUPPORTO = [
  // === 0805622001 — Business Partner ===
  {
    id: 'bp-1-1',
    numero: '0805622001',
    tasto: '1 → 1',
    categoria: 'tecnica',
    titolo: 'Partner installatori (ODL aperto)',
    descrizione: 'Assistenza tecnica per partner installatori. Solo in caso di ODL APERTO, dopo che il cliente ha chiamato il 130.',
    warning: true,
    tags: ['installatore', 'ODL', '130'],
  },
  {
    id: 'bp-1-2',
    numero: '0805622001',
    tasto: '1 → 2',
    categoria: 'commerciale',
    titolo: 'Commerciale B2B / Installatore 4G-5G Opnet',
    descrizione: 'Informazioni commerciali contratti B2B. Assistenza tecnica installatore con ODL aperto su tecnologia 4G e 5G Opnet.',
    tags: ['B2B', 'Opnet', '4G', '5G', 'installatore'],
  },
  {
    id: 'bp-1-3',
    numero: '0805622001',
    tasto: '1 → 3',
    categoria: 'tecnica',
    titolo: 'ODL swap',
    descrizione: 'Assistenza per ordini di lavoro di sostituzione (swap).',
    tags: ['swap', 'ODL'],
  },
  {
    id: 'bp-2',
    numero: '0805622001',
    tasto: '2',
    categoria: 'fwa',
    titolo: 'FWA — Amministrativa e Commerciale',
    descrizione: 'Assistenza amministrativa e commerciale per clienti FWA.',
    tags: ['FWA', 'clienti'],
  },
  {
    id: 'bp-3-1',
    numero: '0805622001',
    tasto: '3 → 1',
    categoria: 'commerciale',
    titolo: 'Microbusiness',
    descrizione: 'Assistenza e informazioni commerciali per contratti Microbusiness.',
    tags: ['microbusiness', 'contratti'],
  },
  {
    id: 'bp-3-2',
    numero: '0805622001',
    tasto: '3 → 2',
    categoria: 'mobile',
    titolo: 'Mobile — contratti, SIM, plafond',
    descrizione: 'Informazioni commerciali contratti Mobile, ordini SIM, gestione plafond.',
    tags: ['SIM', 'plafond', 'ordini'],
  },
  {
    id: 'bp-3-3',
    numero: '0805622001',
    tasto: '3 → 3',
    categoria: 'cybersecurity',
    titolo: 'Cybersecurity',
    descrizione: 'Informazioni commerciali, contatti segnalati, stato contratti Cybersecurity.',
    tags: ['sicurezza', 'contratti'],
  },
  {
    id: 'bp-3-4',
    numero: '0805622001',
    tasto: '3 → 4',
    categoria: 'commerciale',
    titolo: 'B2C — contratti consumer',
    descrizione: 'Assistenza e informazioni commerciali per contratti B2C.',
    tags: ['B2C', 'consumer'],
  },
  {
    id: 'bp-3-5',
    numero: '0805622001',
    tasto: '3 → 5',
    categoria: 'fatturazione',
    titolo: 'Fatture e inviti a fatturare',
    descrizione: 'Assistenza e informazioni relative a fatture ed inviti a fatturare del punto vendita.',
    tags: ['fatture', 'pagamenti'],
  },
  {
    id: 'bp-3-6',
    numero: '0805622001',
    tasto: '3 → 6',
    categoria: 'logistica',
    titolo: 'Ordini CPE / Magazzino FWA / Inventari',
    descrizione: 'Ordini CPE e Scratch card FWA, assistenza portale magazzino FWA, inventari apparati.',
    tags: ['CPE', 'scratch card', 'magazzino', 'inventario', 'FWA'],
  },
  {
    id: 'bp-4',
    numero: '0805622001',
    tasto: '4',
    categoria: 'fwa',
    titolo: 'Service Delivery FWA',
    descrizione: 'Attivazioni, delivery, anomalie di consegna per clienti FWA.',
    tags: ['delivery', 'attivazione', 'FWA'],
  },

  // === 0707574800 — Punto Vendita (sdoppiato per categoria reale) ===
  {
    id: 'pv-1',
    numero: '0707574800',
    tasto: '1',
    categoria: 'tecnica',
    titolo: 'Tecnica (punto vendita)',
    descrizione: 'Assistenza tecnica per clienti B2C/B2B presenti nel punto vendita.',
    tags: ['negozio', 'fisico'],
  },
  {
    id: 'pv-2',
    numero: '0707574800',
    tasto: '2',
    categoria: 'amministrativa',
    titolo: 'Commerciale / Amministrativa (punto vendita)',
    descrizione: 'Assistenza commerciale e amministrativa per clienti in punto vendita.',
    tags: ['negozio', 'fisico'],
  },
  {
    id: 'pv-3',
    numero: '0707574800',
    tasto: '3',
    categoria: 'mobile',
    titolo: 'Mobile (punto vendita)',
    descrizione: 'Assistenza prodotto Mobile per clienti in punto vendita.',
    tags: ['negozio', 'fisico', 'SIM'],
  },
];

// Helper per lo stato aperto/chiuso (considera orari E festivi)
export function isSupportoAperto(tipo) {
  const now = new Date();
  const giorno = now.getDay(); // 0 = domenica, 6 = sabato
  const ora = now.getHours() + now.getMinutes() / 60;
  
  // Verifica festivo
  if (isFestivo(now)) return false;
  
  if (tipo === 'businessPartner') {
    if (giorno === 0 || giorno === 6) return false; // domenica o sabato
    return ora >= 9 && ora < 20;
  }
  
  if (tipo === 'puntoVendita') {
    if (giorno === 0) return false; // domenica
    return ora >= 8.5 && ora < 19; // 8:30-19:00 (lu-sa)
  }
  
  return false;
}
