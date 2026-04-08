class Chicken extends MovableObject {

    y = 366;
    height = 55
    width = 70
    energy = 100;
    lastHit = 0;
    
    imagesWalking = [
        "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ]

    imageDead = [
        "img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
    ];

    constructor(x) {
        super();
        this.loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.loadImage(this.imageDead);
        this.x = x + 400 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.hitboxOffsetX = 25;
        this.hitboxOffsetY = 25;
        this.hitboxWidth = 50;
        this.hitboxHeight = 50;
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.imagesWalking)
        }, 200);
    }

}
