// Add sound design

let gengarPixel;
let canvasPen;
let canvasReveal;
let myFont;
let gengarFace;

function preload() {
  gengarPixel = loadImage("image/gengar.png");
  penCursor = loadImage("image/curseurpen.png");
  gengarFace = loadImage("image/smiley.png");
  myFont = loadFont("font/Paragon-Regular.otf");
}

function setup() {
  createCanvas(630, 630);
  noCursor();
  canvasPen = createGraphics(630, 630);
  canvasPen.clear();
  canvasReveal = createGraphics(630, 630);
  canvasReveal.background(234);
}

function draw() {
  background(234);

  // Stylo
  image(canvasPen, 0, 0);
  if (mouseIsPressed) {
    canvasPen.fill(234);
    canvasPen.stroke(0);
    canvasPen.strokeWeight(3);
    canvasPen.line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // Points à relier
  textFont(myFont);
  Points(90, 80, 1);
  Points(190, 134, 2);
  Points(210, 87, 3);
  Points(240, 122, 4);
  Points(300, 70, 5);
  Points(315, 111, 6);
  Points(355, 85, 7);
  Points(370, 125, 8);
  Points(507, 76, 9);
  Points(470, 202, 10);
  Points(560, 340, 11);
  Points(553, 376, 12);
  Points(525, 405, 13);
  Points(480, 385, 14);
  Points(465, 420, 15);
  Points(491, 495, 16);
  Points(470, 544, 17);
  Points(410, 550, 18);
  Points(355, 495, 19);
  Points(295, 510, 20);
  Points(230, 495, 21);
  Points(200, 535, 22);
  Points(145, 540, 23);
  Points(120, 515, 24);
  Points(115, 440, 25);
  Points(105, 370, 26);
  Points(60, 380, 27);
  Points(40, 355, 28);
  Points(40, 310, 29);
  Points(100, 230, 30);
  image(gengarFace, 190, 220, 200, 100);

  // Curseur crayon
  image(penCursor, mouseX, mouseY, 55, 75);

  // Reveal
  if (key === "s") {
    image(canvasReveal, 0, 0);
    image(gengarPixel, 20, 30, 585, 585);
    image(penCursor, mouseX, mouseY, 55, 75);
  }

}

function Points(x, y, txt) {
  // caractéristique du point
  noStroke();
  fill(0);
  circle(x, y, 8);

  //texte
  textSize(20);
  text(txt, x + 12, y + 10);
}
