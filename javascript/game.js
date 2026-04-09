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





// fix flaschen werfen -fertig
// auf gegner von oben springen können - in arbeit 
// dead animation adds - splash muss nach einem setintervall raus 
// jump global anpassen - chrakter hat andere Gravity als adds 
// end boss screen - da ist noch alles offen 
// menu einfügen - vorhanden im sideprojekt muss nur eingefügt werden 
// game music start - ja bei game start im menu erst starten music mute usw 
// jsdoc für das project erstellen 

// coins zähler ins menu einfügen ?
// bottle bar anpassung sammeln klappt löschen aber nicht wenn flasche geworfen 