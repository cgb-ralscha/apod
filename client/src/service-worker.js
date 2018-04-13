importScripts('workbox-3.1.0/workbox-sw.js');
workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-3.1.0/'
});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([]);
workbox.precaching.precacheAndRoute([{
  "url": "assets/fonts/ionicons.woff2?v=3.0.0-alpha.3"
}]);

workbox.routing.registerRoute(/(.*)img(.*)/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 500
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

