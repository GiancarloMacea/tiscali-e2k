const VANTAGGI = [
  {
    id: 1, icon: '📶', badge: 'Qualità rete', color: 'blue',
    titolo: 'Rete TIM non cappata + 5G incluso',
    descrizione: 'Tiscali Mobile naviga sulla rete TIM, la migliore rete mobile italiana. Non cappata: il cliente ha le stesse velocità 5G degli altri operatori TIM, senza throttling. Il 5G è incluso in tutte le offerte senza costo aggiuntivo.',
  },
  {
    id: 2, icon: '💰', badge: 'Prezzo', color: 'green',
    titolo: 'Offerte concorrenziali',
    descrizione: 'Prezzi competitivi su tutte le fasce: da 5,99€ a 23,99€/mese per il mobile, con GB elevati e senza costi nascosti. Difficile trovare di meglio sulle stesse condizioni di rete TIM.',
  },
  {
    id: 3, icon: '🛂', badge: 'Accessibilità', color: 'purple',
    titolo: 'Nuovi numeri anche solo con passaporto',
    descrizione: 'Per le nuove numerazioni non serve la carta d\'identità italiana: è sufficiente il passaporto. Amplia il bacino di clientela: turisti, expat e stranieri residenti in Italia.',
  },
  {
    id: 4, icon: '⚡', badge: 'Semplicità operativa', color: 'yellow',
    titolo: 'Tiscali Station: pochi passaggi, attivazione semplice',
    descrizione: 'Tiscali Station è intuitiva e ha pochi passaggi per il rivenditore. Inserire una pratica è rapido. Attenzione: questo non si riferisce ai tempi tecnici di attivazione del servizio al cliente (che dipendono dai processi di portabilità e di rete), ma alla semplicità d\'uso della piattaforma.',
  },
  {
    id: 5, icon: '📅', badge: 'Portabilità smart', color: 'tiscali', highlight: true,
    titolo: 'Scegli il giorno del passaggio del numero',
    descrizione: 'Il cliente sceglie il giorno esatto della portabilità — quello in cui scade la sua offerta con il vecchio operatore. Vendi la SIM oggi con la data già impostata correttamente. Non devi far tornare il cliente. Zero spreco, zero stress.',
  },
  {
    id: 6, icon: '🔓', badge: 'Libertà', color: 'green',
    titolo: 'Nessun vincolo contrattuale',
    descrizione: 'Il mobile non ha vincoli di permanenza. Da comunicare con trasparenza: sono necessari 120 giorni prima di poter fare MNP out verso un altro operatore.',
  },
  {
    id: 7, icon: '📱', badge: 'Drive to store', color: 'orange', highlight: true,
    titolo: 'APN e configurazione — drive to store post-attivazione',
    descrizione: 'Gli APN si possono inserire SOLO a SIM già attiva, non al momento della vendita. Per questo motivo invita il cliente a tornare in negozio quando il numero è attivo, per configurare insieme APN, email e impostazioni. È un\'ottima occasione per costruire il rapporto e parlare di altri prodotti: luce e gas? Fisso? TV?',
  },
  {
    id: 8, icon: '🎫', badge: 'Assistenza', color: 'blue',
    titolo: 'Freshdesk — segnalazioni senza code',
    descrizione: 'Per ogni problematica cliente esiste una soluzione se ben instradata tramite Freshdesk. Il sistema evita le code al telefono e permette di gestire le problematiche con tranquillità, tracciando ogni ticket con storico documentato.',
  },
];

const COLOR_MAP = {
  blue:    { border: 'border-blue-100',    icon: 'bg-blue-100 text-blue-700',     badge: 'bg-blue-50 text-blue-600' },
  green:   { border: 'border-green-100',   icon: 'bg-green-100 text-green-700',   badge: 'bg-green-50 text-green-600' },
  purple:  { border: 'border-purple-100',  icon: 'bg-purple-100 text-purple-700', badge: 'bg-purple-50 text-purple-600' },
  yellow:  { border: 'border-yellow-100',  icon: 'bg-yellow-100 text-yellow-700', badge: 'bg-yellow-50 text-yellow-600' },
  orange:  { border: 'border-orange-100',  icon: 'bg-orange-100 text-orange-700', badge: 'bg-orange-50 text-orange-600' },
  tiscali: { border: 'border-tiscali-200', icon: 'bg-tiscali-600 text-white',      badge: 'bg-tiscali-50 text-tiscali-600' },
};

function VantaggioCard({ v, idx }) {
  const c = COLOR_MAP[v.color] || COLOR_MAP.blue;
  return (
    <div className={`relative rounded-xl border p-5 bg-white transition-all hover:shadow-md ${v.highlight ? c.border + ' shadow-sm' : 'border-gray-100'}`}>
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 pt-0.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${c.icon}`}>{v.icon}</div>
          <span className="text-xs font-bold text-gray-300">#{idx + 1}</span>
        </div>
        <div className="flex-1 min-w-0">
          {/* Badge in riga separata sopra il titolo — non sovrapposto */}
          <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mb-1.5 ${c.badge}`}>
            {v.badge}{v.highlight ? ' ⭐' : ''}
          </span>
          <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">{v.titolo}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{v.descrizione}</p>
        </div>
      </div>
    </div>
  );
}

export default function PercheTiscali() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mb-6">
        <h2 className="font-condensed text-3xl font-bold text-gray-900 mb-1">Perché vendere Tiscali</h2>
        <p className="text-sm text-gray-500">Argomenti chiave per l'Area Manager · Aprile 2026</p>
      </div>

      <div className="bg-tiscali-700 text-white rounded-2xl p-5 mb-6">
        <p className="text-sm leading-relaxed opacity-90">
          Tiscali Mobile è un MVNO che opera sulla rete TIM — la migliore rete mobile italiana.
          Offre prezzi competitivi, attivazione semplice e strumenti pensati per chi vende.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {VANTAGGI.map((v, i) => <VantaggioCard key={v.id} v={v} idx={i} />)}
      </div>

      {/* APN Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
        <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-sm">
          📱 Configurazione APN Tiscali Mobile
          <a href="https://assistenza.tiscali.it/mobile/guida/parametri/"
            target="_blank" rel="noreferrer"
            className="text-xs font-normal text-tiscali-600 underline hover:text-tiscali-800 ml-1">
            Guida ufficiale Tiscali →
          </a>
        </h3>

        {/* Parametri APN */}
        <div className="bg-white rounded-lg border border-amber-200 p-3 mb-4 font-mono text-xs">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-amber-900">
            <span className="text-amber-500 font-sans font-semibold">Nome</span>
            <span className="font-bold">TISCALI INTERNET</span>
            <span className="text-amber-500 font-sans font-semibold">APN</span>
            <span className="font-bold text-tiscali-700">tiscalimobileinternet</span>
            <span className="text-amber-500 font-sans font-semibold">Tipo APN</span>
            <span>default</span>
            <span className="text-amber-500 font-sans font-semibold">Username</span>
            <span className="text-gray-400">(vuoto)</span>
            <span className="text-amber-500 font-sans font-semibold">Password</span>
            <span className="text-gray-400">(vuoto)</span>
          </div>
          <div className="border-t border-amber-100 mt-2 pt-2">
            <p className="text-amber-600 font-sans text-[10px]">Per hotspot/tethering: APN <strong>tiscalimobiletethering</strong> · tipo DUN</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-amber-800">
          <div className="bg-white rounded-lg border border-amber-100 p-3">
            <p className="font-bold mb-1.5">📱 iPhone / iPad</p>
            <ol className="text-xs space-y-0.5 text-amber-700 list-decimal list-inside">
              <li>Impostazioni → Cellulare</li>
              <li>Rete dati cellulare</li>
              <li>APN: <strong className="text-tiscali-700">tiscalimobileinternet</strong></li>
              <li>Username e Password: vuoti</li>
            </ol>
          </div>
          <div className="bg-white rounded-lg border border-amber-100 p-3">
            <p className="font-bold mb-1.5">🤖 Android</p>
            <ol className="text-xs space-y-0.5 text-amber-700 list-decimal list-inside">
              <li>Impostazioni → Reti mobili</li>
              <li>Nomi punti di accesso → + Nuovo</li>
              <li>Nome: TISCALI INTERNET</li>
              <li>APN: <strong className="text-tiscali-700">tiscalimobileinternet</strong></li>
              <li>Salva e seleziona il profilo</li>
            </ol>
          </div>
        </div>
        <p className="text-xs text-amber-600 mt-3">
          💡 In alternativa chiama il <strong>130</strong> da SIM Tiscali per ricevere SMS di configurazione automatica.
        </p>
      </div>

      {/* Strumenti operativi */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
        <h3 className="font-bold text-blue-900 mb-3 text-sm">🛠️ Strumenti operativi</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="https://tiscali.freshdesk.com/support/login"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-3 bg-white border border-blue-200 rounded-lg px-4 py-3 hover:border-blue-400 hover:shadow-sm transition-all group">
            <span className="text-2xl">🎫</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-gray-900 group-hover:text-blue-700">Freshdesk</p>
              <p className="text-xs text-gray-500">Apri e gestisci ticket assistenza</p>
            </div>
            <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://exp-partners.tiscali.it/"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-3 bg-white border border-blue-200 rounded-lg px-4 py-3 hover:border-tiscali-400 hover:shadow-sm transition-all group">
            <span className="text-2xl">🏪</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-gray-900 group-hover:text-tiscali-700">Tiscali Station</p>
              <p className="text-xs text-gray-500">Portale partner e area rivenditori</p>
            </div>
            <svg className="w-4 h-4 text-gray-300 group-hover:text-tiscali-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="/Manuale_Freshdesk.pdf" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 bg-white border border-blue-200 rounded-lg px-4 py-3 hover:border-blue-400 hover:shadow-sm transition-all group sm:col-span-2">
            <span className="text-2xl">📄</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-gray-900 group-hover:text-blue-700">Manuale Freshdesk</p>
              <p className="text-xs text-gray-500">Leggi la guida completa — apertura ticket, tipologie, stati e assistenza telefonica</p>
            </div>
            <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <p className="text-xs text-blue-700 mt-3 leading-relaxed">
          Per ogni problematica cliente apri un ticket su Freshdesk descrivendo chiaramente il problema e il numero coinvolto.
          Una segnalazione ben instradata ottiene risposta rapida senza dover chiamare il centralino.
        </p>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Tiscali E2K Area Manager Tool · Aprile 2026
      </p>
    </div>
  );
}
