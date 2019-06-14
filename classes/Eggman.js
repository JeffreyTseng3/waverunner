class Eggman {
    constructor() {
        this.dx = 2;
        this.dy = 2;
        this.spawn = true;

        this.body1 = eggmanBody1;
        this.body1x = 200;
        this.body1y = 200; 

        this.body2 = eggmanBody2;
        this.body2x = this.body1x;
        this.body2y = this.body1y;

        this.body3 = eggmanBody3;
        this.body3x = this.body1x + 75;
        this.body3y = this.body1y + 30;



    }

    drawEggmanBody() {
        if (this.spawn) {
            image(this.body1, this.body1x, this.body1y, 122, 159);
            image(this.body2, this.body2x, this.body2y, 58, 25);
            image(this.body3, this.body3x, this.body3y, 72, 30);
        }
    }

    

}