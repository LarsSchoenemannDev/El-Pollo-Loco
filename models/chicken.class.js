/**
 * Represents a normal chicken enemy.
 * @extends MovableObject
 */
class Chicken extends MovableObject {
    y = 366;
    height = 70;
    width = 70;
    energy = 100;
    lastHit = 0;

    imagesWalking = [
        "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ];

    imageDead = [
        "./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
    ];

    /**
     * Creates a Chicken instance at a randomized position with randomized speed.
     * @param {number} x - Base horizontal position.
     */
    constructor(x) {
        super();
        this.loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageDead);
        this.x = x + 400 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.hitboxOffsetX = 0;
        this.hitboxOffsetY = 0;
        this.hitboxWidth = 70;
        this.hitboxHeight = 50;
    }

    /**
     * Starts all animation intervals for movement, frames and removal.
     */
    animate() {
        this.startMovementLoop();
        this.startFrameLoop();
        this.startRemovalLoop();
    }

    /**
     * Moves the chicken left at 60fps unless dead.
     */
    startMovementLoop() {
        setInterval(() => {
            if (this.isDead()) return;
            this.moveLeft();
        }, 1000 / 60);
    }

    /**
     * Updates the animation frame based on alive or dead state.
     */
    startFrameLoop() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imageDead);
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 200);
    }

    /**
     * Marks the chicken for removal after the death animation completes.
     */
    startRemovalLoop() {
        setInterval(() => {
            if (this.isDead()) {
                this.isReadyToRemove = true;
            }
        }, 3000);
    }

    /**
     * Reduces energy to zero, killing the chicken instantly.
     */
    hit() {
        this.energy -= 100;
    }

    /**
     * Returns whether the chicken is dead.
     * @returns {boolean}
     */
    isDead() {
        return this.energy <= 0;
    }
}