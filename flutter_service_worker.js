'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a7c6018c4abd243527a646e679b54e03",
"version.json": "245fefb4a0cc0ef0eee8d25320227a84",
"index.html": "d22c681e0d7733977eab886adac9f6da",
"/": "d22c681e0d7733977eab886adac9f6da",
"main.dart.js": "64279552cba2d96f08ba6517386a263c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
"assets/AssetManifest.json": "bb97d2793ffa64376e5f30905036bcbe",
"assets/NOTICES": "74035afcd4843df19fde1cec3213eb21",
"assets/FontManifest.json": "3921d96a34d60bb02b9a03698f1456ae",
"assets/AssetManifest.bin.json": "3365bc162414c4adb4e9ed891d1a4f0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cd560304a8dc717f65229a480123a5c9",
"assets/fonts/MaterialIcons-Regular.otf": "44fcb3294f96811f2911737c37255623",
"assets/assets/demo/mind_map.png": "aa0c981aed54850e6362d5fc80aefbe8",
"assets/assets/demo/mind_map_tool.png": "3f60be47ed459e8ca740283c4a84ea19",
"assets/assets/demo/slider_captcha.gif": "7096aba0b4c3cd70f9d53d9e9f3924c6",
"assets/assets/demo/flash_card_demo.gif": "67d9597c5009404cc1b47e5991070d6b",
"assets/assets/demo/screen_record_plus.gif": "d1e4ecd6587d837696848265bcec75d5",
"assets/assets/home/medium.svg": "12c859029bd634fa750ccf778121ff42",
"assets/assets/home/fluttergems.png": "acbfc2c0a550dfc6ba4e2462bec24e77",
"assets/assets/home/github.svg": "42c330fff3840797cc1e38bff8fc4608",
"assets/assets/home/momo.svg": "5135acc203dfabb45040eaa4763b4e7a",
"assets/assets/home/avatar.png": "cb44838f8a6a9d7236a48fcf0db73c17",
"assets/assets/home/facebook.svg": "1f180fd07dedd4121acd8b8e8e82ba02",
"assets/assets/home/linkedin.svg": "2f7e3eae5b94b795affb1d508fa09b07",
"assets/assets/home/facebook.png": "abc96b9f54ba4888cfaaac5a23428f4d",
"assets/assets/home/iptv.png": "3003e49381b9abda2a01e2a016817650",
"assets/assets/home/fulix.png": "dae550defa6cb0448c3c99b08af5447b",
"assets/assets/home/paypall.svg": "8e299ba2966a24e1c5fa1374f9dd1c8e",
"assets/assets/fonts/bakbak_one/BakbakOneRegular.ttf": "ab68e44443ab6749fbd45c3830a6a1da",
"assets/assets/fonts/candy_bean/Candy%2520Beans.otf": "d2b124e0a91b31c8ac8adc25f1d85962",
"assets/assets/fonts/jost/Jost-BoldItalic.ttf": "0f2cc11068d98a81e1436fc4286229af",
"assets/assets/fonts/jost/Jost-Bold.ttf": "76eb83c74dcd2522b10cf958893d3182",
"assets/assets/fonts/jost/Jost-ThinItalic.ttf": "9f7d6432c3a831f3741a64c401044ea2",
"assets/assets/fonts/jost/Jost-ExtraLight.ttf": "3d0c2df60ff49d46ae5b3193a2072ab2",
"assets/assets/fonts/jost/Jost-BlackItalic.ttf": "0686a3596bac97026525e18d7179a4f6",
"assets/assets/fonts/jost/Jost-ExtraBoldItalic.ttf": "7504a6b6ec7db05cd3801261bce536c1",
"assets/assets/fonts/jost/Jost-Thin.ttf": "c5a395e6ef9ce25b9a834e9aa0ec6a80",
"assets/assets/fonts/jost/Jost-LightItalic.ttf": "70786a2c40520ef797abcaeddd40e233",
"assets/assets/fonts/jost/Jost-Black.ttf": "3f0eb1ac862c20b5a591e616657b50b6",
"assets/assets/fonts/jost/Jost-ExtraLightItalic.ttf": "ada71200d0ff06233802228cf7222e69",
"assets/assets/fonts/jost/Jost-Medium.ttf": "090175d88161f36142c3b541783ca73b",
"assets/assets/fonts/jost/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/assets/fonts/jost/Jost-ExtraBold.ttf": "1b1bb84839743b32bb09fee33ad0422a",
"assets/assets/fonts/jost/Jost-Light.ttf": "2635fc592cbe2b1b2e4d0d45c0398b27",
"assets/assets/fonts/jost/Jost-Italic.ttf": "2302db2d0563c508e40a966b37e210c8",
"assets/assets/fonts/jost/Jost-SemiBoldItalic.ttf": "9f944c0f079da0e9ce3835c124913758",
"assets/assets/fonts/jost/Jost-SemiBold.ttf": "50dcc642bc107b54d474ab83800ac187",
"assets/assets/fonts/jost/Jost-MediumItalic.ttf": "9926aa9deb603b6f9308cfb3343170ec",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
