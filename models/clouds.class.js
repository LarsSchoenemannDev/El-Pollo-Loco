/**
 * Represents a cloud that moves across the background.
 * @extends MovableObject
 */
class Clouds extends MovableObject {
    y = 18;
    height = 250;
    width = 430;
    speed = 0.65;

    /**
     * Creates a Clouds instance at the given position and starts movement.
     * @param {number} spawnX - Initial horizontal position.
     */
    constructor(spawnX) {
        super();
        this.loadImage("./img/5_background/layers/4_clouds/1.png");
        this.x = spawnX;
        this.animate();
    }

    /**
     * Moves the cloud continuously to the left at 60fps.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}