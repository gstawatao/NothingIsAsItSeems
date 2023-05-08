function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    E = createImg('images/E.png');
    E.position(2300, 1200);
    E.class('dragme');

    I = createImg('images/I.png');
    I.position(200, 1000);
    I.class('dragme');

    G = createImg('images/G.png');
    G.position(2500, 1000);
    G.class('dragme');

  }
  
  function draw() {

  }

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
