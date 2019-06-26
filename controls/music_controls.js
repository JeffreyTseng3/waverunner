

function toggle() {
    let vol = amp.getLevel();
    console.log(vol);
    if (vol > 0.15) {
        button.html('unmute');
        song.setVolume(0.0);
        ringWav.setVolume(0.0);
        enemyWav.setVolume(0.0);
        jumpWav.setVolume(0.0);
      
    } else {
        
        
        button.html('mute');
        song.setVolume(1.0);
        ringWav.setVolume(1.0);
        enemyWav.setVolume(1.0);
        jumpWav.setVolume(1.0);
        
    }

}


