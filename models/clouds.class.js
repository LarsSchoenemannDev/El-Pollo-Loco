class Clouds extends MovableObject {

    x = 10;
    y = 0;
    height = 320
    width = 700

    constructor() {
        super().loadImage("./img/5_background/layers/4_clouds/1.png")
        this.x = 200 + Math.random();        
        this.movementWalk()        
    }
};
