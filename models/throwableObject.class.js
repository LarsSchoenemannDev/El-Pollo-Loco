class ThrowableObject extends MovableObject {

    constructor() {
        super();
        this.x = 100;
        this.y = 100;
        this.loadImage("./img/6_salsa_bottle/salsa_bottle.png");
        this.height = 83;
        this.width = 69;
        this.throw(100, 150)
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30
        this.applyGravity();
        setInterval(() => {
            this.x += 10
        }, 25);
    }
}