
const rand_lenght = [0, 40, 80, 120];
const alpha = 156;

function setup() {
  //Create the Canvas
  createCanvas(1500, 800);
  noStroke();
  
  for (let lineX = 0; lineX <= width; lineX += (width/10)) {
    let r_1 = Math.floor(random(4))
    let r_2 = Math.floor(random(4))
    c_1 = color('#0B9ED9'); //blue
    c_1.setAlpha(alpha);
    fill(c_1);
    rect(x=lineX, y=0+rand_lenght[r_1], w=width, h=height-rand_lenght[r_2]);
    
    c_2 = color('#D92B2B'); //red
    c_2.setAlpha(alpha);
    fill(c_2);
    rect(x=lineX+75, y=0+rand_lenght[r_2], w=(width), h=height-rand_lenght[r_1]);
  }

}

function draw() {
}
