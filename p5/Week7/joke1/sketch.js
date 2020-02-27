var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('red');
  textSize(30);

  switch (myState) {

    case 0:
      text("How do bulls write?", 300, 300);
      break;

    case 1:
      text("With a bullpen", 300, 300);
      break;


  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
