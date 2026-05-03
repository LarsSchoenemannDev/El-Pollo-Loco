/**
 * Base class for all drawable game objects.
 */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    height = 140;
    width = 100;

    /**
     * Loads a single image from the given path.
     * @param {string} path - Path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images into the image cache.
     * @param {string[]} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the object onto the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
      * Returns whether this object should have a hitbox drawn.
     * @returns {boolean}
     */
    hasHitbox() {
        return this instanceof Character ||
            this instanceof CoinObject ||
            this instanceof Endboss ||
            this instanceof BottlesObject ||
            this instanceof SmallChicken ||
            this instanceof Chicken ||
            this instanceof ThrowableObject; 
    }

    /**
     * Draws the hitbox rectangle for debugging purposes.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrameHitBox(ctx) {
        if (!this.hasHitbox()) return;
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "blue";
        ctx.strokeRect(
            this.x + this.hitboxOffsetX,
            this.y + this.hitboxOffsetY,
            this.hitboxWidth,
            this.hitboxHeight
        );
        ctx.stroke();
    }
}