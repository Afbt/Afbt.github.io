/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69442c75b802fe525b84b8e85fffbfc8"
  },
  {
    "url": "accumulate/index.html",
    "revision": "c2a8effc1ccfa339161b6de28d6cbf04"
  },
  {
    "url": "accumulate/jsSumm.html",
    "revision": "e363a7599608e0c331fb54a5f6d14c51"
  },
  {
    "url": "accumulate/vModelComponents.html",
    "revision": "93c77117e58c959fc215c7fdaa39541e"
  },
  {
    "url": "accumulate/vuex.html",
    "revision": "07d956611a6da507ee9cd2462a51413e"
  },
  {
    "url": "accumulate/webpack.html",
    "revision": "ff7ccdd58c837cc7f5ae3c125fed414e"
  },
  {
    "url": "assets/css/0.styles.adb6ddfb.css",
    "revision": "2ae210c5f9acc1765f356ac78cdb4b40"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af8d6add.js",
    "revision": "fe745a1cc2d5ec627ce15ad7ab030c7d"
  },
  {
    "url": "assets/js/11.999d3fdd.js",
    "revision": "d03cd4824db5f80394a26849cc74024e"
  },
  {
    "url": "assets/js/12.65d8f68c.js",
    "revision": "641d8a65d7ef7a2fae597e0e05c50854"
  },
  {
    "url": "assets/js/13.70a93682.js",
    "revision": "633e1218240ec809503e1b0e679ebdd7"
  },
  {
    "url": "assets/js/14.17272128.js",
    "revision": "30d014e2332aa1f83124f0d78e903c58"
  },
  {
    "url": "assets/js/15.4cbe81e3.js",
    "revision": "48b63228adf91d7e7c788fdd336e2328"
  },
  {
    "url": "assets/js/2.739939a7.js",
    "revision": "52bec34e53d1afbad4b6b2ffac3c6fb9"
  },
  {
    "url": "assets/js/3.3b53750c.js",
    "revision": "2fec0667f63201450fce838ec53766e9"
  },
  {
    "url": "assets/js/4.a7ec9f11.js",
    "revision": "59a2e915fbc88d3e2dd001e25c8f270c"
  },
  {
    "url": "assets/js/5.8111edb2.js",
    "revision": "6e85b0de0a91eb86063ff73d110694b4"
  },
  {
    "url": "assets/js/6.6fc58b99.js",
    "revision": "24f6d1fb4098e3ffd921f0548b60b455"
  },
  {
    "url": "assets/js/7.301e08c2.js",
    "revision": "2f1e6581bd9f0cab255db54b12ac49d7"
  },
  {
    "url": "assets/js/8.08cd7595.js",
    "revision": "0673045c8c16fcdff7cb4f48b88577b5"
  },
  {
    "url": "assets/js/9.022be47a.js",
    "revision": "555bce6fd1375f8065d14312343ddd5d"
  },
  {
    "url": "assets/js/app.834976f6.js",
    "revision": "3a565c15f20d7d3f19f637c382206ee2"
  },
  {
    "url": "bladelickblood/index.html",
    "revision": "8ea634397fc640fb508dec666bb19947"
  },
  {
    "url": "BusinessIssues/index.html",
    "revision": "ffa3d5fed0f357d3cec54fdedbcb2711"
  },
  {
    "url": "index.html",
    "revision": "6b8867f835f301f69e386b34554e62ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
