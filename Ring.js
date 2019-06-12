class Ring {

    constructor(x,y ) {
       this.x = x;
       this.y = y;
       this.w = 30;
       this.h = 50;
       this.dx = 3;
    }

    drawRing() {
        stroke(255, 211, 0);
        fill(0);
        strokeWeight(5);
        ellipse(this.x, this.y, this.w, this.h);
    }

    moveRing() {
        if (song.isPlaying() && seekLinePos === 1050) {
            this.x -= this.dx;
        }
    }
}

