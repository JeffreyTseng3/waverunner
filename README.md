# README

# Wave Runner


A side-scrolling platform game that renders audio waveforms and obstacles for the user to bypass.
If the player collects up to a number of coins and destroys a number of enemies, then Dr. Eggman, the boss, will appear. 


The below is a screenshot of what the game looks like. 
![Game Sample](https://github.com/JeffreyTseng3/waverunner/blob/master/README_images/waverunner_screenshot.png?raw=true)




## Coding Languages and Tools
+ Javascript 
+ p5
+ CSS3 

## Resources
+ Sprite Sheets (https://www.spriters-resource.com/custom_edited/sonicthehedgehogcustoms/)
+ p5 References (https://p5js.org/reference/)
+ Coding Train (https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)

## Difficulties
The difficulties for this project include the following
+ Player Controls 
+ Collision Detection
+ Stage Rendering 

## Player Controls
The user controlled hero is controlled by left/right/jump inputs and whether or not the
user is touching a platform, out-of-bounds, or hitting an enemy object. 


The following code allows ther user to jump and to move left/right. There is a jump limit, which is being accounted for. The 'return false' statements prevent the default action of each button. On each jump, sounds for jumping are rendered. 

On moving left and right, the 'rightDir' and 'lastDir' properties are to account for changes for where the sprite is facing. 


```javascript 

function keyTyped(e) {
    if (hero.alive) {
            if (key === ' ' ) {
                if (currentJump < jumpLimit) {
                    hero.y -= 10;
                    hero.dy = -15;
                    currentJump += 1;
                    jumpWav.play();
                    e.preventDefault();
                    return false;
                }
            }
    }
    return false;
}


function heroCommands() {
    if (hero.alive) {
        if (keyIsDown(RIGHT_ARROW)) {
            hero.x += 5;
            hero.rightDir = true;
            
            hero.lastDir = 'right';
        } else{
            hero.rightDir = false;
        }
        
        if (keyIsDown(LEFT_ARROW)) {
            hero.x -= 5;
            hero.leftDir = true;
            hero.lastDir = 'left';
        } else {
            hero.leftDir = false;
        }

        if (keyIsDown(DOWN_ARROW)) {
            hero.y += 5;
        }
    }
    return false;
}


```


## Collision Detection 
To accomplish this, I determine whether or not the user's sprite is within the bounds of another object of interest. 

The below is a function for the user controlled object. This function checks if for coin, ship, and eggman objects while the class has a property of alive. It checks for it is grounded, or on a platform, and if it is out of boundaries. If it is grounded, then set its changing in y to 0, and if it is on a platform, have the object move witht he plaform. If the object is not grounded, then there is a downward acceleration and change in y. 

```javascript
    move() {
            if (this.alive) {
                this.checkRing(this.x, this.y);
                this.checkShip(this.x, this.y);
                this.checkEggman(this.x, this.y);
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
``` 


## Stage Rendering
Rendering the stage required multiple items, sprite sheets for platforms, rings, and enemies, and some musical analysis to render waveforms. 


The below section of the code is heavily inspired by this Coding Train lesson on Youtube (https://youtu.be/jEwAMgcCgOA) and served to be the main inspiration of building this game. The below code analyzes the amplitude of the music being played and saves it into an array for analysis. I use this array to render the differing heights in relation to the amplitude. In other areas of my code, I check to see if the user character is in the boundaries of the music waveform, and is considered a game over if they touch.

```javascript 
    function drawWaves() {
    let vol = amp.getLevel();

    volumeArray.push(vol);
    waveYArray.push(map(vol, 0, 1,height * 0.9, 0));

    stroke(255, 255, 0);
    strokeWeight(1);
    noFill();

    beginShape();
    for (let i = 0; i < volumeArray.length; i++) {
        waveY = map(volumeArray[i], 0, 1.2, height * 0.9, 0); 
        seekLinePos = i * 3;
        line(i * 3, height * 0.9, i*3, waveY);

    }
    endShape();
    splicePrevValues();
    drawSoundLine();
    }
``` 