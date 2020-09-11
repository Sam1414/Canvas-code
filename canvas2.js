const canvas2 = document.getElementById('canvas2');

console.log(canvas2);

// const c = canvas2.getContext('2d');
const c2 = canvas2.getContext('2d');

function draw_axes() {
    c2.beginPath();
    // Background Fill
    // c.fillStyle = 'rgba(255, 255, 180, 0.5)';
    // c.fillRect(0, 0, canvas.width, canvas.height);
    // Horizintal Axis
    c2.moveTo(0, canvas2.height / 2);
    c2.lineTo(canvas2.width, canvas2.height / 2);
    // Vertical Axis
    c2.moveTo(canvas2.width / 2, 0);
    c2.lineTo(canvas2.width / 2, canvas2.height);
    c2.strokeStyle = 'rgb(0, 0, 0)';
    c2.stroke();
}

function draw_unit_impulse() {
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    for (let x = 0; x < canvas2.width; x++) {
        if (x != canvas2.width / 2) {
            c2.lineTo(x, canvas2.height / 2);
        }
        else {
            c2.lineTo(x, 0);
        }
    }
    c2.strokeStyle = 'rgb(255, 0, 0)';
    c2.stroke();
}

function animate_impulse() {
    var x = 0;
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    var impulse_interval = setInterval(() => {
        if (x <= canvas2.width) {
            console.log('x:', x);
            if (x != canvas2.width / 2) {
                c2.lineTo(x, canvas2.height / 2);
            }
            else {
                c2.lineTo(x, 0);
            }
            c2.strokeStyle = 'rgb(255, 0, 0)';
            c2.stroke();
            x++;
        }
    }, 10);

    setTimeout(() => { clearInterval(impulse_interval); }, 4500);
}

function draw_unit_step() {
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    for (let x = 0; x < canvas2.width; x++) {
        if (x < canvas2.width / 2) {
            c2.lineTo(x, canvas2.height / 2);
        }
        else {
            c2.lineTo(x, 0);
        }
    }
    c2.strokeStyle = 'rgb(0, 0, 255)';
    c2.stroke();
}

function draw_ramp() {
    let y = (canvas2.height / 2);
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    for (let x = 0; x < canvas2.width; x++) {
        if (x <= canvas2.width / 2) {
            c2.lineTo(x, canvas2.height / 2);
        }
        else {
            c2.lineTo(x, y--);
        }
    }
    c2.strokeStyle = 'rgb(255, 0, 255)';
    c2.stroke();
}

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

function draw_exponential() {
    let y = (canvas2.height / 2);
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    for (let x = -249; x < canvas2.width - 249; x += 1) {
        c2.lineTo(x + 249, y - Math.exp(x / 100 + 3.8));
    }
    c2.strokeStyle = 'rgb(0, 255, 0)';
    c2.stroke();
}

function animate_exponential() {
    var x = -249;
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    var exp_interval = setInterval(() => {
        if (x < canvas2.width - 249) {
            let y = (canvas2.height / 2);
            c2.lineTo(x + 249, y - Math.exp(x / 100 + 3.8));
            c2.strokeStyle = 'rgb(0, 255, 0)';
            c2.stroke();
            x++;
        }
    }, 10);

    setTimeout(() => { clearInterval(exp_interval); }, 4000);
}

function at_exp(nx) {
    nx -= 249;
    let y = (canvas2.height / 2);
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    if (nx < canvas2.width - 249) {
        for (let x = -249; x < nx; x += 1) {
            c2.lineTo(x + 249, y - Math.exp(x / 100 + 4.5));
        }
        c2.strokeStyle = 'rgb(0, 255, 0)';
        c2.stroke();
    }
}

function at_imp(nx) {
    let y = (canvas2.height / 2);
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    if (nx < canvas2.width) {
        for (let x = 0; x < nx; x += 1) {
            if (x != canvas2.width / 2) {
                c2.lineTo(x, canvas2.height / 2);
            }
            else {
                c2.lineTo(x, 0);
            }
            c2.strokeStyle = 'rgb(255, 0, 0)';
            c2.stroke();
        }
    }
}

function at_step(nx) {
    let y = (canvas2.height / 2);
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    if (nx < canvas2.width) {
        for (let x = 0; x < nx; x += 1) {
            if (x < canvas2.width / 2) {
                c2.lineTo(x, canvas2.height / 2);
            }
            else {
                c2.lineTo(x, 0);
            }
            c2.strokeStyle = 'rgb(0, 0, 255)';
            c2.stroke();
        }
    }
}

function at_ramp(nx) {
    let y = (canvas2.height / 2);
    c2.beginPath();
    c2.moveTo(0, canvas2.height / 2);
    if (nx < canvas2.width) {
        for (let x = 0; x < nx; x += 1) {
            if (x <= canvas2.width / 2) {
                c2.lineTo(x, canvas2.height / 2);
            }
            else {
                c2.lineTo(x, y--);
            }
            c2.strokeStyle = 'rgb(255, 0, 255)';
            c2.stroke();
        }
    }
}

function animate_together() {
    var x = 0;
    var i1 = setInterval(() => { at_exp(x); x++; }, 10);
    setTimeout(() => { clearInterval(i1); }, 4500);
    var i2 = setInterval(() => { at_imp(x); x++; }, 10);
    setTimeout(() => { clearInterval(i2); }, 4500);
    var i3 = setInterval(() => { at_step(x); x++; }, 10);
    setTimeout(() => { clearInterval(i3); }, 4500);
    var i4 = setInterval(() => { at_ramp(x); x++; }, 10);
    setTimeout(() => { clearInterval(i4); }, 4500);
}

// animate();

draw_axes();
// draw_unit_impulse();
// animate_impulse();
// draw_unit_step();
// draw_ramp();
// draw_exponential();
// animate_exponential();
// animate_together();