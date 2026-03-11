class Character extends MovableObject {
    y = 80;
    height = 180;
    width = 140;
    speed = 10;
    imagesWalking = [
        "./img/2_character_pepe/2_walk/W-21.png",
        "./img/2_character_pepe/2_walk/W-22.png",
        "./img/2_character_pepe/2_walk/W-23.png",
        "./img/2_character_pepe/2_walk/W-24.png",
        "./img/2_character_pepe/2_walk/W-25.png",
        "./img/2_character_pepe/2_walk/W-26.png"
    ];
    imagesJumping = [
        "./img/2_character_pepe/3_jump/J-31.png",
        "./img/2_character_pepe/3_jump/J-32.png",
        "./img/2_character_pepe/3_jump/J-33.png",
        "./img/2_character_pepe/3_jump/J-34.png",
        "./img/2_character_pepe/3_jump/J-35.png",
        "./img/2_character_pepe/3_jump/J-36.png",
        "./img/2_character_pepe/3_jump/J-37.png",
        "./img/2_character_pepe/3_jump/J-38.png",
        "./img/2_character_pepe/3_jump/J-39.png"

    ]
    world;

    constructor() {

        super();
        this.loadImage("./img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.applyGravity();
        this.animate();
    }
    
    animate() {
        setInterval(() => {
            if (world.keyboard.right && this.x < this.world.level.level_EndX) {
                this.moveRight()
            }

            if (world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true     
            }

            this.world.cameraX = -this.x + 60;

            if (this.world.keyboard.space && !this.isAbouveGround()) {
                this.jump();
            }

        }, 1000 / 60);

        setInterval(() => {
            if (this.isAbouveGround()) {
                this.playAnimation(this.imagesJumping)
            } else {
                if (world.keyboard.right || world.keyboard.left) {
                    this.playAnimation(this.imagesWalking)
                }
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

