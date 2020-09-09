var wl_slider = document.getElementById("Wavelength");
var wl_output = document.getElementById("wl");

// Display the default slider value
console.log(wl_slider.value);
wl_output.innerHTML = wl_slider.value;

// Update the current slider value (each time you drag the slider handle)
wl_slider.oninput = function () {
    wl_output.innerHTML = this.value;
}