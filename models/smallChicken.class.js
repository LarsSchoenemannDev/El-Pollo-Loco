class SmallChicken extends MovableObject {

    y = 366;
    height = 55
    width = 70
    speedY = 0;
    imagesWalking = [
        "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ]

    imageDead = [
        "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];

    constructor(x) {
        super();
        this.loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.loadImage(this.imageDead);
        this.x = x + 400 + Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.hitboxOffsetX = 25;
        this.hitboxOffsetY = 25;
        this.hitboxWidth = 50;
        this.hitboxHeight = 50;
        this.startJumpingInterval()
        console.log(this.y);

    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.imagesWalking)
        }, 200);
    }

    startJumpingInterval() {
        setInterval(() => {
            this.Jumping()
        }, 2000 + Math.random() * 2000);
    }

    Jumping() {
        if (this.isJumping) return;  
        this.isJumping = true;     // startus damit kein doppel jump kommt
        this.y = 366;             //start
        this.velocity = -8;       // schritte (sprunghöhe)        
        this.gravity = 0.5;        // schritte runter
        this.applyGravity();        
    }

    applyGravity() {
        this.y += this.velocity;       
        this.velocity += this.gravity;         
        if (this.y >= 366) {
            this.y = 366;              
            this.velocity = 0;
            this.isJumping = false;    
        } else {            
            setTimeout(() => this.applyGravity(), 20);
        }
    }

}
