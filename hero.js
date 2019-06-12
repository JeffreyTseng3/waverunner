class Hero {
    constructor() {
        this.x = 100;
        this.y = 50;
        this.length = 30;
        this.speed = 1;
        this.dy = 0;
        this.dx = 3;
        this.checkGrounded = this.checkGrounded.bind(this);
        this.grounded = false;
        this.calcAverage = this.calcAverage.bind(this);
        this.calcMax = this.calcMax.bind(this);
    }

    move() {
        if (waveYArray[this.x] !== undefined) {
            wavesArray = waveYArray.slice(this.x - 15, this.x + 15);
        } else {
            wavesArray = [];
        }

        this.checkGrounded(this.x, this.y + this.length);


     

        if (this.grounded) {
            console.log('doom');
            this.dy = 0; 
            if (song.isPlaying() && seekLinePos === 1050)   {
                this.x -= this.dx;
            }
        } else {
            this.dy += 1;
            this.y += this.dy;
        }

        // if (hero.y + this.length > waveYArray[hero.x]) {
        //     this.dy = 0;
        //     this.y = 100;
        // }
    }

    checkGrounded(heroX, heroY) {
        let belowPlatform;


        for (let i = 0; i < platforms.length; i++) {
            let platform = platforms[i];
            
            if (platform.x < heroX + this.length && platform.x + 100 > heroX) {
                belowPlatform = platform;
            }
        }
        
        wavesArray = waveYArray.slice(heroX/3, heroX/3 + 30);
        
        let average = this.calcAverage(wavesArray);
        // let max = this.calcMax(wavesArray);

        if (hero.y + this.length > average && hero.y + this.length < average + 50 ) {
        // if (hero.y + this.length > max && hero.y + this.length < max + 50 ) {
            this.grounded = true;
        } else if  (belowPlatform) {
            let belowYRange = [belowPlatform.y, belowPlatform.y + 20]
            if (heroY >= belowYRange[0] && heroY <= belowYRange[1]) {
                this.grounded = true;
            } else {
                this.grounded = false;
            }
        } else {
            this.grounded = false;
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







