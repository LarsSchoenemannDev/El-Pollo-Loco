class CoinObject extends DrawableObject {

    imageCoin = [
        'img/8_coin/coin_1.png',
    ]

    constructor(x, y) {
        super();
        this.loadImage(this.imageCoin);
        this.y = y;
        this.x = x;
        this.width = 100;
        this.height = 100;
    }

    update() {
        let path = this.imageCoin[this.currentImageIndex];
        this.img = this.imageCache[path];
    }

}