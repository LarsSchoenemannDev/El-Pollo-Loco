class MovableObject extends DrawableObject {
    speed = 0.15;
    movementWalkSpeed = 0.10
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;

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


    isColliding(enemy) {
        return this.x + this.width > enemy.x && this.y + this.height > enemy.y &&
            this.x < enemy.x && this.y < enemy.y + enemy.height


    }

    hit() {
        this.energy -= 8;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // diff. in ms
        timepassed = timepassed / 1000; // diff in s
        return timepassed < 3;

    }





}