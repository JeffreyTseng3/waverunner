class Ship {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.yRange = [this.y - 10, this.y + 10];
        this.dir = 'up';
        this.dx = 3;
        this.dy = 1;
        this.ships = [ship1, ship1, ship2, ship2, ship1, ship1, ship3, ship3];
        this.shipIndex = 0;
    }

    drawShip() {
        image(this.ships[this.shipIndex % 8], this.x, this.y, 90, 50);
        this.shipIndex += 1;
    }

    moveShip() {
        if (this.dir === 'up') {
            this.y -= this.dy;
            if (this.y === this.yRange[0]) {
              this.dir = 'down';  
            }
        } else {
            this.y += this.dy;
            if (this.y === this.yRange[1] ) {
                this.dir = 'up'
            }
        }
    }

    moveShip() {
        if (song.isPlaying() && seekLinePos === 1050) {
            this.x -= this.dx;
        }
    }
}