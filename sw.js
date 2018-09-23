var cacheID = 'mws-restaurant'

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheID).then(cache => {
      return cache
      .addAll([
        "/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/data/restaurants.json",
        "/js/",
        "/js/dbhelper.js",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/js/registerServiceWorker.js",
        "/img/"
      ])
      .catch(error => {
        console.log("caches open failed: " + error);
      });
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      if (response) return response;
      return fetch(event.request);
    })
  )
});
