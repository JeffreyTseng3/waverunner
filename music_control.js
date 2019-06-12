

function toggle() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html('pause');
    } else {
        song.pause();
        button.html('play');
    }

}


