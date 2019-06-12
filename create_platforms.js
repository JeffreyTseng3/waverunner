let newPlatformXPos = 250;

function createPlatforms() {
    for (let i = 0; i < 100; i++) {
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

// function rotatePlatforms(platformsArray) {
//     if (platformsArray[0].x < 0) {
//         let newPlatformsArray = platformsArray.slice(1, platformsArray.length).concat(platformsArray.slice(0,1));
//         return newPlatformsArray;
//     }
// }




