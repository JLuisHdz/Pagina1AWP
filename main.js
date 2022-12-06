if ('serviceWorker' in navigator) {
    console.log('Puede user los sw en tu navegador');
    navigator.serviceWorker.register('./sw.js').then(res => {
        console.log('serviceWroker cargado correctamente', res)
    }).catch(err => {
        console.log('serviceWorker no se ha podido registrar', err)
    });
} else {
    console.log('No puede user los sw en tu navegador');
}