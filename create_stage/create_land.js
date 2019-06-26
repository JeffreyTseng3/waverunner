
function drawWaves() {
  let vol = amp.getLevel();

  volumeArray.push(vol);
  waveYArray.push(map(vol, 0, 1,height * 0.9, 0)); // adjust third value to affect height death.

  stroke(255, 255, 0);
  strokeWeight(1);
  noFill();

  beginShape();
  for (let i = 0; i < volumeArray.length; i++) {
    waveY = map(volumeArray[i], 0, 1.2, height * 0.9, 0); // adjust third value according to volume amp
    // vertex(i*3, waveY); // draws waves
    // line(i , height, i, waveY);
    seekLinePos = i * 3;
    line(i * 3, height * 0.9, i*3, waveY);
    // line(0,640,i*3,640); // draws ground
  }
  endShape();
  splicePrevValues();
  drawSoundLine();
}

function splicePrevValues() {
  if (waveYArray.length * 3 > width - 150) { // width - 150 prevents seeker line from going to end of page
  // if (waveYArray.length > width - 150) { // width - 150 prevents seeker line from going to end of page
    waveYArray = waveYArray.slice(1, waveYArray.length);
  }

  if (volumeArray.length * 3 > width - 150) {
  // if (volumeArray.length  > width - 150) {
    volumeArray = volumeArray.slice(1, volumeArray.length);
  }
}


function drawSoundLine() {
  stroke(0, 191, 255);
  line(volumeArray.length * 3, 0, volumeArray.length * 3, height)
  // line(volumeArray.length, 0, volumeArray.length , height)
}
 
function darkSide() {
  stroke(0);
  fill(0);
  rect(seekLinePos + 4, 0, width - seekLinePos, 700);
}

