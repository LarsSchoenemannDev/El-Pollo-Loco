/**
 * Represents a small chicken enemy that walks and jumps.
 * @extends MovableObject
 */class SmallChicken extends MovableObject {
    y = 366;
    height = 75;
    width = 70;
    speedY = 0;
    energy = 100;
    lastHit = 0;

    imagesWalking = [
        "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];

    imageDead = [
        "./img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];

    /**
     * Creates a SmallChicken at a randomized position with randomized speed.
     * @param {number} x - Base horizontal position.
     */
    constructor(x) {
        super();
        this.loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageDead);
        this.x = x + 400 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.hitboxOffsetX = 5;
        this.hitboxOffsetY = 5;
        this.hitboxWidth = 50;
        this.hitboxHeight = 40;
        this.animate();
        this.startJumpingInterval();
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
     * Starts the interval that triggers random jumps.
     */
    startJumpingInterval() {
        setInterval(() => {
            this.jumping();
        }, 2000 + Math.random() * 2000);
    }

    /**
     * Initiates a jump if the chicken is alive and not already jumping.
     */
    jumping() {
        if (this.isDead()) return;
        if (this.isJumping) return;
        this.isJumping = true;
        this.y = 366;
        this.velocity = -8;
        this.gravity = 0.5;
        this.applyGravity();
    }

    /**
     * Applies gravity recursively until the chicken lands.
     */
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