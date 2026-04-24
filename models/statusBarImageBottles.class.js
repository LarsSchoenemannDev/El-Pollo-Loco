/**
 * Represents the bottle status bar UI element.
 * @extends DrawableObject
 */
class StatusBarImageBottle extends DrawableObject {
    imageBottles = [
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png"
    ];

    /**
     * Creates the bottle status bar and sets initial percentage to 0.
     */
    constructor() {
        super();
        this.loadImages(this.imageBottles);
        this.setPercentageBottles(0);
        this.width = 200;
        this.height = 65;
        this.x = 20;
        this.y = 105;
    }

    /**
     * Updates the displayed image based on the given percentage.
     * @param {number} percentage - Current bottle percentage (0-100).
     */
    setPercentageBottles(percentage) {
        this.percentage = percentage;
        let path = this.imageBottles[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the image index corresponding to the current percentage.
     * @returns {number} Index between 0 and 5.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) 
            return 5;
        if (this.percentage >= 80)
             return 4;
        if (this.percentage >= 60) 
            return 3;
        if (this.percentage >= 40) 
            return 2;
        if (this.percentage >= 20) 
            return 1;
        return 0;
    }
}