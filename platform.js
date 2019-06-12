// let xStart = 100;
// let yStart = 400;

// let rectX = 70;
// let rectY = 130;

// let fr = 30;




class Platform {
    constructor() {
        this.x = 70;
        this.y = 130;
        this.xStart = 100;
        this.yStart = 400;
        this.fr = 30;
    }

    drawPlatform() {
        // this.x = this.x -= 5
        stroke(60, 179, 113)
        fill(60, 179, 113);
        rect(this.x, this.y, 100, 20);
    }
}