// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Service worker registered: ', registration);
        })
        .catch(error => {
          console.log('Service worker registration failed: ', error);
        });
    });
  }
  
  // Listen for install event and cache all the necessary files
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/app.js'
        ]);
      })
    );
  });
  
  // Listen for fetch event and return the cached files
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  