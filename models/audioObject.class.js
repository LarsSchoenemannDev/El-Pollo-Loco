class AudioObject {
    constructor() {
        // Sounds laden
        this.sounds = {
            gameMusic: new Audio ("./sfx/gameMusic.mp3"),
            jump: new Audio("sfx/jumpAudio.mp3"),
            coin: new Audio("sfx/coinCollect.mp3.mp3"),
            bottles: new Audio("sfx/bottleCollect.mp3"),
            // boss: new Audio('audio/boss.mp3')
            gameEnd: new Audio("sfx/gameEndAudio.mp3")

        };
    }

    play(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0; 
            sound.play()
        }
    }
}