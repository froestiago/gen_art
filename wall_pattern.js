const rand_x = [-3, -2, -1, 0, 1, 2, 3]
const CANVAS_WIDTH = 2000
const CANVAS_HEIGHT = 1000

function rand() {
  r = Math.floor(random(7));
  return rand_x[r];
}

function setup() {

  let amarelo = color('#F29F05');
  let azul = color('#243E73');
  let back_color = color('#F2E8DF');
  let verde = color('#167351');
  let laranja = color('#F28705');
  let paper_noise = '#F2E8DC';
  //Create the Canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  noStroke();
  background(back_color);
//   fill(background_color);
  
  for (let lineX = 0; lineX <= width; lineX += (100)) {
    for (let lineY = 0; lineY <= height; lineY += (100)) {
        fill(azul);
        if_color = Math.floor(random(100));
        if (if_color == 7) {
          fill(amarelo);
        }

        x1 = lineX+10+rand()*2.5;
        y1 = lineY+10+rand()*2.5;
        
        x2 = lineX+100+rand()*2.5;
        y2 = lineY+10+rand()*2.5;
        
        x3 = lineX+70+rand()*2.5;
        y3 = lineY+100*2.5;
        
        x4 = lineX+10*2.5;
        y4 = lineY+100+rand()*2.5;
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
  }
  // texturize(15000);
  // saveCanvas('data/myCanvas', 'png');
texturize(100000, 50, paper_noise);
}

function draw() {
}

function texturize (density, lenght_factor, hex_color_code) {
  let rgb = hexToRgb(hex_color_code);
  print(rgb)
  for(let i = 0; i < density; i++) {
    stroke(
      rgb[0],
      rgb[1] - Math.random() * 5,
      rgb[2] - Math.random() * 8,
      Math.random() * 10 + 75,
      40
    );

    let texture_x1 = Math.random() * CANVAS_WIDTH;
    let texture_y1 = Math.random() * CANVAS_HEIGHT;
    let theta = Math.random() * 2 * Math.PI;
    let segmentLength = Math.random() * lenght_factor + 2;
    let texture_x2 = Math.cos(theta) * segmentLength + texture_x1;
    let texture_y2 = Math.sin(theta) * segmentLength + texture_y1;

    line(texture_x1, texture_y1, texture_x2, texture_y2);
  }
}


function hexToRgb(hex) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b];
}
