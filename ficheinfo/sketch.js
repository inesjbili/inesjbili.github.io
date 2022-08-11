// Add Sound design
// New cursor
// Refaire sprite glass

let Paragon;
let ficheInfo =
  "Les nuits [       ]\npleine [         ] , il\nimite l'ombre des\n[        sants ] et se\n[ m'         k ] [       ]\n[ l'          ] effroi.";
let moon;
let footprint;
let clock;
let cursorTwoFingers;
let water;

function preload() {
  Paragon = loadFont("font/Paragon-Regular.otf");
  moon = loadImage("image/moon.png");
  footprint = loadImage("image/footprint.png");
  clock = loadImage("image/clock.png");
  cursorTwoFingers = loadImage("image/cursor.png");
  water = loadImage('image/water.png');
}

function setup() {
  createCanvas(630, 630);
}

function draw() {
  background(234);

  textFont(Paragon);
  textSize(60);
  textLeading(90);
  text(ficheInfo, 60, 110);

  // de 1ere ligne
  if (mouseX > 350 && mouseX < 460 && mouseY > 64 && mouseY < 115) {
    image(cursorTwoFingers, 375, 35, 63, 85);
  }

  // de 5eme ligne
  if (mouseX > 350 && mouseX < 460 && mouseY > 423 && mouseY < 475) {
    image(cursorTwoFingers, 373, 396, 63, 85);
  }
  // lune
  if (mouseX > 255 && mouseX < 385 && mouseY > 150 && mouseY < 205) {
    image(moon, 283, 135, 80, 80);
  }

  // leur
  if (mouseX > 120 && mouseX < 250 && mouseY > 500 && mouseY < 550) {
    image(clock, 137, 495, 80, 80);
  }

  // pas
  if (mouseX > 60 && mouseX < 168 && mouseY > 332 && mouseY < 386) {
    image(footprint, 93, 310, 63, 85);
  }

  // o
  if (mouseX > 165 && mouseX < 270 && mouseY > 420 && mouseY < 470) {
    image(water, 175, 400, 70, 90);
  }

}
