var w;

let eyes = [];


function setup() {
  // put setup code here
  createCanvas(640, 640);
  for (let i = 0; i < 20; i++) {
    eyes[i] = new Walker(width / 2, height / 2);
  }
}

function draw() {
  // put drawing code here
  background(51);



  for (let i = 0; i < eyes.length; i++) {

    eyes[i].display(255, 0);
    eyes[i].update();
  }


}

function Walker(x, y) {
  var xoff = TWO_PI;
  this.pos = createVector(x, y);
  this.posTrace = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.delay = createVector(0, 10);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.2);


  this.display = function(color, trace) {
    fill(color);
    ellipse(this.pos.x, this.pos.y, 48, 48);
    fill(trace);
    ellipse(this.posTrace.x - 9, this.posTrace.y - 9, 18, 18);

  }

  this.update = function() {


    var mouse = createVector(mouseX, mouseY);

    mouse.setMag(18);
    this.acc.rotate(noise(xoff) * 300);

    xoff += 0.001;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.posTrace.set(this.pos);
    this.posTrace.add(mouse);
    this.posTrace.add(this.acc);
    this.posTrace.add(this.vel);

    // console.log(this.posTrace)
    // this.posTrace.setMag(1);



  }


}