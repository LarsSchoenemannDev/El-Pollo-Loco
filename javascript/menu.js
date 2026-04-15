function startGame() {
    console.log('🎮 Spiel startet...');
    document.getElementById("main-menu").style.display = "none"
    document.querySelector("canvas").style.display = "block"
    init()
}


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function toggleMute() {
    const currentAudioSetting = localStorage.getItem("audio");
    if (currentAudioSetting === null) {
        localStorage.setItem("audio", "false");
    }
    else {
        if (currentAudioSetting === "true") {
            localStorage.setItem("audio", "false");
        } else {
            localStorage.setItem("audio", "true");
        }
    }
}


function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}