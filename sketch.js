var myState = 0;
var timer = 0;
var sultan;
var x = 0
var Luka, LukD, LukaAs, LUKAH, LukaM, LP, LukaA;


function preload() {
  sultan = loadFont("assets/Sultan.otf");

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  textFont(sultan, 28);
  Luka = loadImage("assets/Luka.jpg");
  LukD = loadImage("assets/LukD.jpg");
  LukaAs = loadImage("assets/LukaAs.jpg");
  LUKAH = loadImage("assets/LUKAH.jpg");
  LukaM = loadImage("assets/LukaMVP.jpg");
  Lp = loadImage("assets/LP.jpg");
  LukaA = loadImage("assets/LukaA.jpg");
}

function draw() {
  // put drawing code here


  switch (myState) {
    case 0:
      background('gray');
      textSize(15)
      text("Luka is the future", 100, 100);
      text(x, 100, 100);
      x = x + 5;
      image(Luka, 250, 200, 500, 500);
      timer = timer + 1;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      background('yellow');

      text("He's doing stuff that isn't normal for his second year ", 100, 100);
      image(LukD, 250, 200, 500, 500)
      break;

    case 2:
      background('green')
      text("He was under estimated at first but proved himself", 100, 100);
      image(LukaA, 250, 200, 500, 500);
      break;

    case 3:
      background('blue');
      text("Luka was a All-star starter", 25, 100);
      image(LukaAs, 250, 200, 500, 500);
      break;

    case 4:
      background('orange');
      text("He won Nba Rookie of the year with ease", 25, 100);
      image(LukaM, 250, 200, 500, 500);
      break;

    case 5:
      background('blue');
      text("He should be a expecting a MVP soon if he continues to play like this", 25, 100);
      image(Luka, 250, 200, 500, 500);
      break;

    case 6:
      background('red');
      text("The Mavs is a great fit for him", 25, 100, 600, 600);
      image(LUKAH, 250, 200, 500, 500);
      break;

    case 7:
      background('white');
      text("Luka and Porzingis is a great DUO ", 25, 100, 700, 600);
      image(Lp, 250, 200, 500, 500);
      break;
  }

}



function mouseReleased() {
  myState = myState + 1;
  if (myState > 7) {
    myState = 0;
  }
}
