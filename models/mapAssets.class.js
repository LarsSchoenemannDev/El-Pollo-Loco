/**
 * Represents a background layer object.
 * @extends DrawableObject
 */
class MapAssets extends DrawableObject {
    height = 90;
    width = 90;


    /**
     * Creates a MapAssets instance and positions it.
     * @param {string} imagePath - Path to the background image.
     * @param {number} x - Horizontal position.
     * @param {number} y - Vertical position.
     */
    constructor(imagePath, y, x) {
        super();
        this.loadImage(imagePath);
        this.y = y;        
        this.x = x;   
    }
}