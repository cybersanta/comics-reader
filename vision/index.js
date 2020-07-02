const Vision = require('@google-cloud/vision');
const fs = require('fs');

const client = new Vision.ImageAnnotatorClient({keyFilename: "config/Comics-Reader-56dd54bd93d4.json"});

const detectionText = async (image) => {

    image = image.replace(/(data:image\/png;base64,)/gm, "")
    const buff = new Buffer.from(image, 'base64');
    await fs.writeFileSync('./vision/new.png', buff);

    const [result] = await client.textDetection('./vision/new.png');
    fs.unlinkSync('./vision/new.png', buff);
    const detections = result.textAnnotations;
    console.log('Text:' + detections[0].description.replace(/(\r\n|\n|\r)/gm, " "));
    return detections[0].description.replace(/(\r\n|\n|\r)/gm, " ")

    
}
 
module.exports = {detectionText};


