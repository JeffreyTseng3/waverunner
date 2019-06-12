let newPlatformXPos = 250;

function createPlatforms() {
    for (let i = 0; i < 6; i++) {
        if (i === 0) {
            let newPlatform = new Platform(70, 330, 30)
            platforms.push(newPlatform);
        } else {
            let x = newPlatformXPos;
            let y = Math.random() * 400 + 50;
            newPlatformXPos += 200;
            let fr = 30;
            let newPlatform = new Platform(x, y, fr)
          
            platforms.push(newPlatform);
        }
    }
}    

function rotatePlatforms(platforms) {
    let latterSlice = platforms.slice(1, platforms.length)
    let prevSlice = platforms.slice(0, 1)[0];
    console.log(prevSlice);
    
    prevSlice.x += 1200;
        let newPlatforms =latterSlice.concat([prevSlice]);

        return newPlatforms;

}




