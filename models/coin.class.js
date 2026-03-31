class CoinObject extends DrawableObject {

    x = 40;
    y = 120;

    imageCoin = [
        'img/8_coin/coin_1.png',
    ]

    constructor(x, y) {
        super();
        this.loadImage(this.imageCoin);
        this.x = x;
        this.y = y;

        this.width = 100;
        this.height = 100;
        this.hitboxOffsetX = 25;
        this.hitboxOffsetY = 25;
        this.hitboxWidth = 50;
        this.hitboxHeight = 50;
        


    }

    // update() {
    //     let path = this.imageCoin[this.currentImageIndex];
    //     this.img = this.imageCache[path];
    // }


}