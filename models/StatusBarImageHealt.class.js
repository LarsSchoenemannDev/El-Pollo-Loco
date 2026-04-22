/**
 * Represents the health status bar UI element.
 * @extends DrawableObject
 */
class StatusBarImageHealt extends DrawableObject {
    x = 20;

    imageHealt = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png"
    ];

    /**
     * Creates the health status bar and sets initial percentage to 100.
     */
    constructor() {
        super();
        this.loadImages(this.imageHealt);
        this.setPercentageHealt(100);
        this.width = 200;
        this.height = 65;
        this.x = 20;
        this.y = 0;
    }

    /**
     * Updates the displayed image based on the given percentage.
     * @param {number} percentage - Current health percentage (0-100).
     */
    setPercentageHealt(percentage) {        
        this.percentage = percentage;
        let path = this.imageHealt[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the image index corresponding to the current percentage.
     * @returns {number} Index between 0 and 5.
     */
    resolveImageIndex() {
        if (this.percentage === 100) 
            return 5;
        if (this.percentage > 80) 
            return 4;
        if (this.percentage > 60) 
            return 3;
        if (this.percentage > 40)
             return 2;
        if (this.percentage > 30) 
            return 1;
        return 0;
    }
}