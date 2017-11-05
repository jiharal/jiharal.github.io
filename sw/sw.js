var cacheName = 'Jihar Al Gifari';
var filesToCache = [
  '/',
  '/css/style.css',
  '/img/work.png',
  '/img/android.png',
  '/img/cockroachDB.png',
  '/img/docker.png',
  '/img/golang.png',
  '/img/grpc.png',
  '/img/laravel.png',
  '/img/profile.png'
];

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
