
function keyTyped() {
    if (key === ' ') {
        hero.y -= 100;
        hero.dy = 0;
    }
}


function heroControl() {
    if (keyIsDown(RIGHT_ARROW)) {
        hero.x += 5;
    } 
    
    if (keyIsDown(LEFT_ARROW)) {
        hero.x -= 5;
    }

}