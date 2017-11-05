let version = '0.1';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('Jihar').then(cache => {
      return cache.addAll([
        `/`,
        `/img/android.png?timestamp=${timeStamp}`,
        `/css/style.css?timestamp=${timeStamp}`,
        `/img/profile.jpg?timestamp=${timeStamp}`,
        `/img/golang.png?timestamp=${timeStamp}`,
        `/img/laravel.png?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
