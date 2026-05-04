/**
 * Represents the game world and manages all game logic.
 */
class World {
    level = level1;
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    statusBarImageHealt = new StatusBarHealth();
    statusBarImageCoin = new StatusBarCoin();
    statusBarImageBottel = new StatusBarBottle();
    statusBarImageHealtBoss = new StatusBarBoss();
    ThrowableObject = [];

    /**
     * Creates the World instance and starts the game loop.
     * @param {HTMLCanvasElement} canvas - The game canvas.
     * @param {Keyboard} keyboard - The keyboard input instance.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.character = new Character(this);
        this.endboss = new Endboss(this);
        this.bossEggs = [];
        this.checkBossEggCollisions();
        this.audio = new AudioObject();
        this.setWorld();
        this.draw();
        this.run();
    }

    /**
     * Starts the main game loop at 60fps.
     */
    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisionsCoin();
            this.checkCollisionsBottles();
            this.ThrowableObject.forEach(bottle => bottle.move());
            this.checkCollisionsThrowableObject();
            this.checkBossEggCollisions();
            this.bossLayout();
            this.ThrowableObject.forEach(bottle => bottle.animate());
            this.level.enemies = this.level.enemies.filter(enemy => !enemy.isReadyToRemove);
        }, 1000 / 60);
        setInterval(()=>{
            this.character.animateFrame();
        },100);

    }

    /**
     * Activates the boss fight when the character reaches the boss area.
     */
    bossLayout() {
        if (!this.bossFightActive && this.character.x >= this.level.bossArea) {
            this.bossFightActive = true;
        }
    }

    /**
     * Checks collisions between the character and all enemies.
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (enemy.isDead && enemy.isDead()) return;
            if (this.character.isCollidingFromTop(enemy)) {
                enemy.hit();
                this.character.speedY = 20;
            } else if (this.character.isColliding(enemy)) {
                this.character.hitHurt();
            }
        });
        this.statusBarImageHealt.setPercentage(this.character.energy);
    }

    /**
     * Checks collisions between the character and coins.
     */
    checkCollisionsCoin() {
        this.level.coins.forEach((coinCollect, i) => {
            if (this.character.isColliding(coinCollect)) {
                this.level.coins.splice(i, 1);
                this.character.hitCollectCoin();
                this.statusBarImageCoin.setPercentage(this.character.coin);
            }
        });
    }

    /**
     * Checks collisions between the character and bottles on the ground.
     */
    checkCollisionsBottles() {
        this.level.bottles.forEach((bottlesCollect, i) => {
            if (this.character.isColliding(bottlesCollect)) {
                this.level.bottles.splice(i, 1);
                this.character.hitCollectBottles();
                this.statusBarImageBottel.setPercentage(this.character.bottles);
            }
        });
    }

    /**
     * Returns whether a thrown bottle has hit an enemy.
     * @param {ThrowableObject} bottle
     * @returns {boolean}
     */
    checkBottleEnemyHit(bottle) {
        let hitEnemy = false;
        this.level.enemies.forEach((otherObject) => {
            if (!bottle.hasHit && bottle.isColliding(otherObject)) {
                otherObject.hit();
                bottle.playSplashAnimation();
                bottle.hasHit = true;
                bottle.hitType = 'enemy'; 
                this.audio.play("bottlesSplashEnemy");
            }
        });
        return hitEnemy;
    }

    /**
     * Returns whether a splashing bottle should be kept in the array.
     * @param {ThrowableObject} bottle
     * @returns {boolean}
     */
    handleSplashingBottle(bottle) {
        if (!bottle.splashTimer) {
            bottle.splashTimer = setTimeout(() => {
                bottle.isReadyToRemove = true;
            }, 300);
        }
        return !bottle.isReadyToRemove;
    }

    /**
     * Checks all thrown bottle collisions and removes finished bottles.
     */
    checkCollisionsThrowableObject() {
        this.ThrowableObject = this.ThrowableObject.filter((bottle) => {
            const hitEnemy = this.checkBottleEnemyHit(bottle);
            if (bottle.isSplashing) return this.handleSplashingBottle(bottle);
            if (!hitEnemy && (bottle.y > 350 || bottle.x > 2900)) {
                bottle.hitType = 'ground';
                bottle.isSplashing = true;
                bottle.hasHit = true;
                this.audio.play("bottlesSplash");
                return true;
            }
            return true;
        });
    }

    /**
     * Throws a bottle if the throw key is pressed and cooldown has passed.
     */
    checkThrowObjects() {
        if (!this.keyboard.d || this.character.bottles <= 0) return;
        if (this.lastThrow && Date.now() - this.lastThrow < 600) return;
        this.lastThrow = Date.now();
        this.character.lastAction = new Date().getTime();
        const bottle = new ThrowableObject(
            this.character.x + 40,
            this.character.y + 40,
            this.character.otherDirection
        );
        this.ThrowableObject.push(bottle);
        bottle.throw();
        this.character.bottles -= 20;
        this.statusBarImageBottel.setPercentage(this.character.bottles);
    }

    /**
     * Assigns the world reference to the character and all enemies.
     */
    setWorld() {
        this.character.world = this;
        this.level.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
    }

    /**
     * Draws all game objects onto the canvas each frame.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.ctx.translate(-this.cameraX, 0);
        this.drawStatusBars();
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.mapAssets);
        this.addObjectToMap(this.ThrowableObject);
        this.addObjectToMap(this.bossEggs);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.ctx.translate(-this.cameraX, 0);
        requestAnimationFrame(() => this.draw());
    }

    /**
     * Draws all HUD status bars onto the canvas.
     */
    drawStatusBars() {
        this.addToMap(this.statusBarImageHealt);
        this.addToMap(this.statusBarImageCoin);
        this.addToMap(this.statusBarImageBottel);
        if (this.bossFightActive && this.statusBarImageHealtBoss) {
            this.addToMap(this.statusBarImageHealtBoss);
        }
    }

    /**
     * Draws each object in an array onto the canvas.
     * @param {DrawableObject[]} objects
     */
    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    /**
     * Draws a single object, flipping it if facing left.
     * @param {DrawableObject} mo
     */
    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        mo.drawFrameHitBox(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    /**
     * Flips the canvas context horizontally to mirror the object.
     * @param {DrawableObject} mo
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the canvas context after flipping.
     * @param {DrawableObject} mo
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
     * Clears the canvas to reset the game world.
     */
    resetGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Spawns a boss egg projectile at the given position.
     * @param {number} x
     * @param {number} y
     */
    spawnBossEgg(x, y) {
        const egg = new BossEgg(x, y);
        this.bossEggs.push(egg);
    }

    /**
     * Checks boss egg collisions with the character and removes finished eggs.
     */
    checkBossEggCollisions() {
        this.bossEggs = this.bossEggs.filter((egg) => {
            egg.move();
            if (!egg.isSplashing && egg.isCollidingBottle(this.character)) {
                this.character.hitHurt();
                this.audio.play("hurtCharakter");
                egg.playSplashAnimation();
            }
            if (egg.isSplashing) {
                if (!egg.splashTimer) {
                    egg.splashTimer = setTimeout(() => egg.isReadyToRemove = true, 300);
                }
                return !egg.isReadyToRemove;
            }
            if (egg.y > 400 || egg.x < -100) return false;
            return true;
        });
    }
}