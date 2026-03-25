class World { // nur die Maske  Bauplan
    level = level1;
    collect;
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    statusBarImageHealt = new StatusBarImageHealt();
    statusBarImageCoin = new StatusBarImageCoin();
    statusBarImageBottel = new StatusBarImageBottle();
    ThrowableObject = [new ThrowableObject()];

    constructor(canvas, keyboard) { // der constructor macht erst die verbindung zum abgleichen weiter reichen 
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.character = new Character(this);
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.run();

    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000 / 60);
    }

    checkThrowObjects() {
        if (this.keyboard.d) {
            let bottle = new ThrowableObject(this.character.y + 100, this.character.x + 100)
            this.ThrowableObject.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy))
                this.character.hit();
            this.statusBarImageHealt.setPercentageHealt(this.character.energy)
            console.log("leben", this.character.energy);
        })
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