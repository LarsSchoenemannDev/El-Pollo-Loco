class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 140
    width = 100
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    movementWalkSpeed = 0.10
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;

    applyGravity() {
        setInterval(() => {
            if (this.isAbouveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 25);
    }

    isAbouveGround() {
        return this.y < 220;
    }

    // LoadImage ("img/test.png")
    loadImage(path) {
        this.img = new Image(); // this.img = documen.getElementById("image") <img id="img"> src>
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    playAnimation(images) {
        let repeate = this.currentImage % this.imagesWalking.length;
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

    // Collision 
    // charcter is colliding chicken
    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y &&
            this.x < mo.x && this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 8;
        if (this.energy <= 0) {
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
    }







}