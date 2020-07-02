const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({keyFilename: "config/Comics-Reader-56dd54bd93d4.json"});

const translateText = async (text) => {
const target = 'ru';
const [translation] = await translate.translate(text.toLowerCase(), target);
return translation;
}
 
module.exports = {translateText};


