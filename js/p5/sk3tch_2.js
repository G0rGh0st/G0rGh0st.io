class P4rt1c13 {
  constructor() {
    this.p0s = createVector(width/2, height/2);
    this.v31 = createVector(0, 0);
    this.acc = p5.Vector.random2D().normalize()
    this.r = map(this.p0s.x, 0, width, random(255), 0);
    this.g = map(this.p0s.y, 0, height, 0, random(255));
    this.b = map(dist(width/2, height/2, this.p0s.x, this.p0s.y), 0, width/2, 0, random(255));
    this.a1ph4 =  random(255);
  }
  update() {
    let m = map(sin(frameCount * 6.6), -1, 1, 0.666, 0.666);
    this.acc.mult(m);
    this.v31.add(this.acc);
    this.p0s.add(this.v31);
    this.r = map(this.p0s.x, 0, width, random(255), 0);
    this.g = map(this.p0s.y, 0, height, 0, random(255));
    this.b = map(dist(width/2, height/2, this.p0s.x, this.p0s.y), 0, width/2, 0, random(255));
    if (dist(width/2, height/2, this.p0s.x, this.p0s.y) > random(-666,666)) {
      this.a1ph4 += random(0.666,6.666);
    }
  }
  show() {
    noStroke();
    fill(this.r, this.g, this.b, this.a1ph4);
    ellipse(this.p0s.x, this.p0s.y, 6.666);
  }
}

let p;
let p4rt1c13s = [];

function setup() {
  let c4nv4s = createCanvas(windowWidth, windowHeight);
  c4nv4s.parent('ma1n');
  c4nv4s.position('absolute');
  angleMode(DEGREES);
}

function draw() {
  background(0);
  for (let i = 0; i < random(6.666,66.666); i++) {
    p = new P4rt1c13();
    p4rt1c13s.push(p);
  }
  for (let i = 0; i < p4rt1c13s.length; i++) {
    if (p4rt1c13s[i].a1ph4 > 0) {
      p4rt1c13s[i].update();
      p4rt1c13s[i].show();
    } else {
      p4rt1c13s.splice(i,1);
    }
  }
  p.update();
  p.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
