/**
 * Represents the endboss health status bar UI element.
 * @extends DrawableObject
 */
class StatusBarImageHealtBoss extends DrawableObject {
    imageHealtBoss = [
        "img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange100.png"
    ];

    /**
     * Creates the endboss health status bar and sets initial percentage to 100.
     */
    constructor() {
        super();
        this.loadImages(this.imageHealtBoss);
        this.setPercentageHealtBoss(100);
        this.width = 200;
        this.height = 65;
        this.x = 490;
        this.y = 0;
    }

    /**
     * Updates the displayed image based on the given percentage.
     * @param {number} percentage - Current boss health percentage (0-100).
     */
    setPercentageHealtBoss(percentage) {
        this.y = 0;
        this.percentage = percentage;
        let path = this.imageHealtBoss[this.resolveImageIndex()];
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