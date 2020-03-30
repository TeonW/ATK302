var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background('gray');

  push();
  translate (x , 0);
  makeCovid();
  x = x + 5 ;
  if ( x > width) {
    x = -300 ;
  }
  pop() ;
}





function makeCovid() {
  noStroke();
  fill("blue");
  rect(x, 50, 50, 50);
  rect(x, 50, 50, 50);
  rect(x, 50, 50, 50);
  rect(x, 50, 50, 50);
  ellipse(50,130,40,40);
  ellipse(50,130,40,40);
  ellipse(50,130,40,40);
  ellipse(50,130,40,40);


  x = x + 5;

  if (x > width) {
    x = 0;
  }
}
