// let xStart = 100;
// let yStart = 400;

// let rectX = 70;
// let rectY = 130;

// let fr = 30;




class Platform {
    constructor(x, y, fr) {
        this.x = x;
        this.y = y;
        this.dx = 2;
        this.fr = fr;
    }

    drawPlatform() {
        // this.x = this.x -= 5
        stroke(0);
        rect(this.x, this.y, 100, 20);
    }

    movePlatform() {
        if (song.isPlaying() && seekLinePos === 1050) {
            this.x -= this.dx;
        }
    }

    displayPlatform(firstPlatform) {

         if (firstPlatform === 'first') {
            stroke(60, 179, 113)
            fill(60, 179, 113);
            rect(this.x, this.y, 100, 20);  
        } else if (this.x < seekLinePos) {
            stroke(60, 179, 113)
            fill(60, 179, 113);
            let wide;
            if (seekLinePos - this.x < 100) {
                wide = seekLinePos - this.x;
            } else {
                wide = 100;
            }
            rect(this.x, this.y, wide, 20);

        }
    }

}