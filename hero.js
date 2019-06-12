class Hero {
    constructor() {
        this.x = 100;
        this.y = 50;
        this.length = 30;
        this.speed = 1;
        this.dy = 0;
        // this.calcAverage = this.calcAverage.bind(this);
        this.calcMax = this.calcMax.bind(this);
    }

    move() {
        if (waveYArray[this.x] !== undefined) {
            wavesArray = waveYArray.slice(this.x - 15, this.x + 15);
        } else {
            wavesArray = [];
        }

        maxVal = this.calcMax(wavesArray);

        if (this.y + this.length > platforms[0].y) {
            // console.log('doom');
        } else {
            this.dy += 1;
            this.y += this.dy;
        }






        // if (this.y + this.length < maxVal ) {
        //     this.y += this.dy;
        // }  else if (this.y + this.length > waveYArray[this.x]) {
        // //   console.log('doom');
        // } else if (this.y + this.length > platforms[0].y) {
        //     // this.y += dy;
        //     console.log('stand');
        // }
    }

    display() {
        square(this.x, this.y, this.length);
    }

    calcMax(wavesArray) {
        let max = wavesArray[0];
        for (let i = 0; i < wavesArray.length; i++) {
            if (wavesArray[i] > max) {
                max = wavesArray[i];
            }
        }
        return max;
    }

    // calcAverage(wavesArray) {
    //     let total = 0;
    //     for (let i = 0; i < wavesArray.length; i++) {
    //         total += wavesArray[i];
    //     }
    //     return total / wavesArray.length;
    // }
}







