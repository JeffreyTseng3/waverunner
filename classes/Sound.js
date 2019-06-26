function Sound(x,y) {


        this.x = x;
        this.y = y;
        this.soundOn = soundOn;
        this.soundOff = soundOff;


    this.drawSound = () => {
        image(this.soundOn, 100, 100, 200, 200);
    }

 

}