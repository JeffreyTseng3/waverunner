class Eggman {
    constructor() {
        this.dx = 5;
        this.dy = 2;
        this.spawn = true;

        this.body1 = eggmanBody1;
        this.body1x = 1300;
        this.body1y = 100; 

        this.body2 = eggmanBody2;
        this.body2x = this.body1x;
        this.body2y = this.body1y;

        this.body3 = eggmanBody3;
        this.body3x = this.body1x ;
        this.body3y = this.body1y + 40;

        this.thrust1x = this.body1x + 120;
        this.thrust1y = this.body1y + 4;

        this.thrust2x = this.body1x + 104;
        this.thrust2y = this.body1y + 36;


        this.thrustIndex = 0;

        this.thrustArr = [eggmanThrust1, eggmanThrust1, eggmanThrust2, eggmanThrust2, eggmanThrust3, eggmanThrust3, eggmanThrust4, eggmanThrust4];

        // right orientation 

        this.body1right = eggmanBodyRight1;
        this.body1rightx = -100; 
        this.body1righty = 400;

        this.body2right = eggmanBodyRight2;
        this.body2rightx = this.body1rightx + 65;
        this.body2righty = this.body1righty;

        this.body3right = eggmanBodyRight3;
        this.body3rightx = this.body1rightx + 52;
        this.body3righty = this.body1righty + 35;

        this.thrustArrRight = [eggmanThrustRight1, eggmanThrustRight1, eggmanThrustRight2, eggmanThrustRight2, eggmanThrustRight3, eggmanThrustRight3, eggmanThrustRight4, eggmanThrustRight4];
        this.thrust1Rightx = this.body1rightx - 32; 
        this.thrust1Righty = this.body1righty + 4;

        this.thrust2Rightx = this.body1rightx - 16;
        this.thrust2Righty = this.body1righty + 35;


        this.direction = 'left';

        this.hitCount = 0;
        this.invul = false;
        this.alive = true;
    }

    drawEggmanBody() {
        // if (this.spawn) {
        this.body2x = this.body1x;
        this.body2y = this.body1y;
        this.body3x = this.body1x;
        this.body3y = this.body1y + 40;



            image(this.body1, this.body1x, this.body1y, 122, 159);
            image(this.body2, this.body2x, this.body2y, 58, 25);
            image(this.body3, this.body3x, this.body3y, 72, 30);
        // }
    }

    drawEggmanBodyRight() {
        this.body2rightx = this.body1rightx + 65;
        this.body2righty = this.body1righty;
        this.body3rightx = this.body1rightx + 52;
        this.body3righty = this.body1righty + 35;
        image(this.body1right, this.body1rightx, this.body1righty, 122, 159);
        image(this.body2right, this.body2rightx, this.body2righty, 58, 25);
        image(this.body3right, this.body3rightx, this.body3righty, 72, 30);
    }

    drawThrust() {
        this.thrust1x = this.body1x + 120;
        this.thrust1y = this.body1y + 4;

        this.thrust2x = this.body1x + 104;
        this.thrust2y = this.body1y + 36;

        image(this.thrustArr[this.thrustIndex % 8], this.thrust1x, this.thrust1y, 34, 30);
        image(this.thrustArr[this.thrustIndex % 8], this.thrust2x, this.thrust2y, 34, 30);
        this.thrustIndex += 1;        
    }

    drawThrustRight() {
        this.thrust1Rightx = this.body1rightx - 32;
        this.thrust1Righty = this.body1righty + 4;

        this.thrust2Rightx = this.body1rightx - 16;
        this.thrust2Righty = this.body1righty + 35;
        image(this.thrustArrRight[this.thrustIndex % 8], this.thrust1Rightx, this.thrust1Righty, 34, 30);
        image(this.thrustArrRight[this.thrustIndex % 8], this.thrust2Rightx, this.thrust2Righty, 34, 30);
        this.thrustIndex += 1;
    }

    moveEggman() {
        this.body1x -= this.dx;
        // this.body2x -= this.dx;
        // this.body3x -= this.dx;
        // this.thrust1x -= this.dx;
        // this.thrust2x -= this.dx;
    }

    moveEggmanRight() {
        this.body1rightx += this.dx;
        // this.body2rightx += this.dx;
        // this.body3rightx += this.dx;
        // this.thrust1Rightx += this.dx;
        // this.thrust2Rightx += this.dx;
    }
    

}