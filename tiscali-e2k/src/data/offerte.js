// ─── DATI TISCALI — Aprile 2026 ──────────────────────────────────────────────

export const DATI = {

  residenziale: {
    mobile: [
      // ── 5,99€ — DUE PRODOTTI DISTINTI ─────────────────────────────────────
      {
        id: 'res-mob-1a',
        nome: 'Mobile 150 GB 5G',
        sub: '5,99€ · Solo portabilità — tutti gli operatori inclusi TIM e Kena',
        prezzo: 5.99, label: '5,99€', suf: '/mese',
        highlight: false,
        target: { label: '📱 Tutte le portabilità', color: 'blue' },
        features: ['150 GB in 5G', 'Minuti illimitati · 100 SMS', '✅ Portabilità da TUTTI gli operatori (inclusi TIM e Kena)'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '10€' },
        dettagli: {
          '📋 Riservata a': 'Portabilità da TUTTI gli operatori — inclusi TIM e Kena.',
          '🆕 Nuovo numero': 'NON attivabile. Per nuove numerazioni usare Mobile 200 GB 4G.',
          'Roaming EU/UK': '8,93 GB disponibili in roaming EU e UK.',
          'Rete': '5G.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      {
        id: 'res-mob-1b',
        nome: 'Mobile 200 GB 4G',
        sub: '5,99€ · Solo nuove attivazioni — nessuna portabilità',
        prezzo: 5.99, label: '5,99€', suf: '/mese',
        highlight: false,
        target: { label: '🆕 Solo nuovo numero', color: 'green' },
        features: ['200 GB in 4G', 'Minuti illimitati · 100 SMS', '🆕 Solo nuove numerazioni'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '10€' },
        dettagli: {
          '📋 Riservata a': 'Solo nuove attivazioni (nuovo numero). NON attivabile come portabilità.',
          '⚠️ Attenzione': 'Dati in 4G (non 5G), a differenza di tutte le altre offerte a 5,99€.',
          'Roaming EU/UK': '8,93 GB disponibili in roaming EU e UK.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      // ── 7,99€ — TRE PRODOTTI DISTINTI ─────────────────────────────────────
      {
        id: 'res-mob-2a',
        nome: 'Mobile 250 GB 5G — TIM e Kena',
        sub: '7,99€ · Solo portabilità da TIM o Kena · Modulo SOLO TIM KENA',
        prezzo: 7.99, label: '7,99€', suf: '/mese',
        highlight: true,
        target: { label: '🔴 Solo TIM  🔵 Solo Kena', color: 'timkena' },
        features: ['250 GB in 5G', 'Minuti illimitati · 100 SMS', '⚠️ Solo portabilità da TIM o Kena'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '10€' },
        dettagli: {
          '📋 Riservata a': 'Portabilità da TIM o Kena Mobile esclusivamente. Modulo: "SOLO TIM KENA".',
          'Roaming EU/UK': '11,91 GB disponibili in roaming EU e UK.',
          'Rete': '5G fino a 250 Mbps in base alla copertura.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      {
        id: 'res-mob-2b',
        nome: 'Mobile 250 GB 5G — Altri operatori',
        sub: '7,99€ · Portabilità da tutti esclusi TIM e Kena · Modulo NO TIM KENA',
        prezzo: 7.99, label: '7,99€', suf: '/mese',
        highlight: true,
        target: { label: '📱 Portabilità esclusi TIM e Kena', color: 'orange' },
        features: ['250 GB in 5G', 'Minuti illimitati · 100 SMS', '📱 Portabilità esclusi TIM e Kena'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '10€' },
        dettagli: {
          '📋 Riservata a': 'Portabilità da tutti gli operatori ESCLUSI TIM e Kena. Modulo: "NO TIM KENA".',
          'Roaming EU/UK': '11,91 GB disponibili in roaming EU e UK.',
          'Rete': '5G fino a 250 Mbps in base alla copertura.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      {
        id: 'res-mob-2c',
        nome: 'Mobile 250 GB 5G — Nuovo numero',
        sub: '7,99€ · Solo nuove attivazioni · Modulo NO TIM KENA',
        prezzo: 7.99, label: '7,99€', suf: '/mese',
        highlight: false,
        target: { label: '🆕 Solo nuovo numero', color: 'green' },
        features: ['250 GB in 5G', 'Minuti illimitati · 100 SMS', '🆕 Solo nuove numerazioni'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '10€' },
        dettagli: {
          '📋 Riservata a': 'Solo nuove attivazioni (nuovo numero). Modulo: "NO TIM KENA".',
          'Roaming EU/UK': '11,91 GB disponibili in roaming EU e UK.',
          'Rete': '5G fino a 250 Mbps in base alla copertura.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      // ── 10,99€ — TRE PRODOTTI DISTINTI ────────────────────────────────────
      {
        id: 'res-mob-3a',
        nome: 'Mobile 350 GB 5G — TIM e Kena',
        sub: '10,99€ · Solo portabilità da TIM o Kena',
        prezzo: 10.99, label: '10,99€', suf: '/mese',
        highlight: true,
        target: { label: '🔴 Solo TIM  🔵 Solo Kena', color: 'timkena' },
        features: ['350 GB in 5G', 'Minuti illimitati · 100 SMS', '⚠️ Solo portabilità da TIM o Kena'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '15€' },
        dettagli: {
          '📋 Riservata a': 'Portabilità da TIM o Kena Mobile esclusivamente.',
          'Roaming EU/UK': '16,38 GB disponibili in roaming EU e UK.',
          'Rete': '5G fino a 1 Gbps o 2 Gbps in base alle aree di copertura.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      {
        id: 'res-mob-3b',
        nome: 'Mobile 350 GB 5G — Altri operatori',
        sub: '10,99€ · Portabilità da tutti esclusi TIM e Kena',
        prezzo: 10.99, label: '10,99€', suf: '/mese',
        highlight: true,
        target: { label: '📱 Portabilità esclusi TIM e Kena', color: 'orange' },
        features: ['350 GB in 5G', 'Minuti illimitati · 100 SMS', '📱 Portabilità esclusi TIM e Kena'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '15€' },
        dettagli: {
          '📋 Riservata a': 'Portabilità da tutti gli operatori ESCLUSI TIM e Kena.',
          'Roaming EU/UK': '16,38 GB disponibili in roaming EU e UK.',
          'Rete': '5G fino a 1 Gbps o 2 Gbps in base alle aree di copertura.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      {
        id: 'res-mob-3c',
        nome: 'Mobile 350 GB 5G — Nuovo numero',
        sub: '10,99€ · Solo nuove attivazioni',
        prezzo: 10.99, label: '10,99€', suf: '/mese',
        highlight: false,
        target: { label: '🆕 Solo nuovo numero', color: 'green' },
        features: ['350 GB in 5G', 'Minuti illimitati · 100 SMS', '🆕 Solo nuove numerazioni'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica': '15€' },
        dettagli: {
          '📋 Riservata a': 'Solo nuove attivazioni (nuovo numero).',
          'Roaming EU/UK': '16,38 GB disponibili in roaming EU e UK.',
          'Rete': '5G fino a 1 Gbps o 2 Gbps in base alle aree di copertura.',
          'Traffico extra soglia': 'Bloccato automaticamente. Sblocco tramite Area Clienti: 30 cent/MB.',
          'Pagamento': 'Ricarica automatica su RID/Carta. Mancato pagamento: ricarica manuale allo stesso prezzo.',
          'Servizi inclusi': 'Parental Control Safe Kids Free by Kaspersky incluso.',
        },
      },
      // ── SMART CONNECT ──────────────────────────────────────────────────────
      {
        id: 'res-mob-4',
        nome: 'Smart Connect Domotica',
        sub: '1,99€ · Allarmi, caldaie, cancelli e dispositivi IoT',
        prezzo: 1.99, label: '1,99€', suf: '/mese',
        highlight: false,
        target: { label: '🏠 Solo domotica / IoT', color: 'gray' },
        features: ['100 MB in 4G', '50 minuti nazionali', '50 SMS nazionali'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica minima': '30€' },
        dettagli: {
          '📋 Riservata a': 'Servizi di domotica. SIM progettata per dispositivi IoT: sensori, allarmi, caldaie, cancelli automatici.',
          '⚠️ Pagamento MANUALE': 'Ricarica manuale — non automatica. Diverso da tutte le altre SIM Tiscali.',
          'Voce': '50 minuti solo nazionali (non illimitati).',
          'SMS': '50 SMS solo nazionali.',
          'Traffico extra soglia': '30 cent/MB.',
        },
      },
    ],
    fisso: [
      {
        id: 'res-fis-1',
        nome: 'Casa Fibra Power',
        sub: 'FTTH fino a 2.5 Gbps · Solo fisso',
        prezzo: 19.90, label: '19,90€', suf: '/mese*',
        highlight: false,
        features: ['FTTH fino a 2.5 Gbps', '⚠️ Chiamate a consumo (non illimitate)', 'Modem Voce Super Wi-Fi in comodato gratuito'],
        costi: { '📍 Installazione tecnico (Una Tantum)': '29,90€', '🔄 Attivazione commerciale': 'Inclusa nel canone' },
        dettagli: {
          '📍 Cos\'è l\'installazione (29,90€)': 'Costo Una Tantum addebitato nella prima fattura. Il tecnico Tiscali viene fisicamente a posare il cavo fibra. Standard: entro 5m dall\'ingresso. Oltre 5m fino a 20m: +60€. Oltre 20m: +6€/metro.',
          '🔄 Cos\'è l\'attivazione': 'Per questa offerta l\'attivazione commerciale è inclusa nel canone mensile — nessun costo aggiuntivo.',
          'Fatturazione': 'Bimestrale anticipata.',
          '⚠️ Chiamate': 'A consumo — NON incluse illimitate. Home Safe include chiamate illimitate.',
          'Promozione': 'Prezzo promo per i primi 12 mesi. Dal 13° mese: 25,90€/mese.',
        },
        postille: ["* Prezzo promo 19,90€/mese per i primi 12 mesi. Dal 13° mese: 25,90€/mese.", "Installazione: 29,90€ Una Tantum in prima fattura (posa fibra da tecnico).", "Attivazione commerciale: inclusa nel canone. Nessun costo aggiuntivo.", "In caso di cessazione entro 24 mesi: 1 mensilità + rate residue di attivazione.", "⚠️ Chiamate a consumo — non incluse. Passare a Home Safe per chiamate illimitate."],
      },
      {
        id: 'res-fis-2',
        nome: 'Casa Fibra Power Home Safe',
        sub: 'FTTH 2.5 Gbps + Assicurazione AXA inclusa',
        prezzo: 22.90, label: '22,90€', suf: '/mese*',
        highlight: true,
        features: ['FTTH fino a 2.5 Gbps', 'Chiamate illimitate verso fissi e mobili nazionali', '60 min/mese internazionali inclusi', 'Assicurazione casa e digitale AXA inclusa', 'Modem Voce Super Wi-Fi in comodato gratuito'],
        costi: { '📍 Installazione tecnico (Una Tantum)': '29,90€', '🔄 Attivazione commerciale': 'Inclusa nel canone' },
        dettagli: {
          '📍 Cos\'è l\'installazione (29,90€)': 'Costo Una Tantum addebitato nella prima fattura. Il tecnico Tiscali viene fisicamente a posare il cavo fibra. Standard: entro 5m dall\'ingresso. Oltre 5m fino a 20m: +60€. Oltre 20m: +6€/metro.',
          '🔄 Cos\'è l\'attivazione': 'Per questa offerta l\'attivazione commerciale è inclusa nel canone mensile — nessun costo aggiuntivo.',
          'AXA Casa': 'Intervento professionista (Elettricista, Fabbro, ecc.). Fino a 200€/sinistro, max 3 sinistri/anno. Copertura albergo per inagibilità fino a 1.500€.',
          'AXA Digitale': 'Fino a 2 interventi/anno per Apparati Mobile e 3 interventi/anno per Apparati Home.',
          'Chiamate internazionali': '60 min/mese gratuiti verso rete fissa EU, Svizzera, UK, USA e Canada.',
          'Promozione': 'Prezzo promo per i primi 12 mesi. Dal 13° mese: 27,90€/mese.',
        },
        postille: ["* Prezzo promo 22,90€/mese per i primi 12 mesi. Dal 13° mese: 27,90€/mese.", "Installazione: 29,90€ Una Tantum in prima fattura.", "Attivazione commerciale: inclusa nel canone.", "In caso di cessazione entro 24 mesi: 1 mensilità + rate residue."],
      },
            // ── LINKEM FWA 5G INDOOR (Consigliato) ──────────────────────────────────
      {
        id: 'res-fwa-5g-indoor-std',
        nome: 'Linkem FWA 5G Indoor',
        sub: 'Apparato Indoor 5G 3,5 GHz · Da installare internamente',
        prezzo: 14.90, label: '14,90€', suf: '/mese',
        prezzoStep: '→ 20,90€ dopo 12 mesi → 25,90€ dopo 36 mesi',
        highlight: false,
        indoor: true,
        features: ['300 Mbps down · 30 Mbps up in 5G', 'Apparato Indoor 5G 3,5 GHz', 'Senza cavo · Senza linea telefonica'],
        costi: { '📍 Installazione (Una Tantum)': '29,90€', '🔄 Contributo attivazione': '5€/mese per 24 mesi (nel canone)' },
        dettagli: {
          'Apparato': 'Indoor 5G 3,5 GHz — si installa internamente. Ideale dove il segnale 5G è buono anche al chiuso.',
          'Tecnologia': "FWA 5G su rete Linkem/Tiscali — frequenza 3,4-3,6 GHz. Fibra fino alla torre, wireless fino all'apparato.",
          'Velocità': 'Fino a 300 Mbps in download e 30 Mbps in upload — in base alla copertura disponibile.',
          'Fatturazione': 'Bimestrale anticipata. Addebito su conto corrente o carta di credito non prepagata.',
        },
        postille: [
          '📅 14,90€/mese per i primi 12 mesi.',
          '📅 20,90€/mese dal 13° al 36° mese.',
          '📅 25,90€/mese dal 37° mese in poi.',
          'Contributo attivazione: 5€/mese per 24 mesi — già incluso nel canone, non aggiuntivo.',
          'Installazione: 29,90€ Una Tantum in prima fattura.',
          'Recesso anticipato: si pagano le rate residue del contributo attivazione.',
        ],
      },
      {
        id: 'res-fwa-5g-indoor-safe',
        nome: 'Linkem FWA 5G Indoor Home Safe',
        sub: 'Apparato Indoor 5G 3,5 GHz + Assicurazione AXA inclusa',
        prezzo: 17.90, label: '17,90€', suf: '/mese',
        prezzoStep: '→ 22,90€ dopo 12 mesi → 27,90€ dopo 36 mesi',
        highlight: false,
        indoor: true,
        features: ['300 Mbps down · 30 Mbps up in 5G', 'Apparato Indoor 5G 3,5 GHz', 'Assicurazione AXA Casa e Digitale inclusa'],
        costi: { '📍 Installazione (Una Tantum)': '29,90€', '🔄 Contributo attivazione': '5€/mese per 24 mesi (nel canone)' },
        dettagli: {
          'Apparato': 'Indoor 5G 3,5 GHz — si installa internamente.',
          'AXA inclusa': 'Assistenza casa (fino a 200€/sinistro, max 3/anno) e digitale (fino a 2+3 interventi/anno su Mobile e Home).',
          'Velocità': 'Fino a 300 Mbps in download e 30 Mbps in upload — in base alla copertura disponibile.',
          'Fatturazione': 'Bimestrale anticipata.',
        },
        postille: [
          '📅 17,90€/mese per i primi 12 mesi.',
          '📅 22,90€/mese dal 13° al 36° mese.',
          '📅 27,90€/mese dal 37° mese in poi.',
          'Contributo attivazione: 5€/mese per 24 mesi — già incluso nel canone, non aggiuntivo.',
          'Installazione: 29,90€ Una Tantum in prima fattura.',
          'Recesso anticipato: si pagano le rate residue del contributo attivazione.',
        ],
      },
      // ── LINKEM FWA 5G OUTDOOR (In sicurezza) ──────────────────────────────
      {
        id: 'res-fwa-5g-out-std',
        nome: 'Linkem FWA 5G Outdoor',
        sub: 'Apparato Outdoor 5G 3,5 GHz · Da montare esternamente',
        prezzo: 14.90, label: '14,90€', suf: '/mese',
        prezzoStep: '→ 20,90€ dopo 12 mesi → 25,90€ dopo 36 mesi',
        highlight: false,
        indoor: false,
        features: ['300 Mbps down · 30 Mbps up in 5G', 'Apparato Outdoor 5G 3,5 GHz', 'Più stabile dove il segnale indoor è debole'],
        costi: { '📍 Installazione (Una Tantum)': '29,90€', '🔄 Contributo attivazione': '5€/mese per 24 mesi (nel canone)' },
        dettagli: {
          'Apparato': "Outdoor 5G 3,5 GHz — si monta esternamente (tetto, facciata, davanzale). Cattura meglio il segnale rispetto all'indoor.",
          'Quando sceglierlo': "Quando la copertura 5G indoor è insufficiente. Migliore stabilità e velocità rispetto all'apparato interno.",
          'Tecnologia': 'FWA 5G su rete Linkem/Tiscali — frequenza 3,4-3,6 GHz.',
          'Velocità': 'Fino a 300 Mbps in download e 30 Mbps in upload — in base alla copertura disponibile.',
        },
        postille: [
          '📅 14,90€/mese per i primi 12 mesi.',
          '📅 20,90€/mese dal 13° al 36° mese.',
          '📅 25,90€/mese dal 37° mese in poi.',
          'Contributo attivazione: 5€/mese per 24 mesi — già incluso nel canone, non aggiuntivo.',
          'Installazione: 29,90€ Una Tantum in prima fattura.',
        ],
      },
      {
        id: 'res-fwa-5g-out-safe',
        nome: 'Linkem FWA 5G Outdoor Home Safe',
        sub: 'Apparato Outdoor 5G 3,5 GHz + Assicurazione AXA inclusa',
        prezzo: 17.90, label: '17,90€', suf: '/mese',
        prezzoStep: '→ 22,90€ dopo 12 mesi → 27,90€ dopo 36 mesi',
        highlight: false,
        indoor: false,
        features: ['300 Mbps down · 30 Mbps up in 5G', 'Apparato Outdoor 5G 3,5 GHz', 'Assicurazione AXA Casa e Digitale inclusa'],
        costi: { '📍 Installazione (Una Tantum)': '29,90€', '🔄 Contributo attivazione': '5€/mese per 24 mesi (nel canone)' },
        dettagli: {
          'Apparato': 'Outdoor 5G 3,5 GHz — montato esternamente per massima ricezione.',
          'AXA inclusa': 'Assistenza casa (fino a 200€/sinistro, max 3/anno) e digitale (fino a 2+3 interventi/anno).',
          'Velocità': 'Fino a 300 Mbps in download e 30 Mbps in upload — in base alla copertura disponibile.',
        },
        postille: [
          '📅 17,90€/mese per i primi 12 mesi.',
          '📅 22,90€/mese dal 13° al 36° mese.',
          '📅 27,90€/mese dal 37° mese in poi.',
          'Contributo attivazione: 5€/mese per 24 mesi — già incluso nel canone, non aggiuntivo.',
          'Installazione: 29,90€ Una Tantum in prima fattura.',
        ],
      },
      // ── LINKEM FWA 4G ──────────────────────────────────────────────────────
      {
        id: 'res-fwa-4g',
        nome: 'Linkem FWA 4G',
        sub: 'Apparato Esterno 4G · Per zone senza copertura 5G',
        prezzo: 14.90, label: '14,90€', suf: '/mese',
        prezzoStep: '→ 20,90€ dopo 12 mesi → 25,90€ dopo 36 mesi',
        highlight: false,
        indoor: false,
        features: ['Fino a 30 Mbps · Apparato Esterno 4G', 'Per zone senza copertura 5G disponibile', 'Installazione rapida senza posa cavi'],
        costi: { '📍 Installazione (Una Tantum)': '29,90€', '🔄 Contributo attivazione': '5€/mese per 24 mesi (nel canone)' },
        dettagli: {
          'Apparato': 'Esterno 4G — può usare rete proprietaria Linkem (3,4-3,6 GHz) o rete TIM in base alla copertura.',
          'Velocità': 'Fino a 30 Mbps in download e 3 Mbps in upload — in base alla copertura 4G disponibile. Da proporre solo dove manca copertura 5G.',
          'Quando usarla': 'Solo se la verifica di copertura esclude il 5G. Prima scegliere sempre FWA 5G.',
        },
        postille: [
          '📅 14,90€/mese per i primi 12 mesi.',
          '📅 20,90€/mese dal 13° al 36° mese.',
          '📅 25,90€/mese dal 37° mese in poi.',
          'Contributo attivazione: 5€/mese per 24 mesi — già incluso nel canone, non aggiuntivo.',
          'Installazione: 29,90€ Una Tantum in prima fattura.',
          'Verificare la copertura prima di attivare — preferire sempre 5G quando disponibile.',
        ],
      },
    ],
    convergente: [
      {
        id: 'res-conv-1',
        nome: 'Casa Fibra Power Home Safe + Mobile 200 GB',
        sub: 'Fisso + Mobile · Prezzo fisso garantito',
        prezzo: 23.90, label: '23,90€', suf: '/mese fisso',
        highlight: false,
        features: ['FTTH 2.5 Gbps · Prezzo fisso garantito', 'Chiamate illimitate · 60 min/mese int.', 'Assicurazione AXA inclusa', 'SIM 200 GB: +6€/mese'],
        costoTotale: { label: '29,90€/mese', nota: 'Fisso 23,90€ + SIM 6,00€' },
        costi: { '📍 Installazione tecnico fisso (Una Tantum)': '29,90€', '🔄 Attivazione commerciale fisso': 'Inclusa nel canone', 'SIM': '10€', 'Attivazione SIM': 'Gratis', 'Ricarica SIM': '10€', 'SIM mensile': '+6€/mese' },
        dettagli: {
          '📍 Installazione vs Attivazione': 'INSTALLAZIONE (29,90€ Una Tantum): il tecnico viene fisicamente a posare il cavo fibra — paghi una sola volta nella prima fattura. ATTIVAZIONE COMMERCIALE: per questa offerta è inclusa nel canone, nessun costo aggiuntivo.',
          'Roaming mobile': '8,94 GB disponibili in zona EU per l\'offerta Mobile 200 GB Pro.',
          'AXA inclusa': 'Tutela Casa (danni/imprevisti) e Assistenza Digitale (riparazioni apparati).',
          'Vincoli': 'Se si disattiva la SIM, il Fisso passa a 27,90€/mese. Recesso fisso entro 24 mesi: penale pari a 1 mensilità.',
        },
        postille: ["* Totale 29,90€/mese (fisso 23,90€ + SIM 6€). Prezzo fisso garantito.", "Installazione fisso: 29,90€ Una Tantum. SIM: 10€ + prima ricarica 10€.", "Se si disattiva la SIM: il canone fisso sale a 27,90€/mese (si perde lo sconto).", "In caso di cessazione entro 24 mesi: 1 mensilità + rate residue.", "SIM valida per nuove numerazioni e portabilità da tutti gli operatori."],
      },
      {
        id: 'res-conv-2',
        nome: 'Casa Fibra Power Home Safe + Mobile 350 GB 5G',
        sub: 'Fisso + Mobile 5G · Prezzo fisso garantito',
        prezzo: 23.90, label: '23,90€', suf: '/mese fisso',
        highlight: false,
        features: ['FTTH 2.5 Gbps · Prezzo fisso garantito', 'Chiamate illimitate · 60 min/mese int.', 'Assicurazione AXA inclusa', 'SIM 350 GB 5G: +9,90€/mese'],
        costoTotale: { label: '33,80€/mese', nota: 'Fisso 23,90€ + SIM 9,90€' },
        costi: { '📍 Installazione tecnico fisso (Una Tantum)': '29,90€', '🔄 Attivazione commerciale fisso': 'Inclusa nel canone', 'SIM': '10€', 'Attivazione SIM': 'Gratis', 'Ricarica SIM': '15€', 'SIM mensile': '+9,90€/mese' },
        dettagli: {
          '📍 Installazione vs Attivazione': 'INSTALLAZIONE (29,90€ Una Tantum): il tecnico viene fisicamente a posare il cavo fibra — paghi una sola volta nella prima fattura. ATTIVAZIONE COMMERCIALE: per questa offerta è inclusa nel canone, nessun costo aggiuntivo.',
          'Roaming mobile': '14,75 GB disponibili in zona EU per l\'offerta Mobile 350 GB Pro 5G.',
          'AXA inclusa': 'Tutela Casa (max 200€/sinistro) e Assistenza Digitale PC/Smartphone.',
          'Vincoli': 'Se si disattiva la SIM, il Fisso passa a 27,90€/mese. Se il mobile perde l\'addebito automatico: 11,90€/mese. Recesso fisso entro 24 mesi: penale pari a 1 mensilità.',
        },
        postille: ["* Totale 33,80€/mese (fisso 23,90€ + SIM 9,90€). Prezzo fisso garantito.", "Installazione fisso: 29,90€ Una Tantum. SIM: 10€ + prima ricarica 10€.", "Se si disattiva la SIM: il canone fisso sale a 27,90€/mese (si perde lo sconto).", "In caso di cessazione entro 24 mesi: 1 mensilità + rate residue.", "SIM valida per nuove numerazioni e portabilità da tutti gli operatori."],
      },
    ],
  },

  business: {
    mobile: [
      {
        id: 'biz-mob-1',
        nome: 'Smart 100 Affari 4G',
        sub: '9,99€+IVA · 100 GB 4G · Addebito su RID/CC',
        prezzo: 9.99, label: '9,99€', suf: '+IVA/mese',
        iva: true, highlight: false,
        features: ['100 GB in 4G', 'Minuti illimitati · 100 SMS', 'Addebito automatico su RID o Carta di Credito'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€' },
        dettagli: {
          'Pagamento': 'Addebito mensile automatico su RID o Carta di Credito.',
          'IVA': 'Prezzo IVA esclusa (22%).',
          'Traffico extra soglia': '30 cent/MB.',
        },
      },
      {
        id: 'biz-mob-2',
        nome: 'Smart 250 Affari 5G',
        sub: '13,99€+IVA · 250 GB 5G · Addebito su RID/CC',
        prezzo: 13.99, label: '13,99€', suf: '+IVA/mese',
        iva: true, highlight: true,
        features: ['250 GB in 5G', 'Minuti illimitati · 300 SMS', 'Addebito automatico su RID o Carta di Credito'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€' },
        dettagli: {
          'Pagamento': 'Addebito mensile automatico su RID o Carta di Credito.',
          'Rete': '5G in base alla copertura disponibile.',
          'IVA': 'Prezzo IVA esclusa (22%).',
          'Traffico extra soglia': '30 cent/MB.',
        },
      },
      {
        id: 'biz-mob-3',
        nome: 'Smart Unlimited Affari 5G',
        sub: '23,99€+IVA · Giga illimitati 5G · Addebito su RID/CC',
        prezzo: 23.99, label: '23,99€', suf: '+IVA/mese',
        iva: true, highlight: false,
        features: ['Giga illimitati in 5G', 'Minuti illimitati · 500 SMS', 'Addebito automatico su RID o Carta di Credito'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€' },
        dettagli: {
          'Pagamento': 'Addebito mensile automatico su RID o Carta di Credito.',
          'Rete': '5G illimitato in base alla copertura disponibile.',
          'IVA': 'Prezzo IVA esclusa (22%).',
        },
      },
      {
        id: 'biz-mob-4',
        nome: 'Smart Connect Affari IoT',
        sub: '1,99€+IVA · 1000 MB (1 GB) 4G · Domotica e dispositivi connessi',
        prezzo: 1.99, label: '1,99€', suf: '+IVA/mese',
        iva: true, highlight: false,
        features: ['1000 MB (1 GB) in 4G', '45 minuti nazionali', '50 SMS'],
        costi: { 'Attivazione': 'Gratis', 'SIM': '10€', 'Ricarica minima': '30€' },
        dettagli: {
          '📋 Riservata a': 'Servizi di domotica aziendale — dispositivi IoT, macchinari, telemetria, allarmi.',
          '⚠️ Voce': '50 minuti solo nazionali (non illimitati).',
          '⚠️ SMS': '50 SMS solo nazionali.',
          'IVA': 'Prezzo IVA esclusa (22%).',
          'Traffico extra soglia': '30 cent/MB.',
        },
      },
    ],
    fisso: [
      {
        id: 'biz-fis-1',
        nome: 'Business Fibra Power',
        sub: 'FTTH 2.5 Gbps · Solo fisso',
        prezzo: 24.90, label: '24,90€', suf: '+IVA/mese*',
        iva: true, highlight: false,
        features: ['FTTH fino a 2.5 Gbps', 'Chiamate illimitate nazionali', '60 min/mese internazionali'],
        costi: { '🔄 Attivazione commerciale (rateizzata)': '120€ totali → 5€/mese per 24 mesi', '📍 Installazione tecnico': 'Inclusa nel contributo attivazione' },
        dettagli: {
          '🔄 Cos\'è l\'attivazione rateizzata (120€ in 24 mesi)': 'Commissione commerciale di 120€ totali, addebitata a rate di 5€/mese per 24 mesi direttamente in fattura. NON è un anticipo, ma un contributo che viene spalmato nel tempo. Se si recede prima dei 24 mesi, la quota residua viene addebitata in un\'unica soluzione.',
          '📍 Cos\'è l\'installazione': 'Per questa offerta il costo del tecnico (normalmente 29,90€) è incluso nel contributo di attivazione. Nessun costo separato per la posa della fibra.',
          'Promozione': 'Primo anno 24,90€. Dal 13° mese: 28,90€+IVA/mese.',
          'IVA': 'Prezzo IVA esclusa (22%).',
        },
        postille: ["* Prezzo promo 24,90€+IVA/mese per i primi 12 mesi. Dal 13° mese: 28,90€+IVA/mese.", "Installazione: 29,90€ Una Tantum in prima fattura.", "Attivazione: 120€ totali in 24 rate da 5€/mese — già incluse nel canone, non aggiuntive.", "In caso di cessazione entro 24 mesi: rate residue in unica soluzione + 1 mensilità.", "Tutti i prezzi IVA esclusa (22%)."],
      },
      {
        id: 'biz-fis-2',
        nome: 'Business Fibra Power + Mobile',
        sub: 'FTTH 2.5 Gbps · Convergente',
        prezzo: 24.90, label: '24,90€', suf: '+IVA/mese fisso',
        iva: true, highlight: true,
        features: ['FTTH 2.5 Gbps · Chiamate illimitate', 'SIM 500 GB 5G: +11€+IVA/mese', 'Senza SIM: 28,90€+IVA/mese'],
        costoTotale: { label: '35,90€+IVA/mese', nota: 'Fisso 24,90€ + SIM 11,00€ (entrambi +IVA)' },
        costi: { '📍 Installazione tecnico fisso (Una Tantum)': '29,90€+IVA', '🔄 Attivazione commerciale': 'Inclusa nel canone', 'SIM': '10€', 'Attivazione SIM': 'Gratis', 'Ricarica SIM': '20€', 'SIM mensile': '+11€+IVA/mese' },
        dettagli: { 'IVA': 'Prezzo IVA esclusa (22%).', '📍 Installazione (29,90€+IVA)': 'Costo Una Tantum per intervento tecnico di posa fibra. Addebitato nella prima fattura. Entro 5m dall\'ingresso: 29,90€+IVA. Oltre 5m: costi aggiuntivi.', 'SIM inclusa': 'SIM da 500 GB 5G con minuti illimitati a +11€+IVA/mese aggiuntivi.', 'Senza SIM': 'Solo fisso: 28,90€+IVA/mese.' },
        postille: ["* Totale 35,90€+IVA/mese (fisso 24,90€ + SIM 11€). Offerta valida su tecnologia Fibra.", "Installazione fisso: 29,90€+IVA Una Tantum. SIM: 10€ + prima ricarica 20€.", "Se si disattiva la SIM: il canone fisso sale a 28,90€+IVA/mese.", "Tutti i prezzi IVA esclusa (22%)."],
      },
      {
        id: 'biz-fis-3',
        nome: 'UltraInternet Affari 2 Linee',
        sub: 'FTTC 200 Mbps · 2 linee telefoniche',
        prezzo: 35.90, label: '35,90€', suf: '+IVA/mese',
        iva: true, highlight: false,
        features: ['FTTC fino a 200 Mbps', 'Chiamate illimitate · 2 linee', '200 min estero'],
        costi: { '📍 Installazione tecnico (Una Tantum)': '29,90€', '🔄 Attivazione commerciale': 'Inclusa nel canone' },
        dettagli: { 'IVA': 'Prezzo IVA esclusa (22%).', '📍 Installazione (29,90€)': 'Costo Una Tantum per intervento tecnico di posa fibra FTTC. Addebitato nella prima fattura.', '2 linee': 'Include 2 linee telefoniche con numerazione dedicata.' },
      },
      {
        id: 'biz-fis-4',
        nome: 'UltraInternet Affari 2 Linee + Centralino',
        sub: 'FTTC 200 Mbps · 2 linee + centralino VoIP',
        prezzo: 44.90, label: '44,90€', suf: '+IVA/mese',
        iva: true, highlight: false,
        features: ['FTTC fino a 200 Mbps', 'Chiamate illimitate · 2 linee', 'Centralino VoIP incluso'],
        costi: { '📍 Installazione tecnico (Una Tantum)': '29,90€', '🔄 Attivazione commerciale': 'Inclusa nel canone' },
        dettagli: { 'IVA': 'Prezzo IVA esclusa (22%).', '📍 Installazione (29,90€)': 'Costo Una Tantum per intervento tecnico di posa fibra FTTC. Addebitato nella prima fattura.', 'Centralino VoIP': 'Gestione chiamate con IVR, code e interni. Configurazione inclusa.' },
      },

      {
        id: 'biz-fwa-5g',
        nome: 'Linkem FWA 5G Business',
        sub: 'Fino a 300 Mbps wireless · Dove la fibra FTTH non arriva · IVA esclusa',
        prezzo: null, label: 'Verifica preventivo', suf: '+IVA',
        iva: true, highlight: false,
        features: ['Fino a 300 Mbps in download', 'Connessione wireless 5G — senza posa cavi', 'Ideale per uffici/attività in zone senza FTTH'],
        costi: { '📍 Installazione (Una Tantum)': '29,90€+IVA', '🔄 Contributo attivazione': "Da verificare in base all'offerta" },
        dettagli: {
          'Tecnologia': 'FWA 5G su rete proprietaria Linkem/Tiscali — frequenza 3,4-3,6 GHz. Tecnologia FTTT (fibra fino alla torre + wireless fino all\'apparato). No linea telefonica necessaria.',
          'Velocità': 'Fino a 300 Mbps in download. Variabile in base alla copertura 5G.',
          'Quando usarla': 'Per zone non coperte da FTTH. Installazione rapida (senza posa cavi). Modem in comodato gratuito. Fatturazione bimestrale anticipata.',
          'Verifica preventiva': 'Indispensabile verificare la copertura 5G prima di proporre al cliente.',
          'IVA': 'Tutti i prezzi IVA esclusa (22%).',
        },
      },    ],
  },

  premium: [
    {
      id: 'biz-pre-1',
      nome: 'Premium Fibra 1 Linea',
      sub: 'FTTH 1 Gbps · 1 linea · Backup LTE · IP Statico · Assistenza Prioritaria',
      prezzo: 29.90, label: '29,90€', suf: '+IVA/mese*',
      iva: true, highlight: false,
      features: ['FTTH fino a 1 Gbps · 1 linea', 'Chiamate illimitate · 500 min estero', 'Backup LTE automatico · IP Statico (3€/mese) · Assistenza Prioritaria'],
      costi: { '📍 Installazione tecnico (Una Tantum)': '49,90€', '🔄 Attivazione': '240€ in 24 rate mensili (10€/mese)' },
      dettagli: { '📍 Installazione (49,90€)': 'Costo Una Tantum — più alto rispetto alle offerte standard per via delle funzionalità Premium. Addebitato nella prima fattura.', '🔄 Attivazione (240€ in 24 rate)': '10€/mese per 24 mesi — in caso di recesso anticipato le rate residue vengono addebitate in unica soluzione.', 'Promozione': '29,90€+IVA/mese per 24 mesi, poi 39,90€+IVA/mese.', 'Backup LTE': 'Attivazione automatica in caso di interruzione della linea principale — nessun intervento manuale.', 'Modem': 'Fritz!Box 6890 LTE — gestione avanzata rete, VPN, NAS, hotspot con QR code, controllo accessi per utente/dispositivo.', 'IVA': 'Prezzo IVA esclusa (22%).' },
        postille: ["* Prezzo promo 29,90€+IVA/mese per 24 mesi. Dal 25° mese: 39,90€+IVA/mese.", "Installazione: 49,90€ Una Tantum in prima fattura (più alta rispetto alle offerte standard).", "Attivazione: 240€ in 24 rate mensili (10€/mese inclusi nel canone).", "In caso di cessazione entro 24 mesi: rate residue in unica soluzione + 1 mensilità.", "Tutti i prezzi IVA esclusa (22%)."],
    },
    {
      id: 'biz-pre-2',
      nome: 'Premium Fibra 2 Linee',
      sub: 'FTTH 1 Gbps · 2 linee · Backup LTE · IP Statico · Assistenza Prioritaria',
      prezzo: 35.90, label: '35,90€', suf: '+IVA/mese*',
      iva: true, highlight: false,
      features: ['FTTH fino a 1 Gbps · 2 linee telefoniche', 'Chiamate illimitate · 200 min estero', 'Backup LTE automatico · IP Statico · Assistenza Prioritaria'],
      costi: { '📍 Installazione tecnico (Una Tantum)': '49,90€', '🔄 Attivazione': '240€ in 24 rate mensili (10€/mese)' },
      dettagli: { 'Promozione': '35,90€+IVA/mese per 24 mesi, poi 45,90€+IVA/mese.', '📍 Installazione (49,90€)': 'Costo Una Tantum Premium. Addebitato nella prima fattura.', '🔄 Attivazione (240€ in 24 rate)': '10€/mese per 24 mesi — rate residue in unica soluzione se recesso anticipato.', '2 linee': '2 numerazioni telefoniche dedicate incluse.', 'Backup LTE': 'Attivazione automatica in caso di interruzione della linea principale.', 'Modem': 'Fritz!Box 6890 LTE.', 'IVA': 'Prezzo IVA esclusa (22%).' },
        postille: ["* Prezzo promo 35,90€+IVA/mese per 24 mesi. Dal 25° mese: 45,90€+IVA/mese.", "Installazione: 49,90€ Una Tantum. Attivazione: 240€ in 24 rate mensili (10€/mese).", "In caso di cessazione entro 24 mesi: rate residue in unica soluzione + 1 mensilità.", "Tutti i prezzi IVA esclusa (22%)."],
    },
    {
      id: 'biz-pre-3',
      nome: 'Premium 2 Linee + Centralino',
      sub: 'FTTH 1 Gbps · 2 linee + Centralino · Backup LTE · Assistenza Prioritaria',
      prezzo: 44.90, label: '44,90€', suf: '+IVA/mese*',
      iva: true, highlight: false,
      features: ['FTTH fino a 1 Gbps · 2 linee telefoniche', 'Chiamate illimitate · Centralino VoIP + 3 configurazioni', 'Backup LTE automatico · IP Statico · Assistenza Prioritaria'],
      costi: { '📍 Installazione tecnico (Una Tantum)': '49,90€', '🔄 Attivazione': '240€ in 24 rate mensili (10€/mese)' },
      dettagli: { 'Promozione': '44,90€+IVA/mese per 24 mesi, poi 54,90€+IVA/mese.', '📍 Installazione (49,90€)': 'Costo Una Tantum Premium. Addebitato nella prima fattura.', '🔄 Attivazione (240€ in 24 rate)': '10€/mese per 24 mesi — rate residue in unica soluzione se recesso anticipato.', 'Centralino VoIP': 'Configurazione centralino inclusa + 3 interventi di configurazione aggiuntivi inclusi.', 'Backup LTE': 'Attivazione automatica in caso di interruzione della linea principale.', 'Modem': 'Fritz!Box 6890 LTE — VPN, NAS, hotspot, controllo accessi avanzato.', 'IVA': 'Prezzo IVA esclusa (22%).' },
        postille: ["* Prezzo promo 44,90€+IVA/mese per 24 mesi. Dal 25° mese: 54,90€+IVA/mese.", "Installazione: 49,90€ Una Tantum. Attivazione: 240€ in 24 rate mensili (10€/mese).", "In caso di cessazione entro 24 mesi: rate residue in unica soluzione + 1 mensilità.", "Tutti i prezzi IVA esclusa (22%)."],
    },
  ],

  servizi: [
    {
      id: 'srv-axa', nome: 'Assicurazione AXA — Casa e Digitale', icon: '🛡️',
      sezioni: [
        {
          titolo: 'Assicurazione Assistenza Casa',
          voci: [
            'Intervento di un professionista (Elettricista, Fabbro, Vetraio, Serramentista, Termoidraulico, ecc.) in caso di danni o furto',
            'Fino a 200€ rimborsati a sinistro · Massimo 3 sinistri/anno',
            'Copertura albergo per inagibilità della casa: fino a 1.500€',
          ],
        },
        {
          titolo: 'Assistenza Digitale',
          voci: [
            'Protezione fino a 2 interventi/anno per Apparati Mobile (smartphone, tablet)',
            'Protezione fino a 3 interventi/anno per Apparati Home (PC, modem, TV)',
            'Riparazione o sostituzione dei dispositivi danneggiati',
          ],
        },
        {
          titolo: 'Offerte che includono AXA',
          voci: [
            'Casa Fibra Power Home Safe (solo fisso)',
            'Casa Fibra Power Home Safe + Mobile 200 GB (convergente)',
            'Casa Fibra Power Home Safe + Mobile 350 GB 5G (convergente)',
          ],
        },
        {
          titolo: 'Documentazione ufficiale',
          voci: [
            'Set Informativo: casa.tiscali.it/doc/caratteristiche-offerta/SetInformativo_AXA.pdf',
            'Informativa Privacy AXA disponibile su sito Tiscali',
          ],
        },
      ],
    },
    {
      id: 'srv-roaming', nome: 'Roaming UE e Internazionale', icon: '🌍',
      sezioni: [
        {
          titolo: 'GB disponibili in roaming EU e UK — SIM Residenziali',
          voci: [
            'Mobile 5G/4G — portabilità (150 GB 5G): 8,93 GB in EU/UK',
            'Mobile 5G/4G — nuovo numero (200 GB 4G): 8,93 GB in EU/UK',
            'Mobile 250 GB 5G: 11,91 GB in EU/UK',
            'Mobile 350 GB 5G: 16,38 GB in EU/UK',
            'Convergente + Mobile 200 GB: 8,94 GB in EU/UK',
            'Convergente + Mobile 350 GB 5G: 16,38 GB in EU/UK',
          ],
        },
        {
          titolo: 'Chiamate internazionali incluse nel Fisso',
          voci: [
            '60 minuti/mese gratuiti verso numeri fissi internazionali',
            'Paesi inclusi: Unione Europea, UK, Svizzera, USA, Canada',
            'Valido per tutte le offerte residenziali e business con fisso',
          ],
        },
        {
          titolo: "Tariffe chiamate vocali extra soglia (dall'Italia verso estero)",
          voci: [
            'Zona UE e Zona 1a: 0,2318€/minuto',
            'Zona 1: 0,50€/minuto',
            'Zona 2: 2,00€/minuto',
            'Zona 3: 2,50€/minuto',
          ],
        },
        {
          titolo: 'Dati extra soglia',
          voci: [
            'Traffico dati extra soglia: 30 cent/MB (tariffazione per singolo KB)',
            'Bloccato automaticamente di default',
            'Sblocco possibile solo tramite Area Clienti MyTiscali',
          ],
        },
      ],
    },
    {
      id: 'srv-installazione', nome: 'Installazione e Attivazione Fibra', icon: '🔧',
      sezioni: [
        {
          titolo: "Cosa prevede l'installazione standard (29,90€)",
          voci: [
            'Collegamento alla borchia ottica tramite bretella in fibra ottica',
            "Installazione del modem presso l'abitazione/ufficio",
            'Verifica accensione apparato (Led Power)',
            'Collegamento alla connessione ottica (Led Pon o Reg)',
            "Collaudo del servizio il giorno dell'installazione",
            "Il modem viene inviato tramite corriere prima dell'appuntamento",
          ],
        },
        {
          titolo: 'Costi installazione per distanza',
          voci: [
            "Entro 5 metri dall'ingresso: 29,90€ Una Tantum (standard)",
            'Da 5 a 20 metri: +60€ aggiuntivi',
            'Oltre 20 metri: +6€ per ogni metro lineare aggiuntivo',
            'Tutti i costi addebitati nella prima fattura',
          ],
        },
        {
          titolo: 'Installazione vs Attivazione — differenza',
          voci: [
            'INSTALLAZIONE (29,90€ Una Tantum): costo per il tecnico che viene fisicamente a casa. Si paga una sola volta.',
            'ATTIVAZIONE COMMERCIALE residenziale: inclusa nel canone mensile — nessun costo aggiuntivo.',
            'ATTIVAZIONE COMMERCIALE Business Fibra Power: 120€ totali rateizzati in 24 mesi (5€/mese in fattura). Se recesso anticipato le rate residue si pagano in unica soluzione.',
          ],
        },
        {
          titolo: 'Fatturazione',
          voci: [
            'Fisso: fatturazione bimestrale anticipata dalla data di attivazione effettiva',
            'Chiamate non incluse nel canone: fatturazione mensile posticipata',
            'Mobile: prepagato con ricarica automatica mensile su Conto Bancario o Carta di Credito',
            "L'attivazione SIM e la prima ricarica vengono regolarizzate in punto vendita",
          ],
        },
      ],
    },
    {
      id: 'srv-vincoli', nome: 'Vincoli, Recesso e Penali', icon: '📋',
      sezioni: [
        {
          titolo: 'Contratto fisso residenziale',
          voci: [
            'Durata indeterminata — nessun vincolo minimo',
            'Recesso entro i primi 24 mesi: 1 mensilità + eventuali rate residue di attivazione',
            'Effetto del recesso: dalla registrazione nei sistemi Tiscali, entro 30 giorni dalla comunicazione',
          ],
        },
        {
          titolo: 'Offerte convergenti (Fisso + Mobile)',
          voci: [
            'Disattivazione SIM: il fisso passa da 23,90€ a 27,90€/mese',
            'Perdita addebito automatico mobile: ricarica manuale a 11,90€/mese (stesso traffico)',
            'Recesso fisso entro 24 mesi: 1 mensilità + rate residue',
          ],
        },
        {
          titolo: 'Contratto mobile',
          voci: [
            'Nessun vincolo: recesso o portabilità verso altro operatore in qualunque momento senza costi',
            'Passaggio ad altro operatore: 2€ per trasferimento del credito residuo',
            'Mancato pagamento automatico: passa a ricarica manuale allo stesso prezzo e con lo stesso traffico',
          ],
        },
        {
          titolo: 'Business — Attivazione rateizzata',
          voci: [
            'Business Fibra Power: 120€ totali in 24 mesi (5€/mese in fattura)',
            'Recesso prima dei 24 mesi: le rate residue vengono addebitate in unica soluzione',
            'Tutti i prezzi business sono IVA esclusa (22%)',
          ],
        },
      ],
    },
    {
      id: 'srv-freshdesk', nome: "Freshdesk — Guida all'uso", icon: '🎫',
      sezioni: [
        {
          titolo: "Cos'è Freshdesk",
          voci: [
            'Freshdesk è la piattaforma di ticketing che Tiscali mette a disposizione dei Business Partner. Leggi la guida completa nella sezione Materiali o scaricala direttamente: /Manuale_Freshdesk.pdf',
            'Serve per gestire le richieste dei clienti relative alle offerte Fibra e Mobile B2C e B2B.',
            'Ogni segnalazione aperta ha un percorso tracciato — zero code telefoniche, tutto documentato.',
            '⚠️ Non usare contemporaneamente Freshdesk E il telefono per lo stesso caso: genera duplicazioni e rallentamenti.',
          ],
        },
        {
          titolo: 'Come accedere',
          voci: [
            "Riceverai una mail da 'Tiscali Supporto Tecnico' con un link per attivare l'account.",
            'Clicca il link → crea la tua password → accedi a tiscali.freshdesk.com.',
            'Link diretto: tiscali.freshdesk.com/support/login',
          ],
        },
        {
          titolo: '⚠️ Non hai Freshdesk attivo?',
          voci: [
            'Scrivi a supportobp@tiscali.com per richiedere le credenziali di accesso.',
            'Indica il tuo codice LK (es. LK00000).',
            'Indica il tuo indirizzo email di riferimento.',
          ],
        },
        {
          titolo: "Tipologie di ticket — scegli l'Area giusta",
          voci: [
            '🏢 AMMINISTRATIVA: chiarimenti fatture Fibra e Mobile.',
            '🚚 DELIVERY: DAC non rispettata, anomalie/solleciti di attivazione, censimento indirizzo.',
            '🔧 TECNICA: anomalie internet/fonia, disconnessioni, lentezza, disservizi, modem, posta elettronica.',
            '📱 MOBILE: mancata portabilità, assistenza tecnica, rimborso SIM, anomalie/solleciti attivazione.',
            '💼 COMMERCIALE: cambio intestatario, cambio segmento, richiesta chiusura contratto.',
          ],
        },
        {
          titolo: 'Come aprire un ticket',
          voci: [
            'Clicca su "Nuovo ticket di assistenza".',
            'Campi obbligatori: Richiedente · Oggetto · Numero cliente · Recapito alternativo · Area · Descrizione.',
            "⚡ Per contratti SOHO/B2B: inserire la dicitura 'B2B' nell'oggetto per avere priorità nella gestione.",
            'Verifica SEMPRE che non esista già un ticket aperto per lo stesso cliente prima di aprirne uno nuovo.',
          ],
        },
        {
          titolo: 'Stati del ticket',
          voci: [
            '🟡 Aperto: stato iniziale appena aperto il ticket.',
            '🔵 In attesa: ticket in lavorazione o in attesa di informazioni aggiuntive da parte del Partner.',
            '🟢 Risolto: ticket chiuso.',
          ],
        },
        {
          titolo: '📄 Documentazione ufficiale',
          voci: [
            'Scarica la guida completa: /Manuale_Freshdesk.pdf',
            "La guida è disponibile anche nella sezione Materiali dell'app.",
          ],
        },
        {
          titolo: 'Assistenza telefonica alternativa',
          voci: [
            'Numero dedicato: 0707574800 — Lunedì/Sabato 8:30-19:00 (festivi esclusi).',
            'Digita 1 → Assistenza tecnica · Digita 2 → Commerciale/Amministrativa · Digita 3 → Mobile.',
          ],
        },
      ],
    },
    {
      id: 'srv-inclusi', nome: 'Servizi Inclusi e Opzionali', icon: '⭐',
      sezioni: [
        {
          titolo: 'Inclusi in tutte le SIM residenziali',
          voci: [
            'Parental Control Safe Kids Free by Kaspersky — navigazione sicura per minori',
            "Attivabile/disattivabile dall'Area Clienti MyTiscali",
          ],
        },
        {
          titolo: 'Modem Voce Super Wi-Fi',
          voci: [
            'Fornito in comodato gratuito con tutte le offerte fisso',
            "Rimane di proprietà Tiscali — da restituire in caso di cessazione",
            "Inviato tramite corriere prima dell'appuntamento del tecnico",
          ],
        },
        {
          titolo: 'Servizi opzionali a pagamento (fisso)',
          voci: [
            '"Chi è": visualizzazione del numero chiamante — 0,99€/mese',
            'Indirizzo IP statico (1 indirizzo) — 3,00€/mese',
            'Elenco telefonico cartaceo — 3,00€/anno',
            'Fattura cartacea — 2,00€ per spese di spedizione',
          ],
        },
        {
          titolo: 'Come ricaricare la SIM mobile',
          voci: [
            'App MyTiscali',
            'Online: Tiscali.it con Satispay, PayPal, Carta di Credito',
            'Negozi Tiscali',
            'Sportelli Bancomat e Home Banking Intesa San Paolo, Unicredit',
          ],
        },
      ],
    },
    {
      id: 'srv-ordine-sim',
      nome: 'Come ordinare le SIM',
      icon: '📦',
      sezioni: [
        {
          titolo: "Dove fare l'ordine",
          voci: [
            "L'ordine SIM va inserito sul portale MySpace o Joy — NON su Tiscali Station.",
            'Tiscali Station serve per attivare le SIM già in tuo possesso, non per ordinarle.',
            'Controlla sempre le scorte in cassetto prima di fare un nuovo ordine.',
          ],
        },
        {
          titolo: 'Pagamento — Bonifico Bancario E2K',
          voci: [
            'IBAN: IT90Y0103020700000063290357',
            'Beneficiario: Euroelettronica 2000 srl',
            'Causale: Acquisto SIM TISCALI',
            'Il pagamento precede la spedizione — attendere conferma prima di comunicare disponibilità al cliente.',
          ],
        },
        {
          titolo: 'Tempistiche consigliate',
          voci: [
            'Ordinare con almeno 5 giorni di anticipo rispetto al fabbisogno previsto.',
            'Fine mese: ordinare entro il 25-26 per ricevere le SIM nei primi giorni del mese successivo.',
            'Tenere sempre una scorta minima di sicurezza in negozio.',
          ],
        },
      ],
    },
    {
      id: 'srv-plafond',
      nome: 'Plafond di Ricarica — Fondamentale',
      icon: '💳',
      sezioni: [
        {
          titolo: '⛔ Senza plafond non si attiva',
          voci: [
            'ATTENZIONE: senza credito sufficiente nella Station, la sezione attivazione SIM è BLOCCATA. Non è un errore tecnico — è un blocco volontario del sistema.',
            'Non puoi attivare SIM se non hai plafond disponibile. Verifica SEMPRE prima di presentarsi con un cliente.',
            'Un plafond esaurito in giornata di vendita intensa significa clienti persi.',
          ],
        },
        {
          titolo: 'Come funziona il plafond',
          voci: [
            'Il plafond è il credito disponibile sulla Station per le attivazioni SIM.',
            'Importo minimo di ricarica: €50.',
            'Le ricariche vanno acquistate per multipli di €50 (€50, €100, €150, €200…).',
            'Il plafond si scala ad ogni attivazione SIM effettuata.',
          ],
        },
        {
          titolo: 'Come ricaricare il plafond',
          voci: [
            "Bonifico bancario a Euroelettronica 2000 srl (stesse coordinate dell'ordine SIM).",
            'IBAN: IT90Y0103020700000063290357 — Causale: Ricarica plafond Tiscali.',
            'Il plafond viene aggiornato dopo conferma del bonifico — non è istantaneo.',
            'Pianificare con anticipo: non aspettare di essere a zero.',
          ],
        },
      ],
    },
    {
      id: 'srv-contatti',
      nome: 'Contatti Supporto Business Partner',
      icon: '📞',
      sezioni: [
        {
          titolo: 'Numero dedicato Business Partner',
          voci: [
            'Numero: 0707574800',
            'Disponibilità: Lunedì – Sabato · 8:30 – 19:00 (festivi esclusi)',
            'Digita 1 → Assistenza tecnica',
            'Digita 2 → Commerciale / Amministrativa',
            'Digita 3 → Mobile',
          ],
        },
        {
          titolo: '⚠️ Importante',
          voci: [
            'Non usare contemporaneamente Freshdesk E il telefono per lo stesso caso: genera duplicazioni e rallentamenti.',
            'Per contratti SOHO/B2B inserire la dicitura "B2B" nell\'oggetto del ticket per avere priorità.',
          ],
        },
        {
          titolo: 'Canali alternativi',
          voci: [
            'Freshdesk (ticketing): tiscali.freshdesk.com/support/login',
            'Email Freshdesk non attivo: supportobp@tiscali.com (indicare codice LK e email di riferimento)',
          ],
        },
      ],
    },
    {
      id: 'srv-sostituzione-sim',
      nome: 'Procedura Cambio / Sostituzione SIM',
      icon: '🔄',
      sezioni: [
        {
          titolo: 'Come procedere — Tiscali Station',
          voci: [
            'Accedere al Portale Tiscali Station: exp-partners.tiscali.it',
            'Selezionare: MOBILE',
            'Selezionare: GESTIONE CLIENTE',
            'Selezionare: CAMBIO SIM',
            'Selezionare la causale del cambio SIM',
          ],
        },
        {
          titolo: 'Compilazione e autorizzazione',
          voci: [
            'Compilare in tutte le sue parti il form Cambio SIM.',
            'Il tasto "PROCEDI" è inibito fino al ricevimento dell\'autorizzazione del cliente.',
            'Il cliente accede a MyTiscali e fornisce il consenso — le SIM da usare sono le SIM MNP.',
            'Ottenuta l\'autorizzazione il tasto "PROCEDI" viene abilitato: procedere con l\'ordine.',
            'L\'ordine seguirà il normale processo di attivazione della nuova SIM.',
          ],
        },
        {
          titolo: 'Costo sostituzione',
          voci: [
            'L\'importo viene scalato direttamente dal credito residuo della SIM cliente.',
          ],
        },
        {
          titolo: 'Documenti necessari',
          voci: [
            'Copia fronte/retro del documento d\'identità in corso di validità.',
            'Copia del Codice Fiscale.',
            'Copia della vecchia SIM con ICCID visibile.',
            'In caso di furto o smarrimento: denuncia rilasciata presso le Autorità competenti.',
          ],
        },
        {
          titolo: 'Attivazione nuova SIM',
          voci: [
            'Dopo aver ricevuto la nuova SIM, il cliente contatta il Servizio Clienti al 130 oppure tramite App MyTiscali per completare l\'attivazione.',
          ],
        },
        {
          titolo: 'Conferma sostituzione',
          voci: [
            'In homepage il cliente troverà l\'avviso "Sostituzione SIM [numero]".',
            'Cliccare su CONFERMA → poi su VAI per confermare la sostituzione.',
          ],
        },
        {
          titolo: '📄 Documentazione',
          voci: [
            'La guida completa è disponibile nella sezione Materiali → Formazione.',
          ],
        },
      ],
    },
  ],
};