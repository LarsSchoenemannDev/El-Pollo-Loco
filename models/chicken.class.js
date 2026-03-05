class Chicken extends MovableObject {

    x = 0;
    y = 300;
    height = 120
    width = 80
    imagesWalking = [
        "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ]


    constructor() {
        super();
        this.loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.x = 400 + Math.random() * 300;
        this.animate();
        this.movementWalk();

    }


    animate() {
        setInterval(() => {
            let repeate = this.currentImage % this.imagesWalking.length;
            let path = this.imagesWalking[repeate];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 350);
    }

}
