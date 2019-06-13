let newRingXPos = 400;

function createRings() {
    for (let i = 0; i < 24; i++) {
        let x = newRingXPos;
        let y = Math.random() * 400 + 50;
        newRingXPos += 200;
        let newRing = new Ring(x, y);
        rings.push(newRing);
    }
}


function rotateRings(rings) {
    let latterSlice = rings.slice(1, rings.length);
    let prevSlice = rings.slice(0, 1)[0];

    prevSlice.x += 5600; 
    prevSlice.collected = false;
    let newRings = latterSlice.concat([prevSlice]);
    return newRings;
}