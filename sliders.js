var amp_slider = document.getElementById("Amplitude");
var amp_output = document.getElementById("amp");
amp_output.innerHTML = amp_slider.value;
amp_slider.oninput = function () {
    amp_output.innerHTML = this.value;
};

var wl_slider = document.getElementById("Wavelength");
var wl_output = document.getElementById("wl");
wl_output.innerHTML = wl_slider.value;
wl_slider.oninput = function () {
    wl_output.innerHTML = this.value;
}

var freq_slider = document.getElementById("Frequency");
var freq_output = document.getElementById("freq");
freq_output.innerHTML = freq_slider.value;
freq_slider.oninput = function () {
    freq_output.innerHTML = this.value;
}

var phi_slider = document.getElementById("Phase");
var phi_output = document.getElementById("phi");
phi_output.innerHTML = phi_slider.value;
phi_slider.oninput = function () {
    phi_output.innerHTML = this.value;
}