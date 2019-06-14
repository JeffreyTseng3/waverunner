function spawnPlatforms() {
    platforms.forEach(platform => platform.drawPlatform());
    platforms.forEach(platform => platform.movePlatform());
    platforms.forEach(platform => platform.displayPlatform());
    if (platforms[0].x + 100 < 0) {
        platforms = rotatePlatforms(platforms);
    }
}


function spawnShips() {
    ships.forEach(ship => ship.drawShip());
    ships.forEach(ship => ship.moveShip());
    if (ships[0].x + 100 < 0) {
        ships = rotateShips(ships);
    }
}

function spawnRings() {
    rings.forEach(ring => ring.drawRing());
    rings.forEach(ring => ring.moveRing());
          // if (rings[0].x + 30 < 0) {
          //   rings = rotateRings(rings);
          // }
}

