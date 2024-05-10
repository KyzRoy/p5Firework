let circle = [];

function setup() {
  createCanvas(1000, 800);
  angleMode(DEGREES);
}

function draw() {
  background("#000000");
  for (let i=circle.length-1; i>=0; i--) {
    circle[i].updateCircle();
    circle[i].displayCircle();
    
    if (circle[i].done == true) {
      circle.splice(i, 1);
    }
    
  }

}

function mousePressed() {
  circle.push(new Circle(mouseX, mouseY));
}