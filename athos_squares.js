const rand_x = [-4, -3, -2, -1, 0, 1, 2, 3, 4]

function rand() {
  r = Math.floor(random(7));
  return rand_x[r];
}

function setup() {
  //Create the Canvas
  createCanvas(2200, 1200);

  let amarelo = color('#F29F05');
  let azul = color('#243E73');
  let back_color = color('#F2E8DF');
  let verde = color('#167351');
  let laranja = color('#F28705');


  noStroke();
  background(back_color);

  for (let lineX = 0; lineX <= width; lineX += (100)) {
    for (let lineY = 0; lineY <= 1000; lineY += (100)) {
        fill(azul);
        
        if_color = Math.floor(random(100));
        if (if_color == 3) {
          fill(amarelo);
        }

        x1 = lineX+10+rand();
        y1 = lineY+10+rand();
        
        x2 = lineX+100+rand();
        y2 = lineY+10+rand();
        
        x3 = lineX+100+rand();
        y3 = lineY+100+rand();
        
        x4 = lineX+10+rand();
        y4 = lineY+100+rand();
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
}

}

function draw() {
}
