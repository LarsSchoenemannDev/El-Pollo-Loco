class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy))
                    this.character.hit()
                
                console.log("leben",this.character.energy);
            })
        }, 200);
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectToMap(this.level.backgroundObjects);
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