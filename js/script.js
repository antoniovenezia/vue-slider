//In data inserire una lista di url di immagini.
//Nell’html visualizzare tutte queste immagini, una dopo l’altra.


Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            arrayImg: [
                "img/image1.jpg",
                "img/image2.jpg",
                "img/image3.jpg",
                "img/image4.jpg"
            ],
        },
    });

console.log();