class Hero {
    constructor() {
        this.x = 100;
        this.y = 50;
        this.length = 30;
        this.speed = 1;
        this.dy = 0;;
        this.dx = 3;
        this.checkGrounded = this.checkGrounded.bind(this);
        this.grounded = false;
        this.calcAverage = this.calcAverage.bind(this);
        this.calcMax = this.calcMax.bind(this);
        this.jumpAnimateIndex = 0;
        this.runAnimateIndex = 0;
        this.run = [sonicRun1, sonicRun2, sonicRun3, sonicRun4];
        this.runLeft = [runLeft1, runLeft2, runLeft3, runLeft4];
        this.jump = [jump1, jump2, jump3, jump4, jump5];
        this.jumpLeft = [jumpLeft1, jumpLeft2, jumpLeft3, jumpLeft4, jumpLeft5];
        this.loss = [loss1, loss2];
        this.rightDir = false; 
        this.leftDir = false; 
        this.lastDir = 'right'; // used in herocontrols
        this.alive = true;
        this.lossIndex = 0;
    }

    move() {
        if (hero.alive) {
            if (waveYArray[this.x] !== undefined) {
                wavesArray = waveYArray.slice(this.x - 15, this.x + 15);
            } else {
                wavesArray = [];
            }
    
            this.checkGrounded(this.x, this.y + this.length);
    
            if (this.grounded) {
      
                this.dy = 0; 
                if (song.isPlaying() && seekLinePos === 1050)   {
                    this.x -= this.dx;
                }
            } else {
                this.dy += 0.7;
                this.y += this.dy;
            }
        } else { // loss
            
            this.y += this.dy;
        }
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

        if (this.alive) {
            if (hero.y + this.length > average && hero.y + this.length < average + 50 ) {
                // game over
                
                this.alive = false;
    

                // this.grounded = false;
                // currentJump = jumpLimit;
            } else if  (belowPlatform) {
                // on platform
                let belowYRange = [belowPlatform.y, belowPlatform.y + 30]
                if (heroY >= belowYRange[0] && heroY <= belowYRange[1]) {
                    // grounded if on platform
                    this.grounded = true;
                    currentJump = 0;
                    this.y = belowPlatform.y - 30;
                
                } else {
                    // if off the platform, then not grounded
                    this.dy += 0.7;

                    this.grounded = false;
                }
            } else {
                // not grounded if not on the music 
                this.dy += 0.7;

                this.grounded = false;
            }
        }
       
    }


   
    display() {
        strokeWeight(1);
        stroke(0, 191, 255);
        noFill();

        // lose if touch wall
        
        if (this.x < 0) {
            this.alive = false;
        }
        

        if (this.alive) {
            if (this.grounded && this.rightDir) {
                image(this.run[this.runAnimateIndex % 4], this.x, this.y);
                this.runAnimateIndex += 1;
            } else if (this.grounded && this.leftDir) {
                image(this.runLeft[this.runAnimateIndex % 4], this.x, this.y);
                this.runAnimateIndex += 1;
            } else if (this.grounded && this.lastDir === 'right') {
                image(sonicStandSprite, this.x, this.y);
            } else if (this.grounded && this.lastDir === 'left') {
                image(sonicStandSpriteLeft, this.x, this.y);
            } else if (this.lastDir === 'right'){
                image(this.jump[this.jumpAnimateIndex % 5], this.x, this.y);
                this.jumpAnimateIndex += 1;
            } else {
                image(this.jumpLeft[this.jumpAnimateIndex % 5], this.x, this.y);
                this.jumpAnimateIndex += 1;
            };
        } else { // loss
            if (this.lossIndex === 0) {
                this.grouded = true;
                this.dy = 0;
                image(this.loss[this.lossIndex], this.x, this.y);   
                setTimeout(() => this.lossIndex += 1, 1000);
            }  else if (this.lossIndex !== 0 && this.grouded === true) {
                image(this.loss[1], this.x, this.y);
                this.dy += 2;
                this.y -= 30;
                
                if (this.lossIndex !== 0) {
                    this.grounded = false;
                }

            }
        }

        // square(this.x, this.y, this.length);
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







