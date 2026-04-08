class ThrowableObject extends MovableObject {

    constructor(x, y, facingLeft) {
        super();
        this.loadImage("./img/6_salsa_bottle/salsa_bottle.png");
        this.x = x;
        this.y = y;
        this.height = 83;
        this.width = 69;        
        this.otherDirection = facingLeft;
        this.speedX = facingLeft ? -8 : 8;  
        this.speedY = -15;                    
        this.gravity = 0.8;                   
    }
   
    move() {
        this.x += this.speedX;       
        this.y += this.speedY;     
        this.speedY += this.gravity; 
    }
}