/**
 * Represents a collectible coin object in the level.
 * @extends DrawableObject
 */
class CoinObject extends DrawableObject {
    x = 40;
    y = 120;

    imageCoin = [
        'img/8_coin/coin_1.png',
    ];

    /**
     * Creates a CoinObject at the given position with a defined hitbox.
     * @param {number} x - Horizontal position.
     * @param {number} y - Vertical position.
     */
    constructor(x, y) {
        super();
        this.loadImage(this.imageCoin);
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.hitboxOffsetX = 25;
        this.hitboxOffsetY = 25;
        this.hitboxWidth = 50;
        this.hitboxHeight = 50;
    }
}