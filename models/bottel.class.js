/**
 * Represents a collectible salsa bottle on the ground.
 * @extends DrawableObject
 */
class BottlesObject extends DrawableObject {
    imageBottle = [
        "./img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    ];
    currentImageIndex = 0;

    /**
     * Creates a BottlesObject and sets its position and hitbox.
     * @param {number} x - Horizontal position.
     * @param {number} y - Vertical position.
     */
    constructor(x, y) {
        super();
        this.loadImages(this.imageBottle);
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 100;
        this.displayImage();
        this.hitboxOffsetX = 25;
        this.hitboxOffsetY = 25;
        this.hitboxWidth = 50;
        this.hitboxHeight = 50;
    }

    /**
     * Sets the current image from the image cache.
     */
    displayImage() {
        let path = this.imageBottle[this.currentImageIndex];
        this.img = this.imageCache[path];
    }
}