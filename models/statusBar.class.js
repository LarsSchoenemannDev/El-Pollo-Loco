// class StatusBar extends DrawableObject {





//     percentage = 100

//     constructor() {
//         super();
//         this.loadImages(this.imageHealt);
//         this.loadImages(this.imageBottels);
//         this.loadImages(this.imageCoins);
//         this.setPercentageHealt(100);
//         this.setPercentageCoin(0);
//         this.setPercentageBottel(0);
//         this.width = 200;
//         this.height = 65;
//         this.x = 20;
        
//     }

//     setPercentageHealt(percentage) {
//         let path;
//         this.y = 0;
//         this.percentage = percentage;
//         path = this.imageHealt[this.resolveImageIndex()]
//         this.img = this.imageCache[path];
//     }

//     setPercentageCoin(percentage) {
//         let path;
//         this.y = 20;
//         this.percentage = percentage;
//         path = this.imageCoins[this.resolveImageIndex()]
//         this.img = this.imageCache[path];
//     }

//     setPercentageBottel(percentage) {
//         let path;
//         this.y = 40;
//         this.percentage = percentage;
//         path = this.imageBottels[this.resolveImageIndex()]
//         this.img = this.imageCache[path];
//     }

//     resolveImageIndex() {
//         if (this.percentage === 100) {
//             return 5;
//         } else if (this.percentage > 80) {
//             return 4;
//         } else if (this.percentage > 60) {
//             return 3;
//         } else if (this.percentage > 40) {
//             return 2;
//         } else if (this.percentage > 30) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }