class Clouds extends MovableObject {

    y = 18
    height = 250;
    width = 430;
    speed = 0.65;

    constructor(spawnX) {
        super();
        this.loadImage("./img/5_background/layers/4_clouds/1.png")        
        this.x = spawnX;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

};
