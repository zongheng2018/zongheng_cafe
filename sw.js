const CACHE_NAME = "zongheng-cafe-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/resident.html",
  "/resident_order.html",
  "/cafe.html",
  "/property.html",
  "/engineer.html",
  "/bg.jpg",
  "/logo.png"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
    .then(response => response || fetch(event.request))

  );

});
