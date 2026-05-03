/**
 * Represents a movable game object with physics and collision logic.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    speed = 0.15;
    movementWalkSpeed = 0.08;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.6;
    energy = 100;
    lastHit = 0;

    /**
     * Applies gravity by reducing y position over time.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 40);
    }

    /**
     * Returns whether the object is above the ground level.
     * @returns {boolean}
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 230;
        }
    }

    /**
     * Plays the next frame of an animation.
     * @param {string[]} images - Array of image paths for the animation.
     */
    playAnimation(images) {
        if (this.currentAnimation !== images) {
            this.currentAnimation = images;
            this.currentImage = 0;
        }
        let i = this.currentImage % images.length;
        this.img = this.imageCache[images[i]];
        this.currentImage++;
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * Makes the object jump by setting vertical speed.
     */
    jump() {
        this.speedY = 20;
    }

    /**
     * Returns the hitbox bounds of a given object.
     * @param {DrawableObject} obj
     * @returns {{x: number, y: number, w: number, h: number}}
     */
    getHitbox(obj) {
        return {
            x: obj.x + (obj.hitboxOffsetX || 0)
            , y: obj.y + (obj.hitboxOffsetY || 0)
            , w: obj.hitboxWidth || obj.width,
            h: obj.hitboxHeight || obj.height
        };
    }

    /**
     * Returns whether this object is colliding with another object.
     * @param {DrawableObject} otherObject
     * @returns {boolean}
     */
    isColliding(otherObject) {
        const enemy = this.getHitbox(otherObject);
        const hitbox = this.getHitbox(this);
        return (hitbox.x < enemy.x + enemy.w && hitbox.x + hitbox.w > enemy.x && hitbox.y < enemy.y + enemy.h && hitbox.y + hitbox.h > enemy.y);
    }

    /**
     * Returns whether this object is landing on top of another object.
     * @param {DrawableObject} otherObject
     * @returns {boolean}
     */
    isCollidingFromTop(otherObject) {
        const o = this.getHitbox(otherObject);
        const hitbox = this.getHitbox(this);
        const selfBottom = hitbox.y + hitbox.h;
        const lastSelfBottom = this.lastY + (this.hitboxOffsetY || 0) + (this.hitboxHeight || this.height);
        const horizontalOverlap = hitbox.x < o.x + o.w && hitbox.x + hitbox.w > o.x;
        const fallingFromAbove = this.speedY < 0 && lastSelfBottom <= o.y && selfBottom >= o.y;
        return horizontalOverlap && fallingFromAbove;
    }

    /**
     * Reduces energy when hurt and plays game end sound if dead.
     */

    hitHurt() {
        this.energy -= 3;
        if (this.energy <= 0) {
            this.energy = 0;
            this.world.audio.play("gameEnd");
        } else {
            this.lastHit = new Date().getTime();
            this.lastAction = new Date().getTime();
        }
    }


    /**
     * Increases coin count and plays coin sound.
     */
    hitCollectCoin() {
        this.coin += 20;
        this.world.audio.play("coin");
    }

    /**
     * Increases bottle count and plays bottle sound.
     */
    hitCollectBottles() {
        this.bottles += 20;
        this.world.audio.play("bottles");
    }

    /**
     * Returns whether the object is dead.
     * @returns {boolean}
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Returns whether the object was recently hurt.
     * @returns {boolean}
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.1;
    }
}