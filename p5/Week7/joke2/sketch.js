var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('blue');
  textSize(30);

  switch (myState) {

    case 0:
      text("What did the egg say to the frying pann?", 200, 200);
      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      text("You crack me up.", 300, 300);
      timer++;
      if (timer > 200) {
        myState = 0;
        timer = 0;
      }
      break;


  }
}
