var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(400, 400) ;
}

function draw() {
  // put drawing code here
  background ('gray') ;
  rect(x, 10, 10, 10) ;
  x = x + 5 ;
}
