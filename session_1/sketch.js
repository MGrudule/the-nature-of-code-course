var w;
//array of walker objects
let eyes = [];


function setup() {
  // put setup code here
  createCanvas(640, 640);
  // make 20 eyes

  w = new Walker(width / 2, height / 2, 255, 0);

}

function draw() {
  // put drawing code here
  background(51);
  // draws 20 eyes

  w.display();
  w.update();


}

function Walker(x, y, eyeColor, irisColor) {
  var xoff = TWO_PI;
  var xoff2 = TWO_PI;
  this.pos = createVector(0, 0);
  this.posTrace = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.velOrbit = createVector(100, 10);
  this.acc = createVector(0, 0);
  // this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.002);


  this.display = function() {

    fill(eyeColor);
    ellipse(this.pos.x, this.pos.y, 38, 38);

    //add the iris
    fill(irisColor);

    rect(this.posTrace.x, this.posTrace.y, 18, 9);

  }

  this.update = function() {

    var mouse = createVector(mouseX, mouseY);
    // mouse.setMag(10);
    this.pos = mouse;


    this.vel.add(this.acc);
    this.pos.add(this.vel);


    this.velOrbit.rotate(noise(xoff) / 10);
    xoff += 0.00030;
    this.velOrbit.add(random(-10, 10));
    xoff2 += 0.030;
    this.posTrace.set(this.pos);
    this.posTrace.add(this.acc);
    this.posTrace.add(this.velOrbit);

  }


}