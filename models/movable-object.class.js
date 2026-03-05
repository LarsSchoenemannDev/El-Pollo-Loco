class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 140
    width = 100
    imageCache = {};
    currentImage = 0;
    movementWalkSpeed = 0.10

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

    movementWalk() {
        setInterval(() => {
            this.x -= 0.10 + Math.random() * 0.25;
        }), 800 / 60;
        // this.loadImage.forEach(img => {
        //     img."./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
        //     img."./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"
        //     img."./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
        // });
    }

    moveRight() {
    }
}