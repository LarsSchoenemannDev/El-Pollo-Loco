let canvas;
let world;
let keyboard = new Keyboard();
window.addEventListener('resize', toggleWidthLimit);

/**
 * Initializes the game by creating the canvas and set the level and world instance.
 */
function init() {
    canvas = document.getElementById("canvas");
    initLevel1();
    world = new World(canvas, keyboard);
}

/**
 * Sets a keyboard key state based on the event code.
 * @param {KeyboardEvent} event
 * @param {boolean} isPressed
 */
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

/**
 * Sets a keyboard key state based on the event code.
 * @param {KeyboardEvent} event
 * @param {boolean} isUnpressed  
 */

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

/**
 * Shows or hides the mobile controls based on window width.
 */

function toggleWidthLimit() {
    let windowWidth = window.innerWidth;
    let element = document.getElementById("controll-mobile");
    if (windowWidth >= 820) {
        element.classList.add("hidden");

    } else {
        element.classList.remove("hidden");
    }
}

/**
 * Checks if the game is over due to player or boss death.
 * @returns {boolean}
 */
function isGameOver() {
    return world.statusBarImageHealtBoss?.percentage <= 0 || world.statusBarImageHealt?.percentage <= 0;
}

/**
 * Returns whether the player won or lost.
 * @returns {"winModal"|"loseModal"}
 */
function getGameResult() {
    if (world.statusBarImageHealtBoss.percentage <= 0) {
        showGameWonScreen();
        return "winModal"
    }
    showGameOverScreen();
    return "loseModal";
}

/**
 * Shows the game over screen with lose state.
 * 
 */
function showGameOverScreen() {
    document.getElementById("endModal").classList.remove("hidden")
    clearAllIntervals();
}

/**
 * Shows the won screen with win state.
 * 
 */
function showGameWonScreen() {
    document.getElementById("wonModal").classList.remove("hidden")
    clearAllIntervals();
}
/**
 * Stops all active intervals and animation frames by overwriting them.
 */
function clearAllIntervals() {
    let highestId = window.setInterval(() => { }, 0);
    for (let i = 0; i < highestId; i++) {
        clearInterval(i);
    }
}

/**
 * Resets all game data and reinitializes the world.
 */
function resetWorld() {
    level1 = 0;
    world = 0;
    keyboard = new Keyboard();
    initLevel1();
    world = new World(canvas, keyboard);
    document.getElementById("wonModal").classList.add("hidden")
    document.getElementById("endModal").classList.add("hidden")
}

/**
 * Show the Win or Lose Modal.
 */
function winLoseModal() {
    if (!isGameOver()) return;
    getGameResult();
}

/**
 * Resets the game fully without reloading the page and shows the game over screen.
 */
function resetGame() {
    clearAllIntervals();
    resetWorld();
}


function exitGameWon() {
    level1 = 0;
    world = 0;
    document.querySelector("canvas").classList.add("hidden");
    document.getElementById("wonModal").classList.add("hidden");
    document.getElementById("main-menu").style.display = "flex"


}
function exitGameLost() {
    level1 = 0;
    world = 0;
    document.querySelector("canvas").classList.add("hidden");
    document.getElementById("endModal").classList.add("hidden");
    document.getElementById("main-menu").style.display = "flex"
}

// hit on top not work anymore
// end screen fix
// mobile fix controll scalierung
// last sound add 
