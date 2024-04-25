function setup() {
    let cnv =createCanvas(553, 551);
    noLoop();
    noStroke();
    cnv.parent('p5-canvas');
  }
  
  function draw() {
    background(0); // Black background for the border
  
    // White background rectangle
    fill(255);
    rect(26, 24, 501, 501);
  
    // Grey triangle (top left)
    fill(220); // Light grey color
    triangle(26, 24, 235, 24, 26, 234);
    
    // Red triangle (right)
    fill(255, 0, 0); // Red color
    triangle(527, 24, 527, 600, 235, 325);
  
    // Black triangle (Middle/left)
    fill(0); // Black color
    triangle(235, 5, -30, 265, 235, 530);

    // Grey triangle (Bottom Right/Center)
    fill(220); // Light grey
    triangle(235, 325, 235, 525, 447, 525);
  
    // Yellow triangle (bottom left)
    fill(255, 255, 0); // Yellow
    triangle(26, 320, 105, 400, 26, 520);
  
    // Light grey triangle (Top Right)
    fill(180); // Dark grey
    triangle(526, 24, 400, 156, 300, 24);


    //Black rectangle at bottom to cover little bit of red
    fill(0);
    rect(435, 526, 501, 501);
  
    
    
    }
  