class Level {
    enemies;    
    clouds;
    backgroundObjects;
    coins;
    bottles;
    bossArea = 2200;
    levelEndX = 2800;
    levelEnd = 2760;

    constructor(enemies, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;        
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}