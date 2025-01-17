self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('truth-dare-game').then((cache) => {
        return cache.addAll([
          '/',
          'index.html',
          'style.css',
          'script.js',
          'TDS.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  