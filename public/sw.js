const CACHE = 'amrich-v1';
const ASSETS = [
  '/',
  '/offline/',
  '/manifest.json',
  '/favicon.svg',
  '/favicon.ico',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  if (url.origin === location.origin) {
    if (url.pathname.startsWith('/_astro/') || url.pathname.match(/\.(css|js|svg|png|ico|woff2)$/)) {
      event.respondWith(
        caches.open(CACHE).then((cache) =>
          cache.match(request).then((cached) => {
            const fetchPromise = fetch(request).then((response) => {
              cache.put(request, response.clone());
              return response;
            });
            return cached || fetchPromise;
          })
        )
      );
      return;
    }

    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(request).then((cached) => cached || fetch(request).then((response) => {
          if (response.ok) cache.put(request, response.clone());
          return response;
        }))
      )
    );
    return;
  }

  if (url.hostname === 'images.unsplash.com') {
    event.respondWith(
      caches.open('amrich-images').then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            cache.put(request, response.clone());
            return response;
          });
          return cached || fetchPromise;
        })
      )
    );
  }
});
