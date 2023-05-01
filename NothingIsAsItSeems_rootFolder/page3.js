let x = 0;
let y = 0;
let xpos;
let ypos;



function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {

    removeElements();

    let clue = createImg("images/clue.png");
     clue.id('clue');
     clue.position (1440, 400)

    //set the position
    //create arithmatic for x and y position. this lets us read out the position
    xpos = width/2-200+x;
    ypos = 1200;

  
    //position the cat based on the arrow keys
    clue.position(xpos, ypos);


//controls using arrow keys
    if (keyIsPressed){
      
      if(keyCode == RIGHT_ARROW) {

        //plus 5 in the x direction means right
        x+=5;
      }

      if(keyCode == DOWN_ARROW) {

        //plus 5 in the y direction means down
        y+=5;
      }


      if (xpos<100)
        window.location.href = "page4.html";
      }

      }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
