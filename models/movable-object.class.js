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

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }

    moveRight() {
    }
}