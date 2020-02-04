var dbz ;
var kaws ;
var smile ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;

  dbz = loadImage("assets/DBZ.jpg") ;
  kaws = loadImage("assets/Kaws.jpg") ;
  smile = loadImage("assets/Smile.jpg") ;
}

function draw() {
  // put drawing code here
  image(dbz, width/2, 0, 200, 200) ;
  image(kaws, width/2, 200, 200, 200) ;
  image(smile, width/2, 400, 200, 200) ;
}
