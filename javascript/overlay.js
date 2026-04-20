/**
 * Opens the game controls modal and renders its content.
 */

function gameControlNotice() {
    let gameControlNoticeContent = document.getElementById("tutorial-modal");
    gameControlNoticeContent.classList.remove("hidden")
    gameControlNoticeContent.innerHTML = gameControlNoticeHTML();
}

/**
 * Opens the impressum modal and renders its content.
 */

function impressumModal() {
    let impressumContent = document.getElementById("impressum-modal");
    impressumContent.classList.remove("hidden")
    impressumContent.innerHTML = impressumContentHTML();
}