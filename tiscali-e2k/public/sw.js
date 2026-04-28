/*
 * Service Worker · Tiscali E2K
 * Generato con AI Claude · Aprile 2026
 *
 * STRATEGIA:
 *  - HTML (navigation): network-first → fallback cache → fallback offline message
 *    Così, se sei online, vedi sempre l'ultima versione. Se sei offline o la
 *    rete fallisce, non resti con schermata bianca: ti diamo l'ultima copia
 *    che abbiamo in cache.
 *
 *  - Asset statici con hash (JS bundle, CSS, immagini): stale-while-revalidate
 *    Servo subito dalla cache (apertura istantanea), poi aggiorno la cache
 *    in background. I bundle Vite hanno hash nel nome quindi sono immutabili
 *    e questo è sicuro al 100%.
 *
 *  - PDF e tutto il resto: network-first con fallback cache.
 *
 * COSA È STATO RIMOSSO (causava la schermata bianca su mobile):
 *  - L'handler `message: CLEAR_CACHE` che cancellava tutta la cache
 *    ogni volta che l'app andava in background. Con rete debole/3G
 *    l'app non poteva più caricare nulla → schermata bianca.
 *
 * AGGIORNAMENTO PER UTENTI CON SW VECCHIO:
 *  - Ho bumpato CACHE_VERSION → l'evento `activate` cancella TUTTE le
 *    cache vecchie (incluse quelle del SW rotto).
 *  - skipWaiting + clients.claim → il nuovo SW prende il controllo
 *    immediatamente.
 *  - In index.html c'è un listener `controllerchange` che ricarica
 *    automaticamente la pagina, così l'utente vede subito la versione fixata.
 */

const CACHE_VERSION = 'tiscali-e2k-v3-fix-blank-screen';

/* ── INSTALL ───────────────────────────────────────────────────────── */
self.addEventListener('install', () => {
  // Attivazione immediata: non aspettare che le tab vecchie si chiudano.
  self.skipWaiting();
});

/* ── ACTIVATE ──────────────────────────────────────────────────────── */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Cancella TUTTE le cache vecchie (anche quelle del SW v1/v2 rotto).
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
    );
    // Prendi il controllo di tutti i client subito.
    await self.clients.claim();
  })());
});

/* ── FETCH ─────────────────────────────────────────────────────────── */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Solo GET, solo same-origin (lasciamo Vercel Blob, Canva, ecc. al browser).
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // 1) Navigazione (HTML): network-first.
  //    Se la rete fallisce (offline / lenta), serviamo l'index.html in cache.
  //    MAI ritornare undefined → questo evitava la schermata bianca.
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(networkFirstHTML(req));
    return;
  }

  // 2) Asset statici con hash (JS/CSS/img bundlati da Vite): SWR.
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/loghi/') ||
    /\.(?:js|css|png|jpg|jpeg|svg|webp|woff2?)$/.test(url.pathname)
  ) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // 3) Tutto il resto (PDF locali, manifest, ecc.): network-first.
  event.respondWith(networkFirst(req));
});

/* ── Strategie ─────────────────────────────────────────────────────── */

async function networkFirstHTML(req) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch (_) {
    // Offline / rete morta: prova l'esatta richiesta, poi index.html generico,
    // così l'SPA può comunque montarsi e gestire il routing.
    const cached = await cache.match(req);
    if (cached) return cached;
    const indexFallback = await cache.match('/index.html');
    if (indexFallback) return indexFallback;
    return new Response(
      '<!doctype html><meta charset="utf-8"><title>Tiscali E2K</title>' +
      '<body style="font-family:system-ui;padding:24px;color:#333">' +
      '<h2>Connessione assente</h2>' +
      '<p>Verifica la connessione e ricarica la pagina.</p>' +
      '<button onclick="location.reload()" style="padding:10px 16px;background:#4A3F8E;color:#fff;border:0;border-radius:8px;font-size:15px">Riprova</button>' +
      '</body>',
      { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 200 }
    );
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(req);
  const network = fetch(req)
    .then((res) => {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);
  // Servi subito la cache se c'è, altrimenti aspetta la rete.
  return cached || (await network) || Response.error();
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch (_) {
    const cached = await cache.match(req);
    return cached || Response.error();
  }
}
