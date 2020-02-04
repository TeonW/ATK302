var ser ;

function preload() {
  ser = loadFont("assets/BADABB__.TTF") ;

}
function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}


function draw() {
  // put drawing code here
  textFont(ser, 28) ;
  text("hello!", 100, 100) ;
}
