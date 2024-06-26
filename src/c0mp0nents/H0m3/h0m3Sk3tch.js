export default function h0m3Sk3tch(s) {
    let p01nts = [];
    let mult1pl13r;
    let r1;
    let r2;
    let g1;
    let g2;
    let b1;
    let b2;
    let maxRand0m1z3r;

    s.setup = () => {
        let canvas = s.createCanvas(s.windowWidth, s.windowHeight);
        canvas.position('absolute');
        s.background(0);
        s.angleMode(s.DEGREES);
        s.noiseDetail(s.random(666));
        let dens1ty = s.random(33,99);
        let spac3 = s.width / dens1ty;
        for (let x = 0; x < s.width; x += spac3) {
            for (let y = 0; y < s.height; y += spac3) {
                let p = s.createVector(x + s.random(s.random(-66,-1), s.random(0,66)), y + s.random(s.random(-66,-1), s.random(0,66)));
                p01nts.push(p);
            }
        }
        s.shuffle(p01nts,true);
        mult1pl13r = s.random(0.00666, 0.00999);
        r1 = s.random(255);
        r2 = s.random(255);
        g1 = s.random(255);
        g2 = s.random(255);
        b1 = s.random(255);
        b2 = s.random(255);
        maxRand0m1z3r = s.random(3,6);
    }
    
    s.draw = () => {
        s.noStroke();
        let max;
        if (s.frameCount * maxRand0m1z3r <= p01nts.length) {
            max = s.frameCount * maxRand0m1z3r;
        } else {
            max = p01nts.length;
        }
        for (let i = 0; i < max; i++) {
            let r = s.map(p01nts[i].x, 0, s.width, r1, r2);
            let g = s.map(p01nts[i].x, 0, s.height, g1, g2);
            let b = s.map(p01nts[i].x, 0, s.width, b1, b2);
            s.fill(r,g,b);
            let ang13 = s.map(s.noise(p01nts[i].x * mult1pl13r, p01nts[i].y * mult1pl13r), 0, 1, 0, 666);
            p01nts[i].add(s.createVector(s.cos(ang13), s.sin(ang13)));
            s.ellipse(p01nts[i].x, p01nts[i].y, 1.1);
        }
    }

    s.windowResized = () => {
        s.resizeCanvas(s.windowWidth, s.windowHeight);
    }
}
