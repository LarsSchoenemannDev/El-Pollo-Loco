class BottlesObject extends Collect {

    // Das Schlüsselwort static bedeutet: Diese Eigenschaft gehört zur Klasse selbst, 
    // nicht zu den einzelnen Objekten.
    static bottlesImage = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];

    offset = { top: 0, bottom: 0, left: 210, right: 0 };

    constructor(x, y) {       
        // console.log("Images received:", BottlesObject.bottlesImage);
        super(x, y, 70, 70, BottlesObject.bottlesImage, "bottles");

    }
}