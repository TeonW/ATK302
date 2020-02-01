function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('yellow');
  fill('orange');
  ellipse(350, 350, 300, 300);
  fill('orange');
  ellipse(589, 334, 100, 100);
  fill('white');
  ellipse(288, 284, 50, 50);
  fill('white');
  ellipse(415, 284, 50, 50);
  fill('purple');
  ellipse(415, 290, 20, 20);
  fill('purple');
  ellipse(288, 290, 20, 20);
  fill('orange');
  ellipse(260, 210, 100, 100);
  fill('orange');
  ellipse(445, 210, 100, 100);
  fill('brown');
  ellipse(445, 210, 50, 50);
  fill('brown');
  ellipse(260, 210, 50, 50);
  fill('orange');
  ellipse(555, 300, 50, 50);
  fill('orange');
  ellipse(620, 300, 50, 50);
  fill('brown');
  ellipse(555, 300, 25, 25);
  fill('brown');
  ellipse(620, 300, 25, 25);
  fill('white');
  ellipse(572, 338, 30, 30);
  fill('white');
  ellipse(604, 338, 30, 30);
  fill('purple');
  ellipse(604, 338, 10, 10);
  fill('purple');
  ellipse(572, 338, 10, 10);
  fill('brown');
  ellipse(350, 350, 10, 10);
  fill('brown');
  ellipse(590, 360, 10, 10);
  fill('brown');
triangle(350, 350, 330, 380, 365, 385);
line(300, 420, 380, 420);
line(575, 375, 600, 375);
  if (mouseIsPressed) {
    fill('purple');
    ellipse(350, 350, 300, 300);
    fill('purple');
    ellipse(589, 334, 100, 100);
    fill('white');
    ellipse(288, 284, 50, 50);
    fill('white');
    ellipse(415, 284, 50, 50);
    fill('purple');
    ellipse(415, 290, 20, 20);
    fill('purple');
    ellipse(288, 290, 20, 20);
    fill('purple');
    ellipse(260, 210, 100, 100);
    fill('purple');
    ellipse(445, 210, 100, 100);
    fill('black');
    ellipse(445, 210, 50, 50);
    fill('black');
    ellipse(260, 210, 50, 50);
    fill('purple');
    ellipse(555, 300, 50, 50);
    fill('purple');
    ellipse(620, 300, 50, 50);
    fill('black');
    ellipse(555, 300, 25, 25);
    fill('black');
    ellipse(620, 300, 25, 25);
    fill('white');
    ellipse(572, 338, 30, 30);
    fill('white');
    ellipse(604, 338, 30, 30);
    fill('purple');
    ellipse(604, 338, 10, 10);
    fill('purple');
    ellipse(572, 338, 10, 10);
    fill('black');
    ellipse(350, 350, 10, 10);
    fill('black');
    ellipse(590, 360, 10, 10);
    fill('black');
    line(300, 420, 380, 420);
    line(575, 375, 600, 375);
  triangle(350, 350, 330, 380, 365, 385);
  }
  fill(0);
  textSize(40)
  text(mouseX + "," + mouseY, 40, 40);
}
