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

    




    let score = 'score: ' + ringsSum.toString();
    text(score, width - 70, 100);
    fill(255,255,255);
    textSize(14);
}
