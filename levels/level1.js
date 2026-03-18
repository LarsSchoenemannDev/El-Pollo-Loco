const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Clouds(100),
        new Clouds(500),
        new Clouds(720),
        new Clouds(920),
        new Clouds(720 * 2),
        new Clouds(920 * 2),
        new Clouds(720 * 3),
        new Clouds(920 * 3),
    ],
    [
        new BackgroundObjects("/img/5_background/layers/air.png", -720),
        new BackgroundObjects("/img/5_background/layers/3_third_layer/2.png", -720),
        new BackgroundObjects("/img/5_background/layers/2_second_layer/2.png", -720),
        new BackgroundObjects("/img/5_background/layers/1_first_layer/2.png", -720),

        new BackgroundObjects("/img/5_background/layers/air.png", 0),
        new BackgroundObjects("/img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObjects("/img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObjects("/img/5_background/layers/1_first_layer/1.png", 0),

        new BackgroundObjects("/img/5_background/layers/air.png", 720),
        new BackgroundObjects("/img/5_background/layers/3_third_layer/2.png", 720),
        new BackgroundObjects("/img/5_background/layers/2_second_layer/2.png", 720),
        new BackgroundObjects("/img/5_background/layers/1_first_layer/2.png", 720),

        new BackgroundObjects("/img/5_background/layers/air.png", 720 * 2),
        new BackgroundObjects("/img/5_background/layers/3_third_layer/1.png", 720 * 2),
        new BackgroundObjects("/img/5_background/layers/2_second_layer/1.png", 720 * 2),
        new BackgroundObjects("/img/5_background/layers/1_first_layer/1.png", 720 * 2),

        new BackgroundObjects("/img/5_background/layers/air.png", 720 * 3),
        new BackgroundObjects("/img/5_background/layers/3_third_layer/2.png", 720 * 3),
        new BackgroundObjects("/img/5_background/layers/2_second_layer/2.png", 720 * 3),
        new BackgroundObjects("/img/5_background/layers/1_first_layer/2.png", 720 * 3)
    ],
    [
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
    ],
    [
        new BottlesObject(600, 370),
        new BottlesObject(660, 370),

        new BottlesObject(1780, 370),
        new BottlesObject(1830, 370),
        new BottlesObject(1870, 370),
        new BottlesObject(2800, 370),
    ]

);
