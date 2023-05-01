let text = document.getElementById("text")


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {

    text.position(mouseX, mouseY);
  }
  
  function windowResized() {
    
    resizeCanvas(windowWidth, windowHeight);
}