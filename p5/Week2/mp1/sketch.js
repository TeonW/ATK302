function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('yellow');
  fill('orange');
  ellipse(350, 350, 300, 300);
  fill('black');
  ellipse(350, 350, 300, 5)

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
    fill(255);
  }
  fill(0);
  textSize(40)
  text(mouseX + "," + mouseY, 40, 40);
}
