let idx = 1;

function slideTimer() {
    document.getElementById("slider").classList.remove(`slider-image-${idx}`);
    idx++;
    if(idx == 5) idx = 1;
    document.getElementById("slider").classList.add(`slider-image-${idx}`);
}

let slider = setInterval(slideTimer, 5000);