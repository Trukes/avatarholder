const _ = require('lodash');
const Canvas = require('canvas');

exports.generateAvatar = function(text, params){
  return this.createCanvas(text, params);
}

exports.createCanvas = (text, params) => {

  let defaults = {
    width: _.get(params, 'width', 100),
    height: _.get(params, 'height', 100),
    font: _.get(params, 'font', this.getFont(_.get(params, 'width', 100))),
    bgColor: _.get(params, 'bgColor', '#eee'),
    color: _.get(params, 'color', '#000')
  }
  
  const canvas = Canvas.createCanvas(defaults.width, defaults.height);
  const ctx = canvas.getContext('2d');

  // let font = this.getFont(canvas.width, defaults.font, params.width);

  ctx.globalAlpha = 1;
  ctx.fillStyle = defaults.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font=defaults.font;
  ctx.fillStyle = defaults.color;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text,canvas.width/2 ,canvas.height/2);
 
  let image = canvas.toDataURL();

  // save img
  // Canvas2Image.saveAsImage(c, 200, 100, 'png');

  return image;

}


exports.getFont = (canvasWidth) => {
  var size = canvasWidth / 2.5;
  return (size|0) + 'px sans-serif'; // set font
}