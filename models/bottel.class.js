class BottlesObject extends DrawableObject {
    imageBottle = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',        
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
    }


    displayImage() {
        let path = this.imageBottle[this.currentImageIndex];
        this.img = this.imageCache[path];
    }


}