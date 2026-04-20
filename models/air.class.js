/**
 * Represents the air background layer.
 * @extends MovableObject
 */
class Air extends MovableObject {
    x = 0;
    y = 0;
    height = 420;
    width = 720;

    /**
     * Creates an Air instance and loads the background image.
     */
    constructor() {
        super();
        this.loadImage("./img/5_background/layers/air.png");
    }
}