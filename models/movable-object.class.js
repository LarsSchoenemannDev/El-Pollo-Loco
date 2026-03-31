class MovableObject extends DrawableObject {
    speed = 0.15;
    movementWalkSpeed = 0.10
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;
    coin = 0;
    bottles = 0;

    applyGravity() {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration
        }
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 250;
        }
    }

    playAnimation(images) {
        let repeate = this.currentImage % images.length;
        let path = images[repeate];
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
        return this.x + this.hitboxOffsetX < otherObject.x + otherObject.width &&
            this.x + this.hitboxOffsetX + this.hitboxWidth > otherObject.x &&
            this.y + this.hitboxOffsetY < otherObject.y + otherObject.height &&
            this.y + this.hitboxOffsetY + this.hitboxHeight > otherObject.y
    }



    hitHurt() {
        this.energy -= 8;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitCollectCoin() {
        this.coin += 20;

    }
    hitCollectBottles() {
        this.bottles += 20;

    }


    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 3;

    }





}