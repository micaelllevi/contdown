self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("contador-v1").then(cache => {
      return cache.addAll([
        "index.html",
        "stats.html",
        "app.js",
        "stats.js",
        "manifest.json",
        "style.css",
        "icons/icon-192.png",
        "icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
