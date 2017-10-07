/* Inicializamos Animaciones */
new WOW().init();

/* Inicializamos Smooth Scroll */
var scroll = new SmoothScroll('a[href*="#"]');

/* Inicializamos Google Analytics */
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-106131459-1');