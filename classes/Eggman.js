class Eggman {
    constructor() {
        this.dx = 2;
        this.dy = 2;
        this.spawn = true;

        this.body1 = eggmanBody1;
        this.body1x = 100;
        this.body1y = 100; 

        this.body2 = eggmanBody2;
        this.body2x = this.body1x;
        this.body2y = this.body1y;

        this.body3 = eggmanBody3;
        this.body3x = this.body1x ;
        this.body3y = this.body1y + 40;

        // this.thrust1 = thrust1;
        this.thrust1x = this.body1x + 120;
        this.thrust1y = this.body1y + 4;

        this.thrust2x = this.body1x + 104;
        this.thrust2y = this.body1y + 36;
        // this.thrust2 = thrust2;
        // this.thrust3 = thrust3;
        // this.thrust4 = thrust4;

        this.thrustIndex = 0;


        this.thrustArr = [eggmanThrust1, eggmanThrust1, eggmanThrust2, eggmanThrust2, eggmanThrust3, eggmanThrust3, eggmanThrust4, eggmanThrust4];


    }

    drawEggmanBody() {
        // if (this.spawn) {
            image(this.body1, this.body1x, this.body1y, 122, 159);
            image(this.body2, this.body2x, this.body2y, 58, 25);
            image(this.body3, this.body3x, this.body3y, 72, 30);

           
           
        // }
    }

    drawThrust() {
        image(this.thrustArr[this.thrustIndex % 8], this.thrust1x, this.thrust1y, 34, 30);
        image(this.thrustArr[this.thrustIndex % 8], this.thrust2x, this.thrust2y, 34, 30);
        this.thrustIndex += 1;

        
    }

    

}