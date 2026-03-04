class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 140
    width = 100


    // LoadImage ("img/test.png")
    loadImage(path) {
        this.img = new Image(); // this.img = documen.getElementById("image") <img id="img"> src>
        this.img.src = path
    }

    moveRight() {
        console.log("Moving Right");

    }
}