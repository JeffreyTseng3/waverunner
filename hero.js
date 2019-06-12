class Hero {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.length = 30;
        this.speed = 1;
        this.dy = 3;
        this.calcAverage = this.calcAverage.bind(this);
        this.calcMax = this.calcMax.bind(this);
    }

    move() {
        if (waveYArray[this.x] !== undefined) {
            wavesArray = waveYArray.slice(this.x - 15, this.x + 15);
        } else {
            wavesArray = [];
        }
       
       averageWave = this.calcAverage(wavesArray);
       maxVal = this.calcMax(wavesArray);

        // if (this.y + this.length < averageWave) {
        if (this.y + this.length < maxVal ) {
            this.y += this.dy;
        }  else if (this.y + this.length > waveYArray[this.x]) {
            // console.log('doom');
            // this.dy = 0;

        }
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

    calcAverage(wavesArray) {
        let total = 0;
        for (let i = 0; i < wavesArray.length; i++) {
            total += wavesArray[i];
        }
        return total / wavesArray.length;
    }
}

function keyPressed() {
    hero.y -= 100;
}




