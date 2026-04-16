class Endboss extends MovableObject {

    height = 350;
    width = 150;
    y = 90;
    energy = 100;
    lastHit = 0;

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

    imageDead = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png",

    ]

    imageHurt = [
        "img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img/4_enemie_boss_chicken/4_hurt/G23.png"
    ]

    constructor(world) {
        super();
        this.loadImage(this.imagesWalking[0]);
        this.world = world
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageDead);
        this.loadImages(this.imageHurt);
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
            if (this.isDead()) return;
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imageDead);
                return true
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 280)
        setInterval(() => {
            if (this.isDead()) {
                this.isReadyToRemove = true
            }
        }, 1000);

    }

    startJumpingInterval() {
        setInterval(() => {
            this.Jumping()
        }, 1000 + Math.random() * 3400);
    }

    Jumping() {
        if (this.isJumping) return;
        this.isJumping = true;
        this.y = 90;
        this.velocity = -8;
        this.gravity = 0.5;
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



    hit() {
        this.energy -= 20;
        this.playAnimation(this.imageHurt)
        this.world.statusBarImageHealtBoss.setPercentageHealtBoss(this.energy);       
    }

    isDead() {
        return this.energy <= 0;
    }


}