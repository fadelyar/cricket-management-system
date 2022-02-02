const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();
 
const attributes = {fill: 'cyan', stroke: 'white'};
const options = {
   x: 0, y: 0, fontSize: 50,
   anchor: 'top', attributes: attributes,
   letterSpacing: 0.1
};
 
const svg = textToSVG.getSVG('Software Engieering is fun', options);
 
console.log(svg);