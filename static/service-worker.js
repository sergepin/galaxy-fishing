const CACHE_NAME = 'galaxy-fishing-v1';
const API_CACHE_NAME = 'galaxy-fishing-api-v1';

// Resources to cache for offline use
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

    // Handle API requests
    if (url.hostname === 'api-game.bloque.app') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Clone the response because it can only be used once
                    const responseClone = response.clone();
                    caches.open(API_CACHE_NAME)
                        .then(cache => cache.put(event.request, responseClone));
                    return response;
                })
                .catch(() => {
                    // If fetch fails, try to get from cache
                    return caches.match(event.request);
                })
        );
        return;
    }

    // Handle app resources
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached response if found
                if (response) {
                    return response;
                }
                // Otherwise fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Don't cache if not a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // Clone the response because it can only be used once
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseClone));
                        return response;
                    });
            })
    );
}); 