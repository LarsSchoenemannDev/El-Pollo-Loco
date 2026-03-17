class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    StatusBarImageHealt = new StatusBarImageHealt();
    StatusBarImageCoin = new StatusBarImageCoin();
    StatusBarImageBottel = new StatusBarImageBottel();
    ThrowableObject = [new ThrowableObject()];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
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
            this.statusBar.setPercentageHealt(this.character.energy)
            console.log("leben", this.character.energy);
        })
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.StatusBarImageHealt)
        this.addToMap(this.StatusBarImageCoin)
        this.addToMap(this.StatusBarImageBottel)
        this.ctx.translate(this.cameraX, 0);

        this.addObjectToMap(this.ThrowableObject)

        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);

        this.ctx.translate(-this.cameraX, 0);



        let self = this; // this ist in der function nicht mehr sichtbar
        requestAnimationFrame(function () { // die function wird dauert ausgeführt 
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