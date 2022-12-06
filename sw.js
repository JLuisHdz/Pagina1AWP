self.addEventListener('install', e => {
    caches.open('cache-v1')
        .then( cache => cache.addAll ([
            'index.html',
            './img/logou.jpg',
            'img/1p.jpg',
            'img/1s.jpg',
            'img/1u.jpg',
            'css/styles.css',
            'js/main.js',
            'main.js',
            'sw.js'
        ]));
        e.waitUntil(cacheProm);
});

self.addEventListener('fetch', e =>{
    //cache with network fallback
    const respuesta = caches.match( e.request )
        .then ( res => {
            if ( res ) return res;
            //no existe el archivo
            //tengo que ir a la web
            console.log('No existe', e.request.url);
            return fetch( e.request ).then ( newResp => {
                caches.open('cache-v1')
                    .then( cache => {
                        cache.put( e.request, newResp);
                    }

                    )
                return newResp.clone;
            });
        });
        e.respondWith(respuesta);
    //only cache
    //e.respondWith( caches.match(e.request));
});