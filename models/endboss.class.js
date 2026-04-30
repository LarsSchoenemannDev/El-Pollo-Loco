/**
 * Represents the end boss enemy.
 * @extends MovableObject
 */
class Endboss extends MovableObject {
    height = 350;
    width = 190;
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
    ];

    imageDead = [
        "./img/4_enemie_boss_chicken/5_dead/G24.png",
        "./img/4_enemie_boss_chicken/5_dead/G25.png",
        "./img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    imageHurt = [
        "./img/4_enemie_boss_chicken/4_hurt/G21.png",
        "./img/4_enemie_boss_chicken/4_hurt/G22.png",
        "./img/4_enemie_boss_chicken/4_hurt/G23.png"
    ];

    /**
     * Creates an Endboss instance and starts all animation loops.
     * @param {World} world - The game world instance.
     */
    constructor(world) {
        super();
        this.loadImage(this.imagesWalking[0]);
        this.world = world;
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageDead);
        this.loadImages(this.imageHurt);
        this.x = 2500;
        this.hitboxOffsetX = 20;
        this.hitboxOffsetY = 80;
        this.hitboxWidth = 110;
        this.hitboxHeight = 260;
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
     * Moves the endboss left at 60fps unless dead.
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
                setTimeout(() => {
                    winLoseModal()
                }, 750);
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 280);
    }

    /**
     * Marks the endboss for removal after death animation completes.
     */
    startRemovalLoop() {
        setInterval(() => {
            if (this.isDead()) {
                this.isReadyToRemove = true;
            }
        }, 1000);
    }

    /**
     * Starts the interval that triggers random jumps.
     */
    startJumpingInterval() {
        setInterval(() => {
            this.jumping();
        }, 1000 + Math.random() * 3400);
    }

    /**
     * Initiates a jump if the endboss is not already jumping.
     */
    jumping() {
        if (this.isJumping) return;
        this.isJumping = true;
        this.y = 90;
        this.velocity = -8;
        this.gravity = 0.5;
        this.applyGravity();
    }

    /**
     * Applies gravity to the endboss recursively until it lands.
     */
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

    /**
     * Reduces endboss energy and updates the boss health bar.
     */
    hit() {
        this.energy -= 20;
        this.world.statusBarImageHealtBoss.setPercentage(this.energy);
        this.playAnimation(this.imageHurt);
    }

    /**
     * Returns whether the endboss is dead.
     * @returns {boolean}
     */
    isDead() {
        return this.energy <= 0;
    }
}