/**
 * Represents the coin status bar UI element.
 * @extends DrawableObject
 */
class StatusBarImageCoin extends DrawableObject {
    imageCoins = [
        "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    /**
     * Creates the coin status bar and sets initial percentage to 0.
     */
    constructor() {
        super();
        this.loadImages(this.imageCoins);
        this.setPercentageCoin(0);
        this.width = 200;
        this.height = 65;
        this.x = 20;
        this.y = 50;
    }

    /**
     * Updates the displayed image based on the given percentage.
     * @param {number} percentage - Current coin percentage (0-100).
     */
    setPercentageCoin(percentage) {
        this.percentage = percentage;
        let path = this.imageCoins[this.resolveImageIndex()];
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