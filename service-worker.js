self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('bees-v1').then(cache => cache.addAll(['./']))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});