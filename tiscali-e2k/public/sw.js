/*
 * Service Worker · KILL-SWITCH · Tiscali E2K
 * Generato con AI Claude · Aprile 2026
 *
 * Questo file esiste SOLO per gestire il caso in cui un browser abbia
 * la vecchia versione di sw.js in cache e provi a usarla. Quando viene
 * eseguito:
 *  1. Cancella TUTTE le cache (incluso il bug del v1 che cancellava
 *     la cache su visibilitychange).
 *  2. Disinstalla se stesso.
 *  3. Forza un reload di tutti i client connessi.
 *
 * Dopo questa operazione, nessun service worker resta registrato per
 * questo dominio. Il browser carica l'app come una normale web app:
 *  - Niente più cache rotte.
 *  - Niente più handler che cancellano cache su visibilitychange.
 *  - L'app non può più diventare bianca per colpa del SW.
 *
 * In index.html non c'è più alcuna registrazione di service worker,
 * quindi questo file non verrà più scaricato dai nuovi visitatori.
 * Resta qui solo per gestire i client già infetti.
 */

self.addEventListener('install', function () {
  // Attivati subito, non aspettare che le altre tab si chiudano.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      // 1) Cancella tutte le cache
      const keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));

      // 2) Disinstalla questo service worker
      await self.registration.unregister();

      // 3) Ricarica tutti i client connessi così tornano puliti
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(function (client) {
        try { client.navigate(client.url); } catch (e) {}
      });
    } catch (e) {
      // silenzioso
    }
  })());
});

// Per le richieste fetch: lascio tutto al browser, non intercetto nulla.
// Non aggiungo l'event listener così le richieste vanno dirette in rete.
