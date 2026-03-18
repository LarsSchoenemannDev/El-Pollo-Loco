class BottlesObject extends Collect {

    static bottlesImage = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];


    constructor(x, y) {
        super(x, y, 80, 80, BottlesObject.bottlesImage, "bottles");
        this.offset = { top: 20, bottom: 20, left: 20, right: 20 };
    }
}