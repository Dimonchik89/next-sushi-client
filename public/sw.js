if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/141-86e1f337ec643e78.js",revision:"86e1f337ec643e78"},{url:"/_next/static/chunks/368-302e0a9c95c8eb10.js",revision:"302e0a9c95c8eb10"},{url:"/_next/static/chunks/472-1b58fbb26ed7e4c6.js",revision:"1b58fbb26ed7e4c6"},{url:"/_next/static/chunks/576-d10de9486aae9eab.js",revision:"d10de9486aae9eab"},{url:"/_next/static/chunks/615-b7fcb348635016fb.js",revision:"b7fcb348635016fb"},{url:"/_next/static/chunks/framework-b3802df6cb251587.js",revision:"b3802df6cb251587"},{url:"/_next/static/chunks/main-7fe068ecd807bc11.js",revision:"7fe068ecd807bc11"},{url:"/_next/static/chunks/pages/404-8aa76dd6eb7e3931.js",revision:"8aa76dd6eb7e3931"},{url:"/_next/static/chunks/pages/_app-50a9f1b806905e22.js",revision:"50a9f1b806905e22"},{url:"/_next/static/chunks/pages/_error-a51993fe870ec2c8.js",revision:"a51993fe870ec2c8"},{url:"/_next/static/chunks/pages/admin-03a35db56278ad12.js",revision:"03a35db56278ad12"},{url:"/_next/static/chunks/pages/index-470ade5d4c9ce785.js",revision:"470ade5d4c9ce785"},{url:"/_next/static/chunks/pages/login-df401325daa53773.js",revision:"df401325daa53773"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/css/64e4e73cff82bac0.css",revision:"64e4e73cff82bac0"},{url:"/_next/static/css/81fb92f106a660ab.css",revision:"81fb92f106a660ab"},{url:"/_next/static/css/b45b71f711c35f02.css",revision:"b45b71f711c35f02"},{url:"/_next/static/lBzAHbz0JvixXxUjJHQUd/_buildManifest.js",revision:"3a61819535c9ce1dc27b1a487a52235b"},{url:"/_next/static/lBzAHbz0JvixXxUjJHQUd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Lato-Bold.39d410a3.ttf",revision:"39d410a3"},{url:"/_next/static/media/Lato-ExtraBold.b61408ac.ttf",revision:"b61408ac"},{url:"/_next/static/media/Lato-Medium.f83c629f.ttf",revision:"f83c629f"},{url:"/_next/static/media/Lato-Regular.45dbaed0.ttf",revision:"45dbaed0"},{url:"/_next/static/media/clock.39aa632e.png",revision:"9b1378a72ed00e7a2bf0cfae7d4d29c6"},{url:"/_next/static/media/delivery.c77a047c.png",revision:"645b754711bd7c44ec9e4bdb1980fb99"},{url:"/_next/static/media/discount.0ef758af.png",revision:"5df1e41459fdea559fc17ed2aa03094f"},{url:"/_next/static/media/home_left.58c749e5.png",revision:"13a4e1413102b8c438f63b8464c458cb"},{url:"/_next/static/media/home_right.37fef255.png",revision:"ce93cd39cc6158822c6f4c3e23f11885"},{url:"/_next/static/media/location.0c1b466f.png",revision:"48cda922a75a34d8445621e75527ccec"},{url:"/_next/static/media/logo.7444b894.png",revision:"f3f1449d33b4ee39b734af274f250f6a"},{url:"/_next/static/media/main.829839d3.jpg",revision:"829839d3"},{url:"/_next/static/media/main_320.832ae7b2.png",revision:"832ae7b2"},{url:"/_next/static/media/main_480.c3340368.png",revision:"c3340368"},{url:"/_next/static/media/main_600.35e0bd07.png",revision:"35e0bd07"},{url:"/_next/static/media/main_834.35b0b206.png",revision:"35b0b206"},{url:"/_next/static/media/message.e2295828.png",revision:"67617067b9d2f07b026052f6fe959543"},{url:"/_next/static/media/phone.f1e65e5f.png",revision:"69a9f6362facd926690dd4b7084ba7e6"},{url:"/_next/static/media/review-photo.34612f0e.png",revision:"32893e527554c9cf7dfd130c7a268652"},{url:"/_next/static/media/sushi_icon.1348f6d2.png",revision:"34563ece0267bea0d44d07a8b678a155"},{url:"/_next/static/media/time_bg.b254c881.jpg",revision:"b254c881"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"a4ed0e5ea450962edc41b1f5a84f3aee"},{url:"/icon-256x256.png",revision:"9dc5ce059f9bc10cc8982463c1677d2e"},{url:"/icon-384x384.png",revision:"dfd3a9cae8bfaed0f87e2cb9d705012a"},{url:"/icon-512x512.png",revision:"903c3767b1f3f059569e0d95c418e89c"},{url:"/manifest.webmanifest.json",revision:"5d7ea0f4bc7b2ec010e61fb9dc29994c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
