/**
 * Starts the game by hiding the menu, showing the canvas and initializing the world.
 */
function startGame() {
    document.getElementById("main-menu").style.display = "none";
    document.querySelector("canvas").style.display = "block";
    document.getElementById("canvas").classList.remove("hidden");
    init();
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
    } else {
        if (currentAudioSetting === "true") {
            localStorage.setItem("audio", "false");
        } else {
            localStorage.setItem("audio", "true");
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