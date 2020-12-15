

const FILES_TO_CACHE = [
    'manifest.json',
    '/images/icons-512.png',
    'static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/media/relaylogo.21061732.png',    
    '/static/js/main.chunk.js',
    '/index.html',
    '/'
]
const CACHE_NAME = 'static-cache-relay';
const DATA_CACHE_NAME = "data-cache-relay"

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
        console.log('Your files were pre-cached');
        return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();

});

// Update a service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim()
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            cache.put(event.request.url, response.clone());
          }
          return response;
        })
        .catch(err => {
          return cache.match(event.request);
        });
      }).catch(err => console.log(err))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
