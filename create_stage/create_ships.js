let newShipXPos = 600; 

function createShips() {
    for(let i = 0; i < 24; i++) {
        let x = newShipXPos;
        let y = Math.random() * 400 + 50;
        newShipXPos += 300;
        let newShip = new Ship(x, y);
        ships.push(newShip);
    }
}

function rotateShips(ships) {
    let latterSlice = ships.slice(1, ships.length);
    let prevSlice = ships.slice(0, 1)[0];

    prevSlice.x += 5600;
    let newShips = latterSlice.concat([prevSlice]);
    return newShips;
}