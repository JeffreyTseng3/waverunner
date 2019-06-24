function spawnPlatforms() {

    platforms.forEach(platform => platform.drawPlatform());
    platforms.forEach(platform => platform.movePlatform());
    // platforms.forEach(platform => platform.displayPlatform());
    if (platforms[0].x + 100 < 0) {
        platforms = rotatePlatforms(platforms);
    }
}


function spawnShips() {
    ships.forEach(ship => ship.drawShip());
    ships.forEach(ship => ship.moveShip());
    // ships.forEach(ship => ship.playMusicShip());
    if (ships[0].x + 100 < 0) {
        ships = rotateShips(ships);
    }
}

function spawnRings() {
    rings.forEach(ring => ring.drawRing());
    rings.forEach(ring => ring.moveRing());
    // rings.forEach(ring => ring.playMusicRing());
          if (rings[0].x + 30 < 0) {
            rings = rotateRings(rings);
          }
}

function spawnEggman() {
    // parseInt(ringScore) >= 1 && 
    if (eggman.body1x >= -150) {
        if (eggman.body1x === -150) {
            eggman.body1rightx = -150;
            eggman.body1righty = hero.y;
            eggman.invul = false;
        }
        eggman.direction = 'left';
        eggman.drawEggmanBody();
        eggman.moveEggman();
        eggman.drawThrust();

    } else if (eggman.body1rightx <= 1350) {
        if (eggman.body1rightx === 1350) {
            eggman.body1x = 1350;
            eggman.body1y = hero.y;
            eggman.invul = false;
        }
        eggman.direction = 'right';

        eggman.drawEggmanBodyRight();
        eggman.moveEggmanRight();
        eggman.drawThrustRight();
    }
    // eggman.drawThrust();
    // eggman.drawThrustRight();
}
