class Ring {

    constructor(x,y ) {
       this.x = x;
       this.y = y;
       this.w = 50;
       this.h = 50;
        // this.diam = 40;
       this.dx = 3;
       this.status = 'shrink';
    }

    drawRing() {
        if (this.w <= 50 && this.status === 'grow') {
            this.w -= 10;
            this.status = 'shrink';
        } else if (this.w >= 30 && this.status === 'shrink') {
            this.w += 10;
            this.status = 'grow';
        }
        stroke(255, 211, 0);
        fill(0);
        strokeWeight(5);
        ellipse(this.x, this.y, this.w, this.h);
        // circle(this.x, this.y, this.diam);
        
    }

    moveRing() {
        if (song.isPlaying() && seekLinePos === 1050) {
            this.x -= this.dx;
        }
    }
}

