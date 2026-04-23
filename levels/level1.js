/**
 * Initializes level 1 with all enemies, clouds, backgrounds, coins and bottles.
 */
function initLevel1() {
    level1 = new Level(
        createEnemies(),
        createClouds(),
        createBackgrounds(),
        createCoins(),
        createBottles()
    );
}

/**
 * Creates the enemies for level 1.
 * @returns {Array} Array of enemy instances.
 */
function createEnemies() {
    return [
        new SmallChicken(50),
        new Chicken(400),
        new Chicken(300),
        new Chicken(180),
        new Chicken(1440),
        new Endboss(),
        new SmallChicken(750),
        new SmallChicken(860),
        new SmallChicken(990),
    ];
}

/**
 * Creates the clouds for level 1.
 * @returns {Array} Array of Clouds instances.
 */
function createClouds() {
    return [
        new Clouds(100),
        new Clouds(500),
        new Clouds(720),
        new Clouds(920),
        new Clouds(720 * 2),
        new Clouds(920 * 2),
        new Clouds(720 * 3),
        new Clouds(920 * 3),
    ];
}

/**
 * Creates the background objects for level 1.
 * @returns {Array} Array of BackgroundObjects instances.
 */
function createBackgrounds() {
    return [
        new BackgroundObjects("./img/5_background/layers/air.png", -720),
        new BackgroundObjects("./img/5_background/layers/3_third_layer/2.png", -720),
        new BackgroundObjects("./img/5_background/layers/2_second_layer/2.png", -720),
        new BackgroundObjects("./img/5_background/layers/1_first_layer/2.png", -720),
        new BackgroundObjects("./img/5_background/layers/air.png", 0),
        new BackgroundObjects("./img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObjects("./img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObjects("./img/5_background/layers/1_first_layer/1.png", 0),
        new BackgroundObjects("./img/5_background/layers/air.png", 720),
        new BackgroundObjects("./img/5_background/layers/3_third_layer/2.png", 720),
        new BackgroundObjects("./img/5_background/layers/2_second_layer/2.png", 720),
        new BackgroundObjects("./img/5_background/layers/1_first_layer/2.png", 720),
        new BackgroundObjects("./img/5_background/layers/air.png", 720 * 2),
        new BackgroundObjects("./img/5_background/layers/3_third_layer/1.png", 720 * 2),
        new BackgroundObjects("./img/5_background/layers/2_second_layer/1.png", 720 * 2),
        new BackgroundObjects("./img/5_background/layers/1_first_layer/1.png", 720 * 2),
        new BackgroundObjects("./img/5_background/layers/air.png", 720 * 3),
        new BackgroundObjects("./img/5_background/layers/3_third_layer/2.png", 720 * 3),
        new BackgroundObjects("./img/5_background/layers/2_second_layer/2.png", 720 * 3),
        new BackgroundObjects("./img/5_background/layers/1_first_layer/2.png", 720 * 3),
    ];
}

/**
 * Creates the coin objects for level 1.
 * @returns {Array} Array of CoinObject instances.
 */
function createCoins() {
    return [
        new CoinObject(280, 260),
        new CoinObject(647, 220),
        new CoinObject(900, 180),
        new CoinObject(1000, 140),
        new CoinObject(1100, 180),
        new CoinObject(1500, 200),
        new CoinObject(1600, 160),
        new CoinObject(1700, 120),
        new CoinObject(1800, 160),
        new CoinObject(1900, 200),
        new CoinObject(2000, 220),
    ];
}

/**
 * Creates the bottle objects for level 1.
 * @returns {Array} Array of BottlesObject instances.
 */
function createBottles() {
    return [
        new BottlesObject(600, 360),
        new BottlesObject(1240, 360),
        new BottlesObject(1280, 360),
        new BottlesObject(1780, 360),
        new BottlesObject(1830, 360),
        new BottlesObject(1870, 360),
        new BottlesObject(2180, 360),
    ];
}

