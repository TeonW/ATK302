var myState = 0;
var timer = 0;
var royal ;
var luka ;
var x = x + 5


function preload() {
  royal = loadFont("royal.ttf") ;

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  textFont(royal, 28);
  luka = loadImage("Luka.jpg");
  lukD = loadImage("LukD.jpg");
  lukaAs = loadImage("LukaAs.jpg");
  lUKAH = loadImage("LUKAH.jpg");
  lukaM = loadImage("LukaMVP.jpg");
  lp = loadImage("LP.jpg");
  lukaA = loadImage("LukaA.jpg");
}

function draw() {
  // put drawing code here


  switch (myState) {
    case 0:
      background('gray');
      textSize(15)
      text("Luka is the future", 100, 100);
      x = x + 5;
      image(luka, 250, 200, 500, 500);
      timer = timer + 1;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      background('yellow');

      text("He's doing stuff that isn't normal for his second year ", 100, 100);
      image(lukD, 250, 200, 500, 500)
      break;

    case 2:
      background('green')
      text("He was under estimated at first but proved himself", 100, 100);
      image(lukaA, 250, 200, 500, 500);
      break;

    case 3:
      background('blue');
      text("Luka was a All-star starter", 25, 100);
      image(lukaAs, 250, 200, 500, 500);
      break;

    case 4:
      background('orange');
      text("He won Nba Rookie of the year with ease", 25, 100);
      image(lukaM, 250, 200, 500, 500);
      break;

    case 5:
      background('blue');
      text("He should be a expecting a MVP soon if he continues to play like this", 25, 100);
      image(luka, 250, 200, 500, 500);
      break;

    case 6:
      background('red');
      text("The Mavs is a great fit for him", 25, 100, 600, 600);
      image(lUKAH, 250, 200, 500, 500);
      break;

    case 7:
      background('white');
      text("Luka and Porzingis is a great DUO ", 25, 100, 700, 600);
      image(lp, 250, 200, 500, 500);
      break;
  }

}



function mouseReleased() {
  myState = myState + 1;
  if (myState > 7) {
    myState = 0;
  }
}
