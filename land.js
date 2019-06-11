let song;
let volumeArray = []; 
let waveYArray = [];

let heroSegments = 1;
let direction = 'down';
let xStart = 100;
let yStart = 400;



function setup() {
  createCanvas(1200, 800);
  song = loadSound('escape.mp3', loaded);
  amp = new p5.Amplitude();
  hero = new Hero();
}

function loaded() {
  console.log('loaded');
  button = createButton('play');
  button.mousePressed(toggle);
}

function toggle() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }

}

function draw() {
  background(0);
  drawWaves();
  hero.move();
  hero.display();
}

function drawWaves() {
  let vol = amp.getLevel();
  volumeArray.push(vol);
  waveYArray.push(map(vol, 0,0.5,height*0.8,0));

  stroke(255);
  noFill();
  beginShape();

  for (let i = 0; i < volumeArray.length; i++) {
    waveY = map(volumeArray[i], 0, 0.5, height * 0.8, 0);
    vertex(i*3, waveY); // draws waves
    line(0,640,i*3,640); // draws ground
  }
  endShape();
  
  // ends the earlier data
    if (waveYArray.length * 3 > width) {
        waveYArray.splice(0,1);
   }
  if (volumeArray.length*3 > width) {
    volumeArray.splice(0, 1);
  }

 
}

function keyPressed() {
  hero.y -= 100;
}



class Hero {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.diameter = 50;
    this.speed = 1;
  }

  move() {
    if (this.y + this.diameter/2 < waveYArray[this.x]) {

      this.y += 3;
    }
  }

  display() {
    square(this.x, this.y, this.diameter);
  }
}

