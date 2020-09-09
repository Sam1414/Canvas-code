var amp_slider = document.getElementById("Amplitude");
var amp_output = document.getElementById("amp");

// Display the default slider value
amp_output.innerHTML = amp_slider.value;

// Update the current slider value (each time you drag the slider handle)
amp_slider.oninput = function () {
    amp_output.innerHTML = this.value;
}