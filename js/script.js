Vue.config.devtools = true;

new Vue(
    {
        el: "#app",
        data: {
            arrayImg: [
                "img/image1.jpg",
                "img/image2.jpg",
                "img/image3.jpg",
                "img/image4.jpg"
            ],
            currentPicture: 0,
        },
        created() {
            setInterval(() => {
                this.next();
            }, 3000);
        },
        methods: {
            next: function () {
                if (this.currentPicture === this.arrayImg.length - 1) {
                    this.currentPicture = 0;
                } else {
                    this.currentPicture++;
                }
            },

            prev: function () {
                if (this.currentPicture === 0) {
                    this.currentPicture = this.arrayImg.length - 1;
                } else {
                    this.currentPicture--;
                }
            },

            moveto: function (index) {
                this.currentPicture = index;
            },

            isCurrentDot: function (index) {
                if (this.currentPicture === index) {
                    return "current";
                } else {
                    return "";
                }
            },
        }     
})

console.log();