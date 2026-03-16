class ThrowableObject extends MovableObject {



    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage("./img/6_salsa_bottle/salsa_bottle.png");
        this.height = 83;
        this.width = 69;
        this.throw();

    }

    throw() {
        this.speedY = 30
        this.applyGravity();
        setInterval(() => {
            this.x += 10
        }, 25);
    }
}