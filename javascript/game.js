let canvas;
let world;


function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);


    console.log("My Character is", world.character);
    console.dir("Enemie ist Loaded", world.enemies);





    console.log('🎯 this ist:', this);
    console.log('🔍 Typ:', this.constructor?.name || typeof this);


}