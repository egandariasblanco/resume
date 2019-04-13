/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/resume/404.html","52d39a7a813a954e06aa77d27eedcdca"],["/resume/about/index.html","09fb7568d26d63184180c768fa81c681"],["/resume/assets/images/favicons/android-chrome-192x192.png","d909d73c3e414150d620753536f1a2a3"],["/resume/assets/images/favicons/android-chrome-512x512.png","60820dbd5767780e9a9165775b6336a7"],["/resume/assets/images/favicons/apple-touch-icon-114x114-precomposed.png","edf60bf1d8c068d1260a732ea90972b8"],["/resume/assets/images/favicons/apple-touch-icon-114x114.png","8e67b955a02d2c8c87962f68063007f9"],["/resume/assets/images/favicons/apple-touch-icon-120x120-precomposed.png","4b44ec21a1702db104f65bd50544d232"],["/resume/assets/images/favicons/apple-touch-icon-120x120.png","0a342ee1386b63f7ded9a802a52392e2"],["/resume/assets/images/favicons/apple-touch-icon-144x144-precomposed.png","b99184dd01ae6649aa2a68663f1d65b0"],["/resume/assets/images/favicons/apple-touch-icon-144x144.png","4ee74cf85b06dbef3137ebf2e0588837"],["/resume/assets/images/favicons/apple-touch-icon-152x152-precomposed.png","7bbfca80200eb1c4cfb83459458d799c"],["/resume/assets/images/favicons/apple-touch-icon-152x152.png","4a94792097fb141a277791b7da777b7a"],["/resume/assets/images/favicons/apple-touch-icon-180x180-precomposed.png","fd12a54abe6a816e00d30e139dfdcd5a"],["/resume/assets/images/favicons/apple-touch-icon-180x180.png","12a2f9e3f8e3aeb4a5740d8f779d4b1d"],["/resume/assets/images/favicons/apple-touch-icon-57x57-precomposed.png","ffadabbbefbbbbc25f3a8652b525df75"],["/resume/assets/images/favicons/apple-touch-icon-57x57.png","090f2ccb08ebf5f56e904ae470d60af1"],["/resume/assets/images/favicons/apple-touch-icon-60x60-precomposed.png","3eeaeedcd33e0dd08435fe03aa1f164b"],["/resume/assets/images/favicons/apple-touch-icon-60x60.png","fd2bc522dc9e19326c5cffebd8c1fc25"],["/resume/assets/images/favicons/apple-touch-icon-72x72-precomposed.png","c93015a8ceb6cb2b93878113d6a16ac2"],["/resume/assets/images/favicons/apple-touch-icon-72x72.png","79a8f8afb81ff43bbf3950ae32aee75a"],["/resume/assets/images/favicons/apple-touch-icon-76x76-precomposed.png","4f843faf9f5f6e8715122d069a2853f8"],["/resume/assets/images/favicons/apple-touch-icon-76x76.png","70e6bf891e09b8e3f7fa95d028156beb"],["/resume/assets/images/favicons/apple-touch-icon-precomposed.png","41381e0fc6c1fe41313af0cd9545ac54"],["/resume/assets/images/favicons/apple-touch-icon.png","13d63af1ac024f064318f5d08bc0ef45"],["/resume/assets/images/favicons/favicon-16x16.png","abb23c4849223e4f1fccee1178cb15aa"],["/resume/assets/images/favicons/favicon-32x32.png","3fe5a0c060d172ed8b3da1aa874bd46d"],["/resume/assets/images/favicons/mstile-144x144.png","763b4d45d4aeedf6d99340bfda6e5abf"],["/resume/assets/images/favicons/mstile-150x150.png","b8d51873d251b7e034d3a21d747bce4b"],["/resume/assets/images/favicons/mstile-310x150.png","8c6814fa48703604941e894f2fe4d71a"],["/resume/assets/images/favicons/mstile-310x310.png","ade4e10151f60eafe0bc9cc7fcb8865c"],["/resume/assets/images/favicons/mstile-70x70.png","4bca9c9e175837a91aab8c75a4dab982"],["/resume/assets/images/icons/icon-128x128.png","b8d38cdd9c4f82147c93807cac70821d"],["/resume/assets/images/icons/icon-144x144.png","f6e6660d3207447a790fdfae67fed98b"],["/resume/assets/images/icons/icon-152x152.png","dcbce155bf79c57d0df8a8b98e95a5b0"],["/resume/assets/images/icons/icon-192x192.png","8a1c50b54fb01b8fcfb93e2e4293b380"],["/resume/assets/images/icons/icon-384x384.png","c003916c0ecc9afe5474dd54d11caa4d"],["/resume/assets/images/icons/icon-512x512.png","c003916c0ecc9afe5474dd54d11caa4d"],["/resume/assets/images/icons/icon-72x72.png","e3ab3d7b5928c0c06c24eee9380725d7"],["/resume/assets/images/icons/icon-96x96.png","ecb4a9262709a8771b8132a13c0ac664"],["/resume/css/main.css","23edec125bfd7a1e0c7ed6020ce10a15"],["/resume/en/404.html","5f1f4e3ab9d542dbf4f970acb968a4c8"],["/resume/en/about/index.html","09fb7568d26d63184180c768fa81c681"],["/resume/en/index.html","b87089bdc83db823c3403b488d4f011d"],["/resume/en/manifest.json","790e666ce3a8d538e6b80fa1b070f7d7"],["/resume/en/package-lock.json","f2349638df0c68f2e9984513af8434b5"],["/resume/index.html","831dda6d7b8f8aceba996ffcd76f2363"],["/resume/manifest.json","790e666ce3a8d538e6b80fa1b070f7d7"],["/resume/package-lock.json","f2349638df0c68f2e9984513af8434b5"],["/resume/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







