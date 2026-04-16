class AudioObject {
    constructor() {
        this.sounds = {
            gameMusic: new Audio("./sfx/gameMusic.mp3"),
            jump: new Audio("sfx/jumpAudio.mp3"),
            coin: new Audio("sfx/coinCollect.mp3.mp3"),
            bottles: new Audio("sfx/bottleCollect.mp3"),
            bottlesSplash: new Audio("sfx/bottlesplashfx.mp3"),
            bottlesSplashEnemy: new Audio("sfx/splash.mp3"),
            hurtCharakter: new Audio("sfx/hurt.mp3"),
            gameEnd: new Audio ("sfx/gameEnd.mp3"),
            gameOver: new Audio ("sfx/gameOver.mp3"),
            gameStart: new Audio ("sfx/gameStart.mp3"),

            // boss: new Audio('audio/boss.mp3')
            gameEnd: new Audio("sfx/gameEndAudio.mp3")
        };
    }

    play(soundName) {
        if (localStorage.getItem("audio") === "false") {
            return
        }
        else {
            const sound = this.sounds[soundName];
            if (sound) {
                sound.currentTime = 0;
                sound.play()
            }
        }
    }
}