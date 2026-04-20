class World { // nur die Maske  Bauplan
    level = level1;
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    statusBarImageHealt = new StatusBarImageHealt();
    statusBarImageCoin = new StatusBarImageCoin();
    statusBarImageBottel = new StatusBarImageBottle();
    statusBarImageHealtBoss = new StatusBarImageHealtBoss();

    ThrowableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.character = new Character(this);
        this.endboss = new Endboss(this);
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.run();
        this.audio = new AudioObject();
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisionsCoin();
            this.checkCollisionsBottles();
            this.ThrowableObject.forEach(bottle => bottle.move());
            this.checkCollisionsThrowableObject();
            this.bossLayout();
            this.level.enemies = this.level.enemies.filter(enemy => !enemy.isReadyToRemove);
            resetGame()
        }, 1000 / 60);
    }

    bossLayout() {
        if (!this.bossFightActive && this.character.x >= this.level.bossArea) {
            this.bossFightActive = true;
            // sound ?
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (enemy.isDead && enemy.isDead()) return;

            if (this.character.isCollidingFromTop(enemy)) {
                enemy.hit();
                this.character.speedY = +20;
            } else if (this.character.isColliding(enemy)) {
                this.character.hitHurt();
                this.audio.play("hurtCharakter");
            }
        });

        this.statusBarImageHealt.setPercentageHealt(this.character.energy);
    }

    checkCollisionsCoin() {
        this.level.coins.forEach((coinCollect, i) => {
            if (this.character.isColliding(coinCollect)) {
                this.level.coins.splice(i, 1)
                this.character.hitCollectCoin();
                this.statusBarImageCoin.setPercentageCoin(this.character.coin)
            }
        })
    }

    checkCollisionsBottles() {
        this.level.bottles.forEach((bottlesCollect, i) => {
            if (this.character.isColliding(bottlesCollect)) {
                this.level.bottles.splice(i, 1);
                this.character.hitCollectBottles();
                this.statusBarImageBottel.setPercentageBottles(this.character.bottles)
            }
        });
    }

    checkCollisionsThrowableObject() {
        this.ThrowableObject = this.ThrowableObject.filter((bottle) => {
            let hitEnemy = false;
            this.level.enemies.forEach((otherObject) => {
                if (!bottle.hasHit && bottle.isColliding(otherObject)) {
                    otherObject.hit();
                    bottle.playSplashAnimation();
                    bottle.hasHit = true;
                    hitEnemy = true;
                    this.audio.play("bottlesSplashEnemy");
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
            if (!hitEnemy && (bottle.y > 350 || bottle.x > 2900)) {
                this.audio.play("bottlesSplash");
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
    }

    setWorld() {
        this.character.world = this;
        this.level.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBarImageHealt);
        this.addToMap(this.statusBarImageCoin);
        this.addToMap(this.statusBarImageBottel);
        if (this.bossFightActive && this.statusBarImageHealtBoss) {
            this.addToMap(this.statusBarImageHealtBoss)
        }
        this.ctx.translate(this.cameraX, 0);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.ThrowableObject);
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


    resetGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log("clear world");
        
        

    }

}   