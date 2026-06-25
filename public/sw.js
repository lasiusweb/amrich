const CACHE = 'amrich-v1';
const IMAGE_CACHE = 'amrich-images';
const ASSETS = [
  '/',
  '/offline/',
  '/manifest.json',
  '/favicon.svg',
  '/favicon.ico',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
];

/** External image origins served via cache-first strategy */
const IMAGE_ORIGINS = [
  'images.unsplash.com',
  'imgs.mongabay.com',
  'www.globalseafood.org',
  'sharangaaqua.com',
  'undark.org',
  'www.aquaculturealliance.org',
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
      Promise.all(keys.filter((k) => k !== CACHE && k !== IMAGE_CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/**
 * Network-first strategy for navigation requests with configurable timeout.
 * Falls back to cached response, then to the offline page.
 */
function networkFirstWithTimeout(request, timeoutMs) {
  return new Promise((resolve) => {
    let timer;
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('Navigation timeout')), timeoutMs);
    });
    Promise.race([fetch(request), timeout])
      .then((response) => {
        clearTimeout(timer);
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, clone));
        }
        resolve(response);
      })
      .catch(() => {
        clearTimeout(timer);
        caches.match(request).then((cached) => {
          if (cached) {
            resolve(cached);
          } else {
            caches.match('/offline/').then((offline) => {
              resolve(offline || new Response('Offline', { status: 503 }));
            });
          }
        });
      });
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  // ── Same-origin requests ──────────────────────────────────
  if (url.origin === location.origin) {
    // Static build assets: cache-first with network update
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

    // Navigation requests: network-first with 3-second timeout
    if (request.mode === 'navigate') {
      event.respondWith(networkFirstWithTimeout(request, 3000));
      return;
    }

    // Other same-origin (pages, data): stale-while-revalidate
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

  // ── External image origins: cache-first using IMAGE_CACHE ─
  if (IMAGE_ORIGINS.includes(url.hostname)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // ── Everything else: pass through (no event.respondWith) ──
});
