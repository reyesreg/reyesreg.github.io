"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","6c8cd22ba05f839c0c4b650778dfa08d"],["static/css/main.2067bbdf.css","c3789c9cfaabf176765dc1b102ecc43e"],["static/js/main.779542d4.js","d3e2f0d6ccde5aa7894e83e847ed6e11"],["static/media/bg1.439bff79.jpg","439bff79eaa667c11cfcfcc62c59b0fb"],["static/media/bg2.060420dc.jpg","060420dc96f16ce47585a96b3f60e9a6"],["static/media/bg3.3e44b91a.jpg","3e44b91abb221cc541861b845e4f413a"],["static/media/bg4.f2539957.jpg","f253995723ae5de3d0c5a5868d25d990"],["static/media/diamond.2fe6d79f.svg","2fe6d79fbf3c9a8728a876c7fe69f185"],["static/media/fb.794eef1d.svg","794eef1de750390e80ffd3b7076aa780"],["static/media/github.aa905ac2.svg","aa905ac203f64ae231e0c2c71921e962"],["static/media/hack1.53ee812a.jpg","53ee812a86359f66bf0830070f86f340"],["static/media/hack2.3bb9f723.jpg","3bb9f72324e12c42c64904631e552807"],["static/media/hack3.a6a14a7e.jpg","a6a14a7ebe9e504a49268cf7d666d5b4"],["static/media/hack4.1e701a03.jpg","1e701a031e8230ced41feb466b433ac0"],["static/media/hack5.dc0dae65.jpg","dc0dae6576106a79e349ad4e3d9e956e"],["static/media/insta.396871cc.svg","396871cc6708b11a2f8a4ef319a299b7"],["static/media/pic1.31cb0c23.jpg","31cb0c2301b43b732b4be6bcc0aa9f18"],["static/media/pic2.9ed16eac.jpg","9ed16eac577dccd9cf51d4cb61cc6a11"],["static/media/pic3.feb3cad4.jpg","feb3cad4a5d00a832650ffefa0af3635"],["static/media/pic4.8c4d36fd.jpg","8c4d36fde61061ea788569a92d97c20d"],["static/media/pic5.44be7fb2.jpg","44be7fb27a4b1c7949d8a53efce48f7d"],["static/media/pic6.5da9d43b.jpg","5da9d43bee5dcf37f5b07850e49ba731"],["static/media/pic7.3c1ddf09.jpg","3c1ddf09c3eadf9a8a5b1449991a0218"],["static/media/pic8.4895b59d.jpg","4895b59d3342e000802ea470ff540f38"],["static/media/project1.22fc92ce.jpg","22fc92ce954ff6e404862f1200096d6a"],["static/media/project2.5365f9b6.jpg","5365f9b65f871f969b6a79fda4fa83e9"],["static/media/project3.d7e27ee8.jpg","d7e27ee813d384737750595f7ed50807"],["static/media/project4.8cb60c3c.jpg","8cb60c3cd12d960468aa9baf33ccae55"],["static/media/selfie.71b74a69.jpg","71b74a697167767dcf7b241b3a5b9a37"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});