/**
 * Represents an egg projectile shot by the endboss.
 * @extends ThrowableObject
 */
class BossEgg extends ThrowableObject {
    height = 42;
    width = 42;

    eggImg = [
        "img/4_enemie_boss_chicken/egg/egg1.png",
        "img/4_enemie_boss_chicken/egg/egg2.png",
        "img/4_enemie_boss_chicken/egg/egg3.png",
        "img/4_enemie_boss_chicken/egg/egg4.png",
        "img/4_enemie_boss_chicken/egg/egg5.png",
        "img/4_enemie_boss_chicken/egg/egg6.png",
    ];

    /**
     * Creates a BossEgg at the endboss position moving toward the character.
     * @param {number} x - Start x position.
     * @param {number} y - Start y position.
     */
    constructor(x, y) {
        super(x, y, false);
        this.loadImage(this.eggImg[0]);
        this.loadImages(this.eggImg);
        this.speedX = -8;
        this.speedY = -10;
        this.gravity = 0.6;
        this.isThrown = true;
        this.hitboxOffsetX = 0;
        this.hitboxOffsetY = 0;
        this.animate();
    }

    /**
     * Plays egg animation in a loop.
     */
    animate() {
        setInterval(() => {
            if (!this.isSplashing) {
                this.playAnimation(this.eggImg);
            } else {
                this.playAnimation(this.bottleImgSplash);
            }
        }, 50);
    }
}

