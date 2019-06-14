class Hero {
    constructor() {
        this.x = 100;
        this.y = 50;
        this.dy = 0;;
        this.dx = 3;
        this.length = 30;
        this.speed = 1;
        
        this.alive = true;
        this.grounded = false;
        this.rightDir = false; 
        this.leftDir = false; 
        this.lastDir = 'right'; // used in herocontrols
        
        this.run = [sonicRun1, sonicRun2, sonicRun3, sonicRun4];
        this.runLeft = [runLeft1, runLeft2, runLeft3, runLeft4];
        this.jump = [jump1, jump2, jump3, jump4, jump5];
        this.jumpLeft = [jumpLeft1, jumpLeft2, jumpLeft3, jumpLeft4, jumpLeft5];
        this.loss = [loss1, loss2];
        
        this.jumpAnimateIndex = 0;
        this.runAnimateIndex = 0;
        this.lossIndex = 0;
        
        this.ringsCollected = 0;
        this.shipsDestroyed = 0;
        this.enemyJump = 0;

        this.checkGrounded = this.checkGrounded.bind(this);
        this.calcAverage = this.calcAverage.bind(this);
        this.checkRing = this.checkRing.bind(this);
        this.checkShip = this.checkShip.bind(this);
        this.checkOutOfBoundary = this.checkOutOfBoundary.bind(this);
    }

    move() {
        if (this.alive) {

            this.checkRing(this.x, this.y);
            this.checkShip(this.x, this.y);
            
        }
        this.checkGrounded(this.x, this.y + this.length);
        this.checkOutOfBoundary();

        if (hero.alive) {
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

        if (this.alive) {
            let averageWaveLossBoundary = this.calcAverage(heroX, heroY);
            let inRangePlatform;
            for (let i = 0; i < platforms.length; i++) {
                let platform = platforms[i];

                if (platform.x < heroX + this.length && platform.x + 100 > heroX) {
                    inRangePlatform = platform;
                }
            }

            if (hero.y + this.length > averageWaveLossBoundary && hero.y + this.length < averageWaveLossBoundary + 50 ) {
                // game over 
                this.alive = false;
                // currentJump = jumpLimit;
            } else if (inRangePlatform) { // if inrangeplatform is in line
                // on platform
                let inRangePlatformBoundaryY = [inRangePlatform.y, inRangePlatform.y + 30]
                if (heroY >= inRangePlatformBoundaryY[0] && heroY <= inRangePlatformBoundaryY[1]) {
                    // grounded if on platform
                    this.grounded = true;
                    currentJump = 0;
                    this.y = inRangePlatform.y - 30;
                } else {
                    // if off the platform, then not grounded
                    this.dy += 0.7;
                    this.grounded = false;
                }
        } else { // else not alive
                // not grounded if not on the music 
                this.dy += 0.7;
                this.grounded = false;
            }
        }
       
    }

    checkOutOfBoundary() {
        if (this.x < 0) {
            this.alive = false;
        }
    }

   
    display() {
        strokeWeight(1);
        stroke(0, 191, 255);
        noFill();

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


    checkRing(heroX, heroY) {
        let columnRing;

        for (let i = 0; i < rings.length; i++) {
            let ring = rings[i];

            if (ring.x - 5 < heroX + this.length && ring.x + 30 > heroX) { // 16 is pixel width
                columnRing = ring;
            }
        }

        if (columnRing) {
            if (hero.y + this.length + 10 > columnRing.y && hero.y + this.length < columnRing.y + 30) {
                columnRing.collected = true;
                columnRing = false;
            }
        } 
    }
    
    checkShip(heroX, heroY) {
        let columnShip;

        for (let i = 0; i < ships.length; i++) {
            let ship = ships[i];

            if (ship.x + 5 < heroX + this.length && ship.x + 65 > heroX) { // 16 is pixel width
                columnShip = ship;
            }
        }

        if (columnShip && columnShip.destroyed === false) {

            if (hero.y + this.length + 2 > columnShip.y && hero.y + this.length < columnShip.y + 60) {
                columnShip.destroyed = true;
                this.y -= 30;
                this.dy = -10;     
            }
        } 
    }


    calcAverage(heroX, heroY) {
        let total = 0;

        // sets up array for calculating average
        if (waveYArray[this.x] !== undefined) {
            wavesArray = waveYArray.slice(this.x - 15, this.x + 15);
        } else {
            wavesArray = [];
        }

        wavesArray = waveYArray.slice(heroX / 3, heroX / 3 + 30);
        
        for (let i = 0; i < wavesArray.length; i++) {
            total += wavesArray[i];
        }
        return total / wavesArray.length;
    }


}







