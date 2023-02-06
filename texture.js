const CANVAS_HEIGHT = 2400;
const CANVAS_WIDTH = 1600;

const BASE_H = 15;
const BASE_S = 10;
const BASE_B = 100;

const rand_x = [-20, -15, -10, -5, 0, 5, 10, 15, 20]
const alpha = [40, 80, 120, 160];

function rand_pos() {
  r = Math.floor(random(9));
  return rand_x[r];
}

function texturize (density) {
  for(let i = 0; i < density; i++) {
    stroke(
      242,
      232 - Math.random() * 5,
      220 - Math.random() * 8,
      Math.random() * 10 + 75,
      40
    );

    let texture_x1 = Math.random() * CANVAS_WIDTH;
    let texture_y1 = Math.random() * CANVAS_HEIGHT;
    let theta = Math.random() * 2 * Math.PI;
    let segmentLength = Math.random() * 7 + 2;
    let texture_x2 = Math.cos(theta) * segmentLength + texture_x1;
    let texture_y2 = Math.sin(theta) * segmentLength + texture_y1;

    line(texture_x1, texture_y1, texture_x2, texture_y2);
  }
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    let amarelo = color('#F29F05');
    let azul = color('#243E73');
    let back_color = color('#F2E8DF');
    let verde = color('#167351');
    let laranja = color('#F28705');
  
  
    noStroke();
    background(back_color);
    for (let i = 0; i < 3; i++){
      beginShape();
      azul.setAlpha(alpha[i]);
      fill(azul);
      vertex(80+rand_pos()*(i), 100+rand_pos()*(i));
      vertex(320+rand_pos()*(i), 100+rand_pos()*(i));
      vertex(720+rand_pos()*(i), 100+rand_pos()*(i));
      vertex(720+rand_pos()*(i), 500+rand_pos()*(i));
      vertex(720+rand_pos()*(i), 1100+rand_pos()*(i));
      vertex(320+rand_pos()*(i), 1100+rand_pos()*(i));
      vertex(80+rand_pos()*(i), 1100+rand_pos()*(i));
      vertex(80+rand_pos()*(i), 500+rand_pos()*(i));
      endShape(CLOSE);
      texturize(20000);
    }

    // texturize(30000);
}