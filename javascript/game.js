let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    console.log(world.character);
}

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        keyboard.left = true;
    }
    if (event.code === "ArrowRight") {
        keyboard.right = true;
    }
    if (event.code === "Space") {
        keyboard.space = true;
    }
    if (event.code === "ControlLeft") {
        keyboard.throw = true;
    }
    if (event.code === "Escape") {
        keyboard.esc = true;
    }
    if (event.code === "KeyD") {
        console.log("❎");
        keyboard.d = true;
    }
})

window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
        keyboard.left = false;
    }
    if (event.code === "ArrowRight") {
        keyboard.right = false;
    }
    if (event.code === "Space") {
        keyboard.space = false;
    }
    if (event.code === "ControlLeft") {
        keyboard.throw = false;
    }
    if (event.code === "Escape") {
        keyboard.esc = false;
    }
    if (event.code === "KeyD") {
        keyboard.d = false;
    }
});





// fix flaschen werfen
// auf gegner von oben springen können
// dead animation adds
// jump global anpassen
// end boss screen
// menu einfügen
// game music start 