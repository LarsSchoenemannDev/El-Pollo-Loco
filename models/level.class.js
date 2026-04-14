class Level {
    enemies;    
    clouds;
    backgroundObjects;
    coins;
    bottles;
    bossArea = 1800;
    levelEndX = 2200;
    levelEnd = 2760;

    constructor(enemies, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;        
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}