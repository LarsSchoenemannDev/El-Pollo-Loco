class World { // nur die Maske  Bauplan
    level = level1;

    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    statusBarImageHealt = new StatusBarImageHealt();
    statusBarImageCoin = new StatusBarImageCoin();
    statusBarImageBottel = new StatusBarImageBottle();
    ThrowableObject = [];


    constructor(canvas, keyboard) { 
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.character = new Character(this);
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.run();
        this.audio = new AudioObject();
    }

    run() {
        setInterval(() => {
            this.checkCollisions(); 
            this.checkThrowObjects();  
            this.checkCollisionsCoin(); 
            this.checkCollisionsBottles();  
            this.ThrowableObject.forEach(bottle => bottle.move());
            this.checkCollisionsThrowableObject(); 
        }, 1000 / 60);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {            
            if (this.character.canStompOn(enemy)) {
                enemy.hit(); 
                this.character.speedY = -10;  // Charakter hochspringen lassen
                return; // Weiteren Check überspringen
            }
            if (this.character.isCollidingDMG(enemy)) {
                this.character.hitHurt();
            }
        });
        this.statusBarImageHealt.setPercentageHealt(this.character.energy);
    }

    checkCollisionsCoin() {
        this.level.coins.forEach((coinCollect, i) => {
            if (this.character.isCollidingCollect(coinCollect)) {
                this.level.coins.splice(i, 1)
                this.character.hitCollectCoin();
                this.statusBarImageCoin.setPercentageCoin(this.character.coin)
            }
        })
    }

    checkCollisionsBottles() {
        this.level.bottles.forEach((bottlesCollect, i) => {
            if (this.character.isCollidingCollect(bottlesCollect)) {
                this.level.bottles.splice(i, 1);
                this.character.hitCollectBottles();
                this.statusBarImageBottel.setPercentageBottles(this.character.bottles)
            }
        });
    }

    checkCollisionsThrowableObject() {
        this.ThrowableObject = this.ThrowableObject.filter((bottle) => {
            let hitEnemy = false;
            this.level.enemies.forEach((enemy) => {
                if (bottle.isCollidingBottle(enemy)) {
                    enemy.hit();
                    bottle.playSplashAnimation();
                    hitEnemy = true;
                }
            });
            if (bottle.isSplashing) {
                if (!bottle.splashTimer) {
                    bottle.splashTimer = setTimeout(() => {
                        bottle.isReadyToRemove = true;
                    }, 300);
                }
                if (bottle.isReadyToRemove) return false;
                return true;
            }
            if (!hitEnemy && (bottle.y > 400 || bottle.x < -200 || bottle.x > 2000)) {
                return false;
            }
            return true;
        });
    }


    checkThrowObjects() {
        if (!this.keyboard.d || this.character.bottles <= 0) return;
        if (this.lastThrow && Date.now() - this.lastThrow < 300) return;
        this.lastThrow = Date.now();
        const startX = this.character.x + 50;
        const startY = this.character.y + 50;
        const bottle = new ThrowableObject(startX, startY, this.character.otherDirection);
        this.ThrowableObject.push(bottle);
        bottle.throw();
        this.character.bottles -= 20;
        this.statusBarImageBottel.setPercentageBottles(this.character.bottles)
        console.log(this.character.bottles);
    }

    setWorld() {
        this.character.world = this;
        this.level.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBarImageHealt)
        this.addToMap(this.statusBarImageCoin)
        this.addToMap(this.statusBarImageBottel)
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.coins)
        this.addObjectToMap(this.level.bottles)
        this.addObjectToMap(this.ThrowableObject)
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.ctx.translate(-this.cameraX, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        })
    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameHitBox(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}   