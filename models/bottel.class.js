class BottlesObject extends DrawableObject {
    imageBottle = [
        "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    ];


    currentImageIndex = 0;

    constructor(x, y) {
        super();
        this.loadImages(this.imageBottle);
        this.y = y;
        this.x = x;
        this.width = 70;
        this.height = 100;
        this.displayImage();
        this.hitboxOffsetX = 25;
        this.hitboxOffsetY = 25;
        this.hitboxWidth = 50;
        this.hitboxHeight = 50;
    }


    displayImage() {
        let path = this.imageBottle[this.currentImageIndex];
        this.img = this.imageCache[path];
    }


}