function gameControlNotice() {
    let gameControlNoticeContent = document.getElementById("tutorial-modal");
    gameControlNoticeContent.classList.remove("hidden")
    gameControlNoticeContent.innerHTML = gameControlNoticeHTML();
}


function impressumModal() {
    let impressumContent = document.getElementById("impressum-modal");
    impressumContent.classList.remove("hidden")
    impressumContent.innerHTML = impressumContentHTML();
}