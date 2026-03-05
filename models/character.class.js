class Character extends MovableObject {
    // x = 0;
    // y = 240;
    height = 180
    width = 140
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
                let repeate = this.currentImage % this.imagesWalking.length; // let repeate = 0 % 6;  % =>Matematischer REST => 0, Rest 0
                // repeate geht das array 0, 1, 2, 3, 4, 5 und dann kommt % und es ist wieder 0 und wird dadurch unendlich
                let path = this.imagesWalking[repeate]
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 180);
    }
}


// walkRight() {
//     console.log("Character Walk Right");
// }

// walkLeft() {
//     console.log("Character Walk Left");
// }

// jump() {
//     console.log("Character Jump");

// }

// throw() {
//     console.log("Character throw");
// }

