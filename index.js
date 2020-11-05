let _ = require('lodash');
let Canvas = require('canvas');
let fs = require('fs');

exports.generateAvatar = function(text, params){
  return this.createCanvas(text, params);
}

exports.generateAvatarToFile = function(text, path, params){
  let image = this.createCanvas(text, params);

  var base64Data = image.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(path, base64Data, 'base64', function(err) {
    // console.log(err);
  });
  return path;
}

exports.createCanvas = (text, params) => {

  let bgColor =  _.get(params, 'bgColor', this.getColor());

  let defaults = {
    width: _.get(params, 'size', 100),
    height: _.get(params, 'size', 100),
    font: _.get(params, 'font', this.getFont(_.get(params, 'size', 100))),
    bgColor: bgColor,
    color: _.get(params, 'color', this.invertColor(bgColor, 1))
  }
  
  const canvas = Canvas.createCanvas(defaults.width, defaults.height);
  const ctx = canvas.getContext('2d');

  ctx.globalAlpha = 1;
  ctx.fillStyle = defaults.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //works with images
  ctx.globalAlpha = 0.7;
  ctx.font=defaults.font;
  ctx.fillStyle = defaults.color;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(this.getInitials(text),canvas.width/2 ,canvas.height/2);
 
  let image = canvas.toDataURL();

  return image;

}



exports.getFont = (canvasWidth) => {
  var size = canvasWidth / 2.5;
  return (size|0) + 'px sans-serif'; // set font
}

exports.getColor = () => {
  let hex = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  // validate if is a color
  if (hex.indexOf('#') === 0) {
    hexTest = hex.slice(1);
  }
  if (hexTest.length !== 6 && hexTest.length !== 3) {      
    return this.getColor();
  }
  
  return hex;
}

exports.getInitials = (text) => {

  let input = text.toUpperCase();
  let result = input; 

  let inputSeparetedBySpaces = input.split(" ");
  if(inputSeparetedBySpaces.length > 1){
    result = this.getInitialsFromArray(inputSeparetedBySpaces);
  } else { 
    if(input.length > 2){
      result = input.substring(0, 2);
    }
  }

  return result;
} 

exports.getInitialsFromArray = (arr) => {

  let textResult = '';

  for(var i in arr){
    if(i == 0 || i == (arr.length - 1) ){
      textResult += arr[i].substring(0, 1);
    } 
  }

  return textResult;
}


exports.invertColor = (hex, bw) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + this.padZero(r) + this.padZero(g) + this.padZero(b);
}

exports.padZero = (str, len) => {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}