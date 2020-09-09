const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

function draw_axes() {
    c.beginPath();
    // Background Fill
    c.fillStyle = 'rgba(255, 255, 180, 0.5)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    // Horizintal Axis
    c.moveTo(0, canvas.height / 2);
    c.lineTo(canvas.width, canvas.height / 2);
    // Vertical Axis
    c.moveTo(canvas.width / 2, 0);
    c.lineTo(canvas.width / 2, canvas.height);
    c.strokeStyle = 'rgb(0, 0, 0)';
    c.stroke();
}

var wave = {
    y: canvas.height / 2,
    amplitude: 100,
    length: 0.0504,
    frequency: 220,
    phase: 20
}

wave.amplitude = document.getElementById("Amplitude").value;
wave.length = document.getElementById("Wavelength").value;
wave.frequency = document.getElementById("Frequency").value;
wave.phase = document.getElementById("Phase").value;
var time = 0, time2 = 0, time3 = 0, time4 = 0;

// y(x, t) = A sin(kx - wt + phi)
// w = 2*pi*f
// k = (2*pi)/lambda
// lambda = wavelength

function draw_sine_wave() {
    var omega = 2 * Math.PI * wave.frequency;
    var k = (2 * Math.PI) / wave.length;
    var phi = Math.PI * wave.phase;

    c.beginPath();
    c.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x++) {
        var sine = Math.sin((k * x) - (omega * time) + phi);
        // var sine = Math.sin((x * wave.length) + frequency);
        let y = wave.y + (wave.amplitude * sine);
        c.lineTo(x, y);
    }

    c.strokeStyle = 'rgb(0, 0, 255)';
    c.stroke();

    time += 0.05;
}

function draw_cosine_wave() {
    var omega = 2 * Math.PI * wave.frequency;
    var k = (2 * Math.PI) / wave.length;
    var phi = Math.PI * wave.phase;

    c.beginPath();
    c.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x++) {
        var cosine = Math.cos((k * x) - (omega * time2) + phi);
        // var sine = Math.sin((x * wave.length) + frequency);
        let y = wave.y + (wave.amplitude * cosine);
        c.lineTo(x, y);
    }

    c.strokeStyle = 'rgb(255, 0, 0)';
    c.stroke();

    time2 += 0.05;
}

function draw_rect_wave() {
    var omega = 2 * Math.PI * wave.frequency;
    var k = (2 * Math.PI) / wave.length;
    var phi = Math.PI * wave.phase;

    c.beginPath();
    c.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x++) {
        var sine = Math.sin((k * x) - (omega * time3) + phi);
        // signum function
        var r = Math.sign(sine);
        let y = (canvas.height / 2) + (wave.amplitude * r);
        c.lineTo(x, y);
    }

    c.strokeStyle = 'rgb(0, 255, 0)';
    c.stroke();

    time3 += 0.08;
}

function draw_triangular_wave() {
    var omega = 2 * Math.PI * wave.frequency;
    var k = (2 * Math.PI) / wave.length;
    var phi = Math.PI * wave.phase;

    c.beginPath();
    c.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x++) {
        var sine = Math.sin((k * x) - (omega * time4) + phi);
        // signum function
        var r = Math.asin(sine);
        let y = (canvas.height / 2) + (((2 * wave.amplitude) / Math.PI) * r);
        c.lineTo(x, y);
    }

    c.strokeStyle = 'rgb(255, 0, 255)';
    c.stroke();

    time4 += 0.10;
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    draw_axes();
    draw_sine_wave();
    draw_cosine_wave();
    draw_rect_wave();
    draw_triangular_wave();

    wave.amplitude = document.getElementById("Amplitude").value;
    wave.length = document.getElementById("Wavelength").value;
    wave.frequency = document.getElementById("Frequency").value;
    wave.phase = document.getElementById("Phase").value;
}

animate();