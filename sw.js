const CACHE_NAME="atlas-event-calendar-v7";
const ASSETS=[
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-180.png",
  "./assets/atlas-logo.png",
  "./assets/kk-star.png",
  "./assets/moment-handshake.jpg",
  "./assets/moment-stage.jpg",
  "./assets/moment-vegas.jpg",
  "./assets/moment-call.jpg",
  "./assets/moment-panel.jpg",
  "./assets/moment-work.jpg",
  "./assets/background-supply-chain.jpg",
  "./assets/fonts/manrope-regular.otf",
  "./assets/fonts/manrope-semibold.otf",
  "./assets/fonts/manrope-bold.otf"
];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

function networkFirst(request){
  return fetch(request).then(response=>{
    if(response.ok){
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache=>cache.put(request,copy));
    }
    return response;
  }).catch(()=>caches.match(request).then(cached=>cached||new Response("Offline",{status:503,statusText:"Offline"})));
}

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  const filename=url.pathname.split("/").pop();
  const fresh=event.request.mode==="navigate"||["index.html","app.js","styles.css","events.json"].includes(filename);
  if(fresh){
    event.respondWith(networkFirst(event.request));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok){
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
    }
    return response;
  })));
});
