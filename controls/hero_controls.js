
function keyTyped() {

    if (key === 's' && eggman.alive === false) {
        restart();
    }

    if (key === 's') {
        if (startScreen === true) {
            startScreen = false;
        }
    } else {

        if (hero.alive) {
                if (key === ' ') {
                    if (currentJump < jumpLimit) {
                        hero.y -= 10;
                        hero.dy = -15;
                        currentJump += 1;
                        jumpWav.play();
                    }
                }
        }
    }
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
}

