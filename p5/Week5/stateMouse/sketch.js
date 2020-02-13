var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here


  switch (myState) {
    case 0:
      background('gray');
      textSize(15)
      text("Who do I think is going to win the championship", 100, 100);
      break;

    case 1:
    background('yellow') ;
    text("I think LeBron is winning a championship", 100, 100) ;
      break;

    case 2:
    background('purple') ;
    text("He's going to do it for MAMBA and GIGI", 100, 100) ;
      break;

    case 3:
    background('blue') ;
    text("Wait until the playoffs, he's a different animal but the same beast", 25, 100) ;
      break;

    case 4:
    background('red') ;
    text("NBA is where amazing happens and he's been nothing short this season", 25, 100) ;
      break;

  }

}



function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }
}
