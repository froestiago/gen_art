
const rand_lenght = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200];
const rand_x = [-10, -5, 0, 5, 10]
const alpha = 156;

function setup() {
  //Create the Canvas
  createCanvas(1500, 800);
  back_color = color("#D9D9D9");
  background(back_color);
  noStroke();
  
  for (let lineX = 0; lineX <= width; lineX += 25) {
    let r_1 = Math.floor(random(11))
    let r_2 = Math.floor(random(11))

    let r_3 = Math.floor(random(5))
    let r_4 = Math.floor(random(5))

    c_1 = color('#A6A6A6'); //blue
    c_1.setAlpha(alpha);
    fill(c_1);
    rect(x=lineX+rand_x[r_3], y=100+rand_lenght[r_1], w=40, h=200+rand_lenght[r_1]);

    c_2 = color('#737373'); //red
    c_2.setAlpha(alpha);
    fill(c_2);
    rect(x=lineX+rand_x[r_4], y=100+rand_lenght[r_2], w=40, h=200+rand_lenght[r_2]);
  }

}

function draw() {
}
