class StatusBar extends DrawableObject {
    /**
     * @param {string[]} images 
     * @param {number} x
     * @param {number} y
     * @param {number} initialPercentage
     */    
    constructor(images, x, y, initialPercentage = 0) {
        super();
        this.images = images;
        this.width = 200;
        this.height = 65;
        this.x = x;
        this.y = y;
        this.loadImages(this.images);
        this.setPercentage(initialPercentage);
    }

    /**
     * Set the img State of percentage Data State
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        this.img = this.imageCache[this.images[this.resolveImageIndex()]];
    }

    /**
     * 
     * @returns 
     * @param {number}
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5
        };
        if (this.percentage >= 80) {
            return 4
        };
        if (this.percentage >= 60) {
            return 3
        };
        if (this.percentage >= 40) {
            return 2
        };
        if (this.percentage >= 20) {
            return 1
        };
        return 0;
    }
}