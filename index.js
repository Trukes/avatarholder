const Canvas = require('canvas');


exports.printMsg = function() {
    console.log("This is a message from the demo package . Hello World");
}

exports.generateAvatar = function(params){
  return this.createCanvas(params);
}

exports.createCanvas = (params) => {
  const canvas = Canvas.createCanvas(params.width, params.height);
  console.log(canvas);
  const ctx = canvas.getContext('2d');

  ctx.globalAlpha = 1;
  ctx.fillStyle = params.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font="35px Arial";
  ctx.fillStyle = "#000";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("PC",canvas.width/2 ,canvas.height/2);
 
  let image = canvas.toDataURL();

  // save img
  // Canvas2Image.saveAsImage(c, 200, 100, 'png');

  return image;

}