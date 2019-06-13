
function keyTyped() {

    if (key === ' ') {
        if (currentJump < jumpLimit) {
            hero.y -= 10;
            hero.dy = -15;
            // currentJump += 1;
        }
      
    }
}


function heroControl() {
    if (keyIsDown(RIGHT_ARROW)) {
        hero.x += 5;
    } 
    
    if (keyIsDown(LEFT_ARROW)) {
        hero.x -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        hero.y += 5;
    }

}