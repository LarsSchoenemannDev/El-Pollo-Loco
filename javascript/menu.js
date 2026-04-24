/**
 * Starts the game by hiding the menu, showing the canvas and initializing the world.
 */
function startGame() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById
    document.querySelector("canvas").style.display = "block";
    document.getElementById("canvas").classList.remove("hidden");
    init();
    initMobileControls()
}

/**
 * Opens a modal by removing the hidden class.
 * @param {string} modalId - The ID of the modal element.
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

/**
 * Closes a modal by adding the hidden class.
 * @param {string} modalId - The ID of the modal element.
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

/**
 * Read audio setting from localStorage and set the state
 */
function toggleMute() {
    let currentSetting = localStorage.getItem("audio");
    if (currentSetting === null || currentSetting === "true") {
        setAudioState("false");
    } else {
        setAudioState("true");
    }
}

/**
 * Change the css style 
 */
function setAudioState(state) {
    localStorage.setItem("audio", state);
    const iconOn = document.querySelector(".audio-on");
    const iconMute = document.querySelector(".audio-mute");

    if (state === "true") {
        iconOn.classList.remove("hidden");
        iconMute.classList.add("hidden");
        world?.audio?.play("gameMusic");
    } else {
        iconOn.classList.add("hidden");
        iconMute.classList.remove("hidden");
        world?.audio?.stop("gameMusic");
    }
}

/**
 * read the state on document loaded 
 */
window.addEventListener("DOMContentLoaded", () => {
    const savedState = localStorage.getItem("audio") || "true";
    setAudioState(savedState);
});

