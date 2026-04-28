/*
 * Service Worker · MINIMAL PASSTHROUGH · Tiscali E2K
 * Generato con AI Claude · Aprile 2026
 *
 * Scopo: soddisfare i criteri Chrome per il prompt "Installa app"
 * (manifest valido + SW registrato con fetch handler) SENZA introdurre
 * cache aggressive che possano causare di nuovo schermate bianche.
 *
 * Cosa fa:
 *  - install:  skipWaiting (non aspetta che le tab vecchie chiudano)
 *  - activate: clients.claim (prende il controllo subito) + cancella TUTTE
 *              le vecchie cache (cleanup del SW v1 rotto se ancora presente)
 *  - fetch:    handler vuoto = lascia ogni richiesta al browser, niente cache
 *
 * Trade-off cosciente:
 *  - NO modalità offline (non cachea l'app)
 *  - SÌ installabilità PWA (icona sulla home, schermo intero, ecc.)
 *  - Massima sicurezza: nessun bug di cache può rompere l'app
 */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    } catch (e) { /* silenzioso */ }
    await self.clients.claim();
  })());
});

// Fetch handler vuoto: NECESSARIO per soddisfare i criteri PWA installable
// di Chrome, ma non chiama event.respondWith() → il browser gestisce tutto
// normalmente senza intercettazione del SW.
self.addEventListener('fetch', function () {
  // intenzionalmente vuoto
});
