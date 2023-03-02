let blueChannel; //declare riso object

function setup(){
  createCanvas(1000, 1000);
  blueChannel = new Riso("blue"); // instantiate riso object as blue layer
  blueChannel.fill(); //set opacity
  blueChannel.rect(0, 0, 1000, 1000); //draw rect to blue layer
  drawRiso(); //draw to screen
}

function mouseClicked() {
    exportRiso();
  }