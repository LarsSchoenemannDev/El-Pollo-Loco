class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    air = new Air();
    weather = new Clouds();
    firstBGLayer = new FirstBGLayer();
    secoundBGLayer = new SecoundBGLayer();
    thirdBGLayer = new ThirdBGLayer();
    

    ctx;
    canvas;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.air.img, this.air.x, this.air.y, this.air.width, this.air.height);
        this.ctx.drawImage(this.weather.img, this.weather.x, this.weather.y, this.weather.width, this.weather.height);
        this.ctx.drawImage(this.thirdBGLayer.img, this.thirdBGLayer.x, this.thirdBGLayer.y, this.thirdBGLayer.width, this.thirdBGLayer.height);
        this.ctx.drawImage(this.secoundBGLayer.img, this.secoundBGLayer.x, this.secoundBGLayer.y, this.secoundBGLayer.width, this.secoundBGLayer.height);
        this.ctx.drawImage(this.firstBGLayer.img, this.firstBGLayer.x, this.firstBGLayer.y, this.firstBGLayer.width, this.firstBGLayer.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        for (let i = 0; i < this.enemies.length; i++) {
            this.ctx.drawImage(this.enemies[i].img, this.enemies[i].x, this.enemies[i].y, this.enemies[i].width, this.enemies[i].height);
        }


        let self = this // this ist in der function nicht mehr sichtbar
        requestAnimationFrame(function () { // die function wird dauert ausgeführt 

            self.draw()
            console.log("Self Draw ")
        })
    }
}   