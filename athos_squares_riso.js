const rand_x = [-4, -3, -2, -1, 0, 1, 2, 3, 4]

function rand() {
  r = Math.floor(random(7));
  return rand_x[r];
}

function setup() {
  //Create the Canvas
  createCanvas(500, 500);

  let amarelo = color('#F29F05');
  // let azul = color('#243E73');
  let azul = new Riso([36, 62, 115]);
  let back_color = color('#F2E8DF');
  let verde = color('#167351');
  let laranja = color('#F28705');


  risoNoStroke();
  // background(back_color);

  for (let lineX = 0; lineX <= width; lineX += (100)) {
    for (let lineY = 0; lineY <= 1000; lineY += (100)) {

        x1 = lineX+10+rand();
        y1 = lineY+10+rand();
        
        x2 = lineX+100+rand();
        y2 = lineY+10+rand();
        
        x3 = lineX+100+rand();
        y3 = lineY+100+rand();
        
        x4 = lineX+10+rand();
        y4 = lineY+100+rand();
        
        // if_color = Math.floor(random(100));
        // if (if_color == 3) {
        //   fill(amarelo);
        // }

        azul.fill(255);
        azul.quad(x1, y1, x2, y2, x3, y3, x4, y4);

    }
  }
  drawRiso();

}

function draw() {
}
