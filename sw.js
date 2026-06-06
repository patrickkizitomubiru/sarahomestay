// sw.js - Service Worker for Sarah's Homestay Invoice App
const CACHE_NAME = 'sarahs-homestay-v1';
const urlsToCache = [
  './',
  './index.html'
];

// Install event – cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.warn('Cache addAll failed:', err))
  );
  // Activate worker immediately
  self.skipWaiting();
});

// Activate event – clean up old caches (optional)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event – serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if found
        if (response) return response;
        // Otherwise fetch from network
        return fetch(event.request).then(networkResponse => {
          // Don't cache external CDN assets (QR code library, html2pdf) – optional
          // You can uncomment the next line if you want to cache them
          // if (event.request.url.includes('cdn.jsdelivr.net')) return networkResponse;
          return networkResponse;
        }).catch(() => {
          // Optional: return offline fallback page if needed
          return caches.match('./index.html');
        });
      })
  );
});
