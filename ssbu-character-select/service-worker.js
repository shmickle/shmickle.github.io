importScripts("/ssbu-character-select/precache-manifest.02174c7be01a9a611b208f30725e22cf.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'ssbu-select-screen' })

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

const apiHandler = workbox.strategies.cacheFirst({
  cacheName: 'api-cache'
})

workbox.routing.registerRoute(
  'https://ssbu-character-select.firebaseio.com/fighters.json',
  args => {
    return apiHandler
      .handle(args)
      .then(response => {
        console.log('Online: Fetch was called successful')
        return response
      })
      .catch(err => {
        console.log('no cache data')
      })
  }
)

