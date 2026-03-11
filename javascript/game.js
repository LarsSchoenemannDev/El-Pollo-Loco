let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);

}

window.addEventListener("keydown", (event) => {    
    if (event.code === "ArrowLeft")
        keyboard.left = true;
    if (event.code === "ArrowRight")
        keyboard.right = true;
    if (event.code === "Space")
        keyboard.space = true;
    if (event.code === "ControlLeft")
        keyboard.throw = true;
    if (event.code === "Escape")
        keyboard.esc = true;
})

window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft")
        keyboard.left = false;
    if (event.code === "ArrowRight")
        keyboard.right = false;
    if (event.code === "Space")
        keyboard.space = false;
    if (event.code === "ControlLeft")
        keyboard.throw = false;
    if (event.code === "Escape")
        keyboard.esc = false;
});