let triangleScales = new Array(6).fill(1);
let spins = new Array(6).fill(0);

function setup() {
  let cnv = createCanvas(553, 551);
  cnv.parent('p5-canvas');
}

function draw() {
  background(0);
  fill(255);
  rect(26, 24, 501, 501);


  let triangles = [
    { vertices: [26, 24, 235, 24, 26, 234], color: [220], centroid: [95, 94] },
    { vertices: [527, 24, 527, 600, 235, 325], color: [255, 0, 0], centroid: [430, 316] },
    { vertices: [235, 5, -30, 265, 235, 530], color: [0], centroid: [147, 267] },
    { vertices: [235, 325, 235, 525, 447, 525], color: [220], centroid: [306, 458] },
    { vertices: [26, 320, 105, 400, 26, 520], color: [255, 255, 0], centroid: [52, 413] },
    { vertices: [526, 24, 400, 156, 300, 24], color: [180], centroid: [409, 68] }
  ];
  

  for (let i = 0; i < triangles.length; i++) {
    let tri = triangles[i];
    // I used push to save the style of the original triangles
    push();

    translate(tri.centroid[0], tri.centroid[1]);
    // looks if the mouse is within 50 pixels of the center of the triangle
    let isTriangleHovering = dist(mouseX, mouseY, tri.centroid[0], tri.centroid[1]) < 50;
    if (isTriangleHovering) {
      // lerp just kinda spins and scales the triangle 
      triangleScales[i] = lerp(triangleScales[i], 1.5, 0.1);
      spins[i] += 5;
    } else {
      triangleScales[i] = lerp(triangleScales[i], 1, 0.1);
      spins[i] = lerp(spins[i], 0, 0.05);
    } 

    rotate(radians(spins[i]));
    scale(triangleScales[i]);
    fill(tri.color);
    //draws the triangles new spot
    triangle(tri.vertices[0] - tri.centroid[0], tri.vertices[1] - tri.centroid[1],
             tri.vertices[2] - tri.centroid[0], tri.vertices[3] - tri.centroid[1],
             tri.vertices[4] - tri.centroid[0], tri.vertices[5] - tri.centroid[1]);

    pop();
    //This then recalls the saved style
    
  }

  fill(0);
  rect(430, 530, 100, 25);
}
