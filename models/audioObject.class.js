/**
 * Manages all game audio sounds.
 */
class AudioObject {

    /**
     * Creates an AudioObject and initializes all sound instances.
     */
    constructor() {
        this.sounds = {
            gameMusic: new Audio("./sfx/gameMusic.mp3"),
            jump: new Audio("sfx/jumpAudio.mp3"),
            coin: new Audio("sfx/coinCollect.mp3.mp3"),
            bottles: new Audio("sfx/bottleCollect.mp3"),
            bottlesSplash: new Audio("sfx/bottlesplashfx.mp3"),
            bottlesSplashEnemy: new Audio("sfx/splash.mp3"),
            hurtCharakter: new Audio("sfx/hurt.mp3"),
            gameEnd: new Audio("sfx/gameEndAudio.mp3"),
            gameOver: new Audio("sfx/gameOver.mp3"),
            gameStart: new Audio("sfx/gameStart.mp3"),
        };
    }

    /**
     * Plays a sound by name if audio is not muted.
     * @param {string} soundName - Key of the sound in this.sounds.
     */
    play(soundName) {
        if (localStorage.getItem("audio") === "false") {
            return;
        }
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }
}