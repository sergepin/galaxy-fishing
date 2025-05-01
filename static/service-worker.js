const CACHE_NAME = 'galaxy-fishing-v1';
const API_CACHE_NAME = 'galaxy-fishing-api-v1';

const CACHE_URLS = [
    '/',
    '/index.html',
    '/global.css',
    '/build/bundle.css',
    '/build/bundle.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        Promise.all([
            caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS)),
            caches.open(API_CACHE_NAME)
        ])
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

if (url.hostname === 'api-game.bloque.app') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const responseClone = response.clone();
                    caches.open(API_CACHE_NAME)
                        .then(cache => cache.put(event.request, responseClone));
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseClone));
                        return response;
                    });
            })
    );
}); 