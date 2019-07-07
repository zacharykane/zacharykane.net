self.addEventListener('install', event => {
    let urlsToCache = [
        '/',
        '/404.html',
        '/index.html',
        '/css/normalize.css',
        '/css/main.css',
        '/js/main.js',
        'https://use.typekit.net/tmt5fnr.css',
        'https://p.typekit.net/p.css?s=1&k=tmt5fnr&ht=tk&f=24688.24697&a=512511&app=typekit&e=css',
        'https://use.typekit.net/af/36d41c/00000000000000000001587f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3',
        'https://use.typekit.net/af/55bf1d/000000000000000000015888/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3',
    ];
    event.waitUntil(
        caches
            .open('zacharykane-cache-v1')
            .then(cache => cache.addAll(urlsToCache)),
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open('zacharykane-cache-v1').then(cache => {
            return cache
                .match(event.request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request)
                        .then(response => {
                            cache.put(event.request, response.clone());
                            return response;
                        })
                        .catch(() => {
                            console.error('error fetching');
                            cache.match('/404.html');
                        });
                })
                .catch(err => {
                    console.error('match failed.', err);
                    return caches.match('/');
                });
        }),
    );
});
