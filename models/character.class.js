class Character extends MovableObject {
    x = 80; 
    y = 250;
    height = 180;
    width = 140;
    speed = 10;


    imagesNormal = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-1.png"
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
        "img/2_character_pepe/5_dead/D-51.png",
        "img/2_character_pepe/5_dead/D-52.png",
        "img/2_character_pepe/5_dead/D-53.png",
        "img/2_character_pepe/5_dead/D-54.png",
        "img/2_character_pepe/5_dead/D-55.png",
        "img/2_character_pepe/5_dead/D-56.png",
        "img/2_character_pepe/5_dead/D-57.png"
    ];

    imagesHurt = [
        "img/2_character_pepe/4_hurt/H-41.png",
        "img/2_character_pepe/4_hurt/H-42.png",
        "img/2_character_pepe/4_hurt/H-43.png"
    ];

    imagesWaiting = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png"
    ];


    constructor(world) {
        super();
        this.loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        this.world = world
        this.keyTrigger = this.world.keyboard;
        this.loadImages(this.imagesNormal);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesWaiting);
        this.applyGravity();
        this.animate();
        this.animateFrame()
        this.hitboxOffsetX = +20;
        this.hitboxOffsetY = +70;
        this.hitboxWidth = 100;
        this.hitboxHeight = 100;
    }

    animate() {
        setInterval(() => {
            this.world.cameraX = -this.x + 50;

            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

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
        }, 1000 / 60);
    }


    animateFrame() {
        setInterval(() => {
            let idleTime = (new Date().getTime() - this.lastAction) / 200;

            if (this.isDead()) {
                this.playAnimation(this.imagesDead);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            }
            else if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            }
            else if (this.keyTrigger.right || this.keyTrigger.left) {
                this.playAnimation(this.imagesWalking);
            }
            else {
                if (idleTime > 8) {
                    this.playAnimation(this.imagesWaiting);
                }
                else if (idleTime > 3) {
                    this.playAnimation(this.imagesNormal);
                }
            }
        }, 100);
    }

    
    canStompOn(enemy) {
        if (this.speedY <= 0) return false;
        const charFeet = this.y + this.height - this.hitboxOffsetY;
        const enemyHead = enemy.y + enemy.hitboxOffsetY;
        const enemyFeet = enemy.y + enemy.height - enemy.hitboxOffsetY;
        const isAbove = charFeet <= enemyHead + 30 && charFeet >= enemyHead - 10;
        const horizontalOverlap =
            this.x + this.width - this.hitboxOffsetX > enemy.x + enemy.hitboxOffsetX &&
            this.x + this.hitboxOffsetX < enemy.x + enemy.width - enemy.hitboxOffsetX;
        return isAbove && horizontalOverlap;
    }
}



