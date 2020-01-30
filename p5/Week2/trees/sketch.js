function setup() {
  // put setup code here
    createCanvas(720, 400);
}

function draw() {
  // put drawing code here

  background(75, 205, 245);
  noStroke();



  fill('green');
  rect(0, 350, 750, 300);
  fill('brown');
  rect(100, 200, 75, 250);
  fill("green");
  arc(140, 200, 150, 150, PI, TWO_PI);
  fill('brown');
  rect(440, 223, 250,250);
  triangle(555, 154, 476, 217, 612, 216);



  fill(255, 254, 51);
  ellipse(636, 62, 100, 100);
fill('red')
ellipse(130, 176, 25, 25)
fill('red')
ellipse(180, 160, 25, 25)
fill('red')
ellipse(163, 190, 25, 25)
fill('red')
ellipse(83, 174, 25, 25)
fill('red')
ellipse(126, 140, 25, 25)

  fill(255);
  arc(150, 117, 280, 280, PI, TWO_PI);
  fill(255);
  arc(350, 117, 200, 200, PI, TWO_PI);
  fill(0) ;
  textSize(40)
  text(mouseX + "," + mouseY, 40,40) ;
}
