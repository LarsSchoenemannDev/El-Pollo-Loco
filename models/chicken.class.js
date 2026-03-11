class Chicken extends MovableObject {

    y = 366;
    height = 55
    width = 70
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
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        // this.movementWalk();

    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            let repeate = this.currentImage % this.imagesWalking.length;
            let path = this.imagesWalking[repeate];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }

}
