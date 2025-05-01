const CACHE_NAME = 'galaxy-fishing-v1';
const API_CACHE_NAME = 'galaxy-fishing-api-v1';

const CACHE_URLS = [
  '/',
  '/f-rod.png',
  '/manifest.json',
];

const API_URLS = [
  'https://api-game.bloque.app/game/leaderboard',
  'https://api-game.bloque.app/game/market'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets...');
        return cache.addAll(CACHE_URLS);
      })
  );

  event.waitUntil(
    caches.open(API_CACHE_NAME).then(cache => {
      return Promise.all(API_URLS.map(async url => {
        try {
          const res = await fetch(url);
          if (res.ok) {
            await cache.put(url, res.clone());
            console.log(`Cached API: ${url}`);
          }
        } catch (err) {
          console.warn(`Failed to cache ${url}`, err);
        }
      }));
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.hostname === 'api-game.bloque.app') {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(event.request);
          const cache = await caches.open(API_CACHE_NAME);
          cache.put(event.request, res.clone());
          return res;
        } catch (err) {
          const cached = await caches.match(event.request);
          if (cached) {
            return cached;
          }
          return new Response(JSON.stringify({
            error: 'You are offline and no cached API data is available.',
            offline: true,
            timestamp: new Date().toISOString()
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })()
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(res => {
          if (!res || res.status !== 200 || res.type !== 'basic') return res;
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
          return res;
        })
        .catch(err => {
          console.warn('Asset fetch failed:', event.request.url, err);
          return new Response('Offline and resource not cached.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
    })
  );
});
