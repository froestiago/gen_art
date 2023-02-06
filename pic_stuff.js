let blue;
let yellow;
let img;
let ditherType = 'atkinson';

function preload() {
  img = loadImage('data/myCanvas.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  blue = new Riso('blue');
  yellow = new Riso('yellow');
}

function draw() {
  background(220);

  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold);
  blue.image(dithered, 0, 0);
  // yellow.image(dithered, 10, 1);

  drawRiso();
}

function mouseClicked() {
  exportRiso();
}

function keyReleased() {
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}