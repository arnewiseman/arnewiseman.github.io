


let triangles = [
    { vertices: [26, 24, 235, 24, 26, 234], color: [220], altColor: [255, 0, 0] }, // Grey -> Red
    { vertices: [527, 24, 527, 600, 235, 325], color: [255, 0, 0], altColor: [220] }, // Red -> Grey
    { vertices: [235, 5, -30, 265, 235, 530], color: [0], altColor: [255, 255, 0] }, // Black -> Yellow
    { vertices: [235, 325, 235, 525, 447, 525], color: [220], altColor: [255, 0, 0] }, // Grey -> Red
    { vertices: [26, 320, 105, 400, 26, 520], color: [255, 255, 0], altColor: [0] }, // Yellow -> Black
    { vertices: [526, 24, 400, 156, 300, 24], color: [180], altColor: [0] } // Light grey -> Black
  ];
  
  function setup() {
    let cnv = createCanvas(553, 551);
    cnv.parent('p5-canvas');
    //Had to set the frame rate to 1 to toggle once a second
    frameRate(1);
    noLoop();
  }
  
  function draw() {
    background(0); // Setting the black background for the border
    fill(255);
    rect(26, 24, 501, 501); // Setting the white backround
  
    for (let i = 0; i < triangles.length; i++) {
        let tri = triangles[i];
        // Frame count is one per sec
        //So it evaluates when its even or odd(aka. True or False)
        // Then it flips beteen tri color and tri alt color depending on the flad(T/F)
        let currentColor = (frameCount % 2 === 0) ? tri.color : tri.altColor;
        // Then it fills it with said color
        fill(currentColor);
        triangle(tri.vertices[0], tri.vertices[1], tri.vertices[2], tri.vertices[3], tri.vertices[4], tri.vertices[5]);
    }
  
    //Black rectangle at bottom to cover little bit of red on bottom
    fill(0);
    rect(435, 526, 501, 501);
  }
  

  // Start the loop when you initally press the mouse
  function mousePressed() {
    loop();
  }
  

  // Stop looping when you let go of the mouse
  function mouseReleased() {
    noLoop();
  }
  