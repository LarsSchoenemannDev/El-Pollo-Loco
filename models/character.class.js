class Character extends MovableObject {
 
    height = 180
    width = 140
    speed = 10;
    imagesWalking = [
        "./img/2_character_pepe/2_walk/W-21.png",
        "./img/2_character_pepe/2_walk/W-22.png",
        "./img/2_character_pepe/2_walk/W-23.png",
        "./img/2_character_pepe/2_walk/W-24.png",
        "./img/2_character_pepe/2_walk/W-25.png",
        "./img/2_character_pepe/2_walk/W-26.png"
    ]
    world;

    constructor() {

        super();
        this.loadImage("./img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.imagesWalking);
        this.animate();
    }
    animate() {

        setInterval(() => {
            if (world.keyboard.right) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (world.keyboard.left) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.cameraX = -this.x;
        }, 1000 / 60);



        setInterval(() => {
            if (world.keyboard.right || world.keyboard.left) {
                //Walk animation
                let repeate = this.currentImage % this.imagesWalking.length; // let repeate = 0 % 6;  % =>Matematischer REST => 0, Rest 0
                // repeate geht das array 0, 1, 2, 3, 4, 5 und dann kommt % und es ist wieder 0 und wird dadurch unendlich
                let path = this.imagesWalking[repeate]
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }
}


// jump() {
//     console.log("Character Jump");

// }

// throw() {
//     console.log("Character throw");
// }

