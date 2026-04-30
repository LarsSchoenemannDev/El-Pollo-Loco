/**
 * Represents the playable character Pepe.
 * @extends MovableObject
 */
class Character extends MovableObject {
    x = 2200;
    y = 230;
    height = 200;
    width = 140;
    speed = 8;
    coin = 0;
    bottles = 100;

    imagesNormal = [
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png",
        "./img/2_character_pepe/1_idle/idle/I-1.png"
    ];

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
    ];

    imagesDead = [
        "./img/2_character_pepe/5_dead/D-52.png",
        "./img/2_character_pepe/5_dead/D-53.png",
        "./img/2_character_pepe/5_dead/D-54.png",
        "./img/2_character_pepe/5_dead/D-51.png",
        "./img/2_character_pepe/5_dead/D-55.png",
        "./img/2_character_pepe/5_dead/D-56.png",
        "./img/2_character_pepe/5_dead/D-57.png"
    ];

    imagesHurt = [
        "./img/2_character_pepe/4_hurt/H-41.png",
        "./img/2_character_pepe/4_hurt/H-42.png",
        "./img/2_character_pepe/4_hurt/H-43.png"
    ];

    imagesWaiting = [
        "./img/2_character_pepe/1_idle/long_idle/I-11.png",
        "./img/2_character_pepe/1_idle/long_idle/I-12.png",
        "./img/2_character_pepe/1_idle/long_idle/I-13.png",
        "./img/2_character_pepe/1_idle/long_idle/I-14.png",
        "./img/2_character_pepe/1_idle/long_idle/I-15.png",
        "./img/2_character_pepe/1_idle/long_idle/I-16.png",
        "./img/2_character_pepe/1_idle/long_idle/I-17.png",
        "./img/2_character_pepe/1_idle/long_idle/I-18.png",
        "./img/2_character_pepe/1_idle/long_idle/I-19.png",
        "./img/2_character_pepe/1_idle/long_idle/I-20.png"
    ];

    /**
     * Creates the character, loads all images and starts animation loops.
     * @param {World} world - The game world instance.
     */
    constructor(world) {
        super();
        this.loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        this.world = world;
        this.keyTrigger = this.world.keyboard;
        this.loadImages(this.imagesNormal);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesWaiting);        
        this.animate();
        this.animateFrame();
        this.hitboxOffsetX = 20;
        this.hitboxOffsetY = 90;
        this.hitboxWidth = 90;
        this.hitboxHeight = 100;
    }

    /**
     * Handles movement, gravity and collision checks at 60fps.
     */
    animate() {
        setInterval(() => {
            this.lastY = this.y
            this.updateCamera();
            this.updateGravity();
            this.handleMovement();
            this.world.checkCollisions();            
        }, 1000 / 60);
    }

    /**
     * Updates the camera position based on the character's x position.
     */
    updateCamera() {
        this.world.cameraX = -this.x + 40;
    }

    /**
     * Applies gravity to the character if above ground.
     */
    updateGravity() {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            if (this.y >= 230) {
                this.y = 230; 
                this.speedY = 0;
            }
        }
    }

    /**
     * Handles keyboard input for movement and jumping.
     */
    handleMovement() {
        if (this.keyTrigger.right && this.x < this.world.level.levelEndX) {
            this.moveRight();
            this.otherDirection = false;
            this.lastAction = new Date().getTime();
        }
        if (this.keyTrigger.left && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.lastAction = new Date().getTime();
        }
        if (this.keyTrigger.space && !this.isAboveGround()) {
            this.jump();
            this.world.audio.play("jump");
            this.lastAction = new Date().getTime();
        }
    }

    /**
     * Updates the character's animation frame based on current state.
     */
    animateFrame() {
        setInterval(() => {
            let idleTime = (new Date().getTime() - this.lastAction) / 200;
            if (this.isDead()) {
                this.playAnimation(this.imagesDead);
                setInterval(() => {
                    winLoseModal()
                }, 300);
            } else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt); // fühlt sich auch nicht sauber an 
            } else if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping); // stottert 
            } else if (this.keyTrigger.right || this.keyTrigger.left) {
                this.playAnimation(this.imagesWalking);
            } else {
                this.playIdleAnimation(idleTime);
            }
        }, 100);
    }

    /**
     * Plays idle or waiting animation based on how long the character has been idle.
     * @param {number} idleTime - Time in units since last action.
     */
    playIdleAnimation(idleTime) {
        if (idleTime > 8) {
            this.playAnimation(this.imagesWaiting);
        } else if (idleTime > 3) {
            this.playAnimation(this.imagesNormal);
        }
    }
}