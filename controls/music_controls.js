

function toggle() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.7);
        ringWav.setVolume(1);
        enemyWav.setVolume(1);
        button.html('pause');
    } else {
        song.pause();
        button.html('play');
    }

}


