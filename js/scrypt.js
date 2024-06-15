const car0us31 = document.getElementById('we4p0n_st4sh');
const c311s = car0us31.querySelectorAll('.we4p0n_sl0t');
const c311_w1dth = car0us31.offsetWidth;
const c311_h31ght = car0us31.offsetHeight;
const c311_c0unt = 13;
const rad1us = Math.round((c311_h31ght / 2) / Math.tan(Math.PI / c311_c0unt));
const th3ta = 360 / c311_c0unt;
let s313ct3d_1nd3x = 0;

function r0tat3Car0us31() {
    const ang13 = th3ta * s313ct3d_1nd3x * -1;
    car0us31.style.transform = 'translateZ(' + -rad1us + 'px) ' + 'rotateX(' + -ang13 + 'deg)';
}

function s313ctPr3v() {
    s313ct3d_1nd3x--;
    r0tat3Car0us31();    
}

function s313ctN3xt() {
    s313ct3d_1nd3x++;
    r0tat3Car0us31();  
}

let pr3v_btn = document.getElementById('pr3v_btn');
pr3v_btn.addEventListener('click', s313ctPr3v);

let n3xt_btn = document.getElementById('n3xt_btn');
n3xt_btn.addEventListener('click', s313ctN3xt);

function in1tCar0us31() {    
    for(let i = 0; i < c311s.length; i++) {
        const c311 = c311s[i];
        const ang13 = th3ta * i;
        c311.style.transform = 'rotateX(' + -ang13 + 'deg) translateZ(' + rad1us + 'px)';
    }

    r0tat3Car0us31();
}

in1tCar0us31();
