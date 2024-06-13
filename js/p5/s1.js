let p01nts = [];
let mult1pl13r;
let r1;
let r2;
let g1;
let g2;
let b1;
let b2;
let m4xR4nd0m1z3r;

function setup() {
  let c4nv4s = createCanvas(windowWidth, windowHeight);
  c4nv4s.parent('ma1n');
  c4nv4s.position('absolute');
  background(0);
  angleMode(DEGREES);
  noiseDetail(random(666));
  let dens1ty = random(33,99);
  let sp4c3 = width / dens1ty;
  for (let x = 0; x < width; x += sp4c3) {
    for (let y = 0; y < height; y += sp4c3) {
      p = createVector(x + random(random(-66,-1), random(0,66)), y + random(random(-66,-1), random(0,66)));
      p01nts.push(p);
    }
  }
  shuffle(p01nts,true);
  mult1pl13r = random(0.00666, 0.00999);
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
  m4xR4nd0m1z3r = random(3,6);
}

function draw() {
  noStroke();
  if (frameCount * m4xR4nd0m1z3r <= p01nts.length) {
      m4x = frameCount * m4xR4nd0m1z3r;
  } else {
      m4x = p01nts.length;
  }
  for (let i = 0; i < m4x; i++) {
    let r = map(p01nts[i].x, 0, width, r1, r2);
    let g = map(p01nts[i].x, 0, height, g1, g2);
    let b = map(p01nts[i].x, 0, width, b1, b2);
    fill(r,g,b);
    let ang13 = map(noise(p01nts[i].x * mult1pl13r, p01nts[i].y * mult1pl13r), 0, 1, 0, 666);
    p01nts[i].add(createVector(cos(ang13), sin(ang13)));
    ellipse(p01nts[i].x, p01nts[i].y, 1.1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
