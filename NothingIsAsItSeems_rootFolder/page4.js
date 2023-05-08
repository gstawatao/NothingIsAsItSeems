
function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }

  function draw () {

    let blue = createImg ("images/blue.png");
    blue.id('blue');
    blue.size (200,200)
    blue.position(100, 500)

    let red = createImg ("images/red.png");
    red.id("red)");
    red.size(200,200);
    red.position(400, 500);

    let green = createImg ("images/green.png");
    green.id("green");
    green.size(200, 200);
    green.position(700, 500);
    

    blue.mousePressed(blueBackground);
    red.mousePressed(redBackground);
    green.mousePressed(greenBackground);

  }

  function blueBackground() {
    document.body.style.backgroundColor = "blue";
  }

  function redBackground() {
    document.body.style.backgroundColor = "red";
  }

  function greenBackground() {
    document.body.style.backgroundColor = "green";

  }