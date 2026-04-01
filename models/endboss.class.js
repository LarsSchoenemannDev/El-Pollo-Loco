class Endboss extends MovableObject {

    height = 350;
    width = 150;
    y = 90

    imagesWalking = [
        "./img/4_enemie_boss_chicken/2_alert/G5.png",
        "./img/4_enemie_boss_chicken/2_alert/G6.png",
        "./img/4_enemie_boss_chicken/2_alert/G7.png",
        "./img/4_enemie_boss_chicken/2_alert/G8.png",
        "./img/4_enemie_boss_chicken/2_alert/G9.png",
        "./img/4_enemie_boss_chicken/2_alert/G10.png",
        "./img/4_enemie_boss_chicken/2_alert/G11.png",
        "./img/4_enemie_boss_chicken/2_alert/G12.png"
    ]
    constructor() {
        super();
        this.loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.x = 2500;
        this.animate();
        this.hitboxOffsetX = +0;
        this.hitboxOffsetY = +80;
        this.hitboxWidth = 130;
        this.hitboxHeight = 260;
        this.startJumpingInterval()

    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesWalking)
        }, 200);
    }
    startJumpingInterval() {
        setInterval(() => {
            this.Jumping()
        }, 1000 + Math.random() *3400);
    }

    Jumping() {
        if (this.isJumping) return;
        this.isJumping = true;     // startus damit kein doppel jump kommt
        this.y = 90;             //start
        this.velocity = -8;       // schritte (sprunghöhe)        
        this.gravity = 0.5;        // schritte runter
        this.applyGravity();
    }

    applyGravity() {
        this.y += this.velocity;
        this.velocity += this.gravity;
        if (this.y >= 90) {
            this.y = 90;
            this.velocity = 0;
            this.isJumping = false;
        } else {
            setTimeout(() => this.applyGravity(), 20);
        }
    }
}