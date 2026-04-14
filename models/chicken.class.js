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
        this.loadImages(this.imageDead);
        this.x = x + 400 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.hitboxOffsetX = 1;
        this.hitboxOffsetY = 1;
        this.hitboxWidth = 70;
        this.hitboxHeight = 50;
    }


    animate() {
        setInterval(() => {
            if (this.isDead()) return;
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imageDead);

            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 200);
        setInterval(() => {
            if (this.isDead()) {
                this.isReadyToRemove = true
            }
        }, 3000)
    }

    hit() {
        this.energy -= 100;
    }

    isDead() {
        return this.energy <= 0;
    }


}
