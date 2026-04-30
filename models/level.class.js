/**
 * Represents a game level with all its objects.
 */
class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    bossArea = 1800;
    levelEndX = 2200;
    levelEnd = 2760;
    mapAssets;

    /**
     * Creates a Level instance with all game objects.
     * @param {MovableObject[]} enemies - Array of enemy instances.
     * @param {Clouds[]} clouds - Array of cloud instances.
     * @param {BackgroundObjects[]} backgroundObjects - Array of background layer instances.
     * @param {CoinObject[]} coins - Array of coin instances.
     * @param {BottlesObject[]} bottles - Array of bottle instances.
     * @param {mapAssets[]} mapAssets, Array of mapAssets
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottles, mapAssets) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.mapAssets = mapAssets;
    }
}