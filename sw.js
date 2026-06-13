const CACHE_NAME = 'reaper-squat-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'base.png',
  'robe1.png',
  'robe2.png',
  'scythe1.png',
  'badge.png',
  'scythe2.png',
  'crow.png',
  'icon-192.png',
  'icon-512.png'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('アセットをキャッシュ中...');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('古いキャッシュを削除:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// オフライン時はキャッシュからページを返す（ネットワークファースト、失敗したらキャッシュ）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 正常に取得できたらキャッシュを更新して返す
        if (response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, resClone);
          });
        }
        return response;
      })
      .catch(() => {
        // ネットワークエラー（オフラインなど）の時はキャッシュを返す
        return caches.match(event.request);
      })
  );
});