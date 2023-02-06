const rand_x = [-20, -15, -10, -5, 0, 5, 10, 15, 20]
const alpha = [40, 80, 120, 160];

function rand_pos() {
  r = Math.floor(random(9));
  return rand_x[r];
}

function setup() {
  //Create the Canvas
  createCanvas(800, 1200);

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
  }

}

function draw() {
}
