class SmallChicken extends MovableObject {

    y = 366;
    height = 55
    width = 70
    speedY = 0;
    energy = 100;
    lastHit = 0;

    imagesWalking = [
        "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ]

    imageDead = [
        "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];

    constructor(x) {
        super();
        this.loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageDead);
        this.x = x + 400 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.hitboxOffsetX = 5;
        this.hitboxOffsetY = 5;
        this.hitboxWidth = 50;
        this.hitboxHeight = 40;
        this.startJumpingInterval();
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

    startJumpingInterval() {
        setInterval(() => {
            this.jumping()
        }, 2000 + Math.random() * 2000);
    }

    jumping() {
        if (this.isDead()) return;
        if (this.isJumping) return;
        this.isJumping = true;
        this.y = 366;
        this.velocity = -8;
        this.gravity = 0.5;
        this.applyGravity();
    }

    applyGravity() {
        this.y += this.velocity;
        this.velocity += this.gravity;
        if (this.y >= 366) {
            this.y = 366;
            this.velocity = 0;
            this.isJumping = false;
        } else {
            setTimeout(() => this.applyGravity(), 20);
        }
    }

    hit() {
        this.energy -= 100;
    }

    isDead() {
        return this.energy <= 0;
    }

}
