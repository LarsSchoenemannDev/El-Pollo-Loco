/**
 * Represents a background layer object.
 * @extends MovableObject
 */
class BackgroundObjects extends MovableObject {
    height = 480;
    width = 720;

    /**
     * Creates a BackgroundObjects instance and positions it.
     * @param {string} imagePath - Path to the background image.
     * @param {number} x - Horizontal position.
     */
    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}