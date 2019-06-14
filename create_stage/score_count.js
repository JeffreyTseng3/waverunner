function drawScore() {
    stroke(255);
    rect(width - 100, height * 0.05, 100, 200);

    let ringsSum = 0;
    for (let i = 0; i < rings.length; i++) {
        let ring = rings[i];
        if (ring.collected) {
            ringsSum += 1;
        }
    }

    let enemySum = 0; 
    for (let i = 0; i < ships.length; i++) {
        let ship = ships[i];
        if (ship.destroyed) {
            enemySum += 1;
        }
    }

    let total = (ringsSum + enemySum).toString();

    let ringScore = 'rings: ' + ringsSum.toString();
    let enemyScore = 'destroyed: ' + enemySum.toString();
    text(ringScore, width - 90, 100);
    text(enemyScore, width - 90, 120);
    fill(255,255,255);
    textSize(14);
}
