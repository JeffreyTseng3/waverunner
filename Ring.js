class Ring {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.dx = 3;
        this.rings = [ring1, ring2, ring3, ring4, ring5, ring4, ring3, ring2];
        this.ringIndex = 0;
        this.diam = 30;
        this.collected = false;
    }

    drawRing() {
        if (this.collected === false) {
            image(this.rings[this.ringIndex % 8], this.x, this.y, this.diam, this.diam );
            this.ringIndex += 1;
        } else {
           
        }
    }

    moveRing() {
        if (song.isPlaying() && seekLinePos === 1050) {
            this.x -= this.dx;
        }
    }

   
}

