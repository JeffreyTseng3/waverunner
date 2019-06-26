
function keyTyped(e) {
    if (key === 'm') {
        let vol = amp.getLevel();
        console.log(vol);
        if (vol > 0.15) {
            // button.html('unmute');
            song.setVolume(0.0);
            ringWav.setVolume(0.0);
            enemyWav.setVolume(0.0);
            jumpWav.setVolume(0.0);
            return false;
        } else {


            // button.html('mute');
            song.setVolume(1.0);
            ringWav.setVolume(1.0);
            enemyWav.setVolume(1.0);
            jumpWav.setVolume(1.0);
            return false;
        }
    }




    if (key === 's' && eggman.alive === false) {
        restart();
    }

    if (key === 's') {
        if (startScreen === true) {
            startScreen = false;
        }
    } else {

        if (hero.alive) {
                if (key === ' ' ) {
                    if (currentJump < jumpLimit) {
                        hero.y -= 10;
                        hero.dy = -15;
                        currentJump += 1;
                        jumpWav.play();
                        // e.preventDefault();
                        return false;
                    }
                }
        }
    }
    return false;
}




function heroCommands() {
    if (hero.alive) {
        if (keyIsDown(RIGHT_ARROW)) {
            hero.x += 5;
            hero.rightDir = true;
            
            hero.lastDir = 'right';
        } else{
            hero.rightDir = false;

        }
        
        if (keyIsDown(LEFT_ARROW)) {
            hero.x -= 5;
            hero.leftDir = true;
            hero.lastDir = 'left';
        } else {
            hero.leftDir = false;

        }

        if (keyIsDown(DOWN_ARROW)) {
            hero.y += 5;
        }
    }
    return false;
}

