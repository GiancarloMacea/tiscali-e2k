const CACHE_NAME = 'tiscali-e2k-v1';

// Installa il service worker
self.addEventListener('install', e => {
  self.skipWaiting();
});

// Attiva e prende controllo immediatamente
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Strategia: Network First con fallback cache
self.addEventListener('fetch', e => {
  // Ignora richieste non GET e richieste esterne (Blob, API)
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Metti in cache una copia fresca
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Pulizia cache alla chiusura dell'app (message dalla pagina)
self.addEventListener('message', e => {
  if (e.data === 'CLEAR_CACHE') {
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    );
  }
});
