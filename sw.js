if ('serviceWorker' in navigator) { 
    window.addEventListener('load', function () { 
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('SW registrado correctamente');    
        }, function(err) {      
            console.log('SW fallo', err);
        });
    });
}