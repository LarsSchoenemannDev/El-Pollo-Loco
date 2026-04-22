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
 * Toggles the mute state in localStorage.
 */
function toggleMute() {
    const currentAudioSetting = localStorage.getItem("audio");
    if (currentAudioSetting === null) {
        localStorage.setItem("audio", "false");
        world.audio?.stop("gameMusic");
    } else {
        if (currentAudioSetting === "true") {
            localStorage.setItem("audio", "false");
            document.querySelector(".audio-mute").classList.toggle("hidden");
            document.querySelector(".audio-on").classList.toggle("hidden");
            world?.audio.stop("gameMusic");
        } else {
            localStorage.setItem("audio", "true");
            document.querySelector(".audio-on").classList.toggle("hidden");
            document.querySelector(".audio-mute").classList.toggle("hidden");
            world?.audio?.play("gameMusic");
        }
    }
}

/**
 * Toggles fullscreen mode on and off.
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}