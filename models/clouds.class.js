class Clouds extends MovableObject {

    y = 22
    height = 250;
    width = 500;
    speed = 0.65;

    constructor() {
        super()
        this.loadImage("./img/5_background/layers/4_clouds/1.png")
        this.x = Math.random() * 500;
        this.moveLeft();

    }
    animate() {
        this.moveLeft();
    }

};
