let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
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

function toggleWidthLimit() {
    let windowWidth = window.innerWidth;
    let element = document.getElementById("controll-mobile");
    if (windowWidth >= 820) {
        element.classList.add("hidden");
        console.log("yes");

    } else {
        element.classList.remove("hidden");
        console.log("no");

    }
}

window.addEventListener('resize', toggleWidthLimit);

function resetGame() {
    if (world.statusBarImageHealtBoss?.percentage <= 0 || world.statusBarImageHealt?.percentage <= 0) {
        document.getElementById("main-menu").style.display = "flex";

        // console.log(world);
        // console.log(level1);
        // world = 0
        // level1 = 0
        // console.log(world);
        // console.log(level1);




    }
}

// jump on enemy 
// end screen 
// mobile fix controll scalierung 
// last sound add 
