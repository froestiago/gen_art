let pink;
let img;

function preload() {
  img = loadImage('data/BLUE.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);
//   pink = new Riso('fluorescentpink'); // create pink layer
  let azul = new Riso('blue');
  // let pink_1 = new Riso([175,124,131])
  // let pink_2 = new Riso([207,152,158])
  background(220);
  clearRiso();


  // halftoneImage(img, shape, frequency, angle, intensity)
  let halftoned_1 = halftoneImage(img, 'circle', 100, 90, 4); // pass image to halftone with line dots, frequency of 3, angle of 45, and intensity of 90.
  let halftoned_2 = halftoneImage(img, 'line', 7, 37, 1); // pass image to halftone with line dots, frequency of 3, angle of 45, and intensity of 90.
  // pink_1.image(halftoned_1, 0, 0); // draw halftoned image
  // pink_2.image(halftoned_2, 5, 0); // draw halftoned image
  azul.image(halftoned_1, 0, 0)

  drawRiso();
}

function draw() {
}

// #875B5C - 135,91,92
// #AF7C83 - 175,124,131 x
// #CF989E - 207,152,158 x
// #C1929C - 193,146,156
// #A66A6C - 166,106,108