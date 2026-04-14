class MovableObject extends DrawableObject {
    speed = 0.15;
    movementWalkSpeed = 0.10
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;
    coin = 0;
    bottles = 1000;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y <= 250;
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = false
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    jump() {
        this.speedY = 30;
    }

    isColliding(otherObject) {
            const otherX = otherObject.x + (otherObject.hitboxOffsetX || 0);
            const otherY = otherObject.y + (otherObject.hitboxOffsetY || 0);
            const otherW = otherObject.hitboxWidth || otherObject.width;
            const otherH = otherObject.hitboxHeight || otherObject.height;
            const selfX = this.x + (this.hitboxOffsetX || 0);
            const selfY = this.y + (this.hitboxOffsetY || 0);
            const selfW = this.hitboxWidth || this.width;
            const selfH = this.hitboxHeight || this.height;            
            return (
                selfX < otherX + otherW &&
                selfX + selfW > otherX &&
                selfY < otherY + otherH &&
                selfY + selfH > otherY
            );        
    }

    hitHurt() {
        this.energy -= 3;
        if (this.energy <= 0) {
            this.energy = 0;
            this.world.audio.play("gameEnd");
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitCollectCoin() {
        this.coin += 20;
        this.world.audio.play("coin");
    }

    hitCollectBottles() {
        this.bottles += 20;
        this.world.audio.play("bottles");
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.2;
    }
}