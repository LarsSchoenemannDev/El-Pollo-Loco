/**
 * Represents a throwable salsa bottle projectile.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
    bottleImg = ["./img/6_salsa_bottle/salsa_bottle.png"];

    bottleImgSplash = [
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png"
    ];

    bottlethrow = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];

    bottleImgSplashGround = [
        "img/6_salsa_bottle/bottle_splash_ground/bottle1.png",
        "img/6_salsa_bottle/bottle_splash_ground/bottle2.png",
        "img/6_salsa_bottle/bottle_splash_ground/bottle3.png",
        "img/6_salsa_bottle/bottle_splash_ground/bottle4.png",
        "img/6_salsa_bottle/bottle_splash_ground/bottle5.png",
        "img/6_salsa_bottle/bottle_splash_ground/bottle6.png"
    ];

    /**
     * Creates a ThrowableObject at the given position.
     * @param {number} x - Horizontal start position.
     * @param {number} y - Vertical start position.
     * @param {boolean} facingLeft - Whether the bottle is thrown to the left.
     */
    constructor(x, y, facingLeft) {
        super();
        this.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.bottleImg);
        this.loadImages(this.bottleImgSplash);
        this.loadImages(this.bottlethrow);
        this.loadImages(this.bottleImgSplashGround)
        this.x = x;
        this.y = y;
        this.width = 69;
        this.height = 83;
        this.otherDirection = facingLeft;
        this.speedX = facingLeft ? -8 : 8;
        this.speedY = -15;
        this.gravity = 0.8;
        this.isThrown = false;
        this.isSplashing = false;
        this.splashingGround = false;
        // this.lastHit = false;
        this.animate();
    }

    /**
     * Updates the bottle's position based on speed and gravity.
     */
    move() {
        if (this.isThrown && !this.isSplashing) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY += this.gravity;
        }
    }

    /**
     * Returns whether the bottle is colliding with another object.
     * @param {DrawableObject} otherObject
     * @returns {boolean}
     */
    isCollidingBottle(otherObject) {
        return (
            this.x < otherObject.x + otherObject.width &&
            this.x + this.width > otherObject.x &&
            this.y < otherObject.y + otherObject.height &&
            this.y + this.height > otherObject.y
        );
    }

    // /**
    //  * Plays the rotation or splash animation based on current state.
    //  */
    animate() {
        setInterval(() => {
            if (this.isThrown && !this.isSplashing) {
                this.playAnimation(this.bottlethrow);
            } if (this.isSplashing) {
                this.playAnimation(this.bottleImgSplashGround);
            }
        }, 1000 / 20);
    }


    /**
     * Activates the throwing state.
     */
    throw() {
        this.isThrown = true;
    }

    /**
     * Switches from thrown to splash animation state.
     */
    playSplashAnimation() {
        this.isSplashing = true;
        this.isThrown = false;


    }
}