class Collect extends DrawableObject {
    
    coin = 0;
    bottles = 0;



    offset = { top: 0, bottom: 0, left: 0, right: 0 };

    constructor(x, y, width, height, images, type) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.loadImages(images);
        this.img = this.imageCache[images[0]];
        this.runX()
        this.world = world

        
        // console.log("coin", this.collect.coin);
        // console.log(this.level1);
        // console.log(this.level1?.coins);
    }

    runX() {
        setInterval(() => {
            this.checkCollect();
            this.collect()
        }, 200);
    }
    // getHitbox() {
    //     return {
    //         left: this.x + this.offset.left,
    //         right: this.x + this.width - this.offset.right,
    //         top: this.y + this.offset.top,
    //         bottom: this.y + this.height - this.offset.bottom,
    //     };
    // }
    checkCollect() {
        this.world.level.coins.forEach((ob) => {
            if (character.collect(ob))
                character.hit();


        })
    }
    collect() {
        this.coin += 1;
        if (this.coin < 0) {
            this.coin = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
}


