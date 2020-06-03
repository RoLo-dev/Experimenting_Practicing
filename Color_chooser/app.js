// This is the function how you would generate random hex colors
// function randomHex() {
//     const letters = "0123456789ABCDEF";
//     let hash = "#";
//     for(let i = 0; i < 6; i++) {
//         hash += letters[Math.floor(Math.random() * 16)];
//     }
//     return hash;
// }
// console.log(randomHex());

const body = document.getElementById("body");
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
const controls = document.querySelectorAll(".controls");
const popup = document.querySelector(".copy-container");
const adjustBtn = document.querySelectorAll(".adjust");
const closeAdjustments = document.querySelectorAll(".close-adjustment");
const sliderContainers = document.querySelectorAll(".sliders");
const lockBtn = document.querySelectorAll(".lock");
let initialColors;

// Event listeners
generateBtn.addEventListener('click', randomColors);
body.addEventListener('keydown', spacebar);

sliders.forEach(slider => {
    slider.addEventListener('input', hslControls);
})
colorDivs.forEach((div, index) => {
    div.addEventListener('change', () => {
        updateTextUI(index);
    })
})
currentHexes.forEach(hex => {
    hex.addEventListener('click', () => {
        copyToClipboard(hex);
    })
})
adjustBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        openAdjustmentPanel(index);
    });
})
closeAdjustments.forEach((button, index) => {
    button.addEventListener('click', () => {
        closeAdjustmentPanel(index);
    })
})
lockBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        lockColor(index);
    })
})

// This toggles the lock icons
function lockColor(index) {
    colorDivs[index].classList.toggle("locked");
    if(lockBtn[index].children[0].innerText === "lock_open") {
        lockBtn[index].children[0].innerText = "lock";
    } else {
        lockBtn[index].children[0].innerText = "lock_open";
    }
}

// This allows the spacebar to generate new colors
function spacebar(event){
    if(event.keyCode === 32){
        event.preventDefault();
        randomColors();
    }
}

// This takes care of generating colors
function randomHex() {
    const hexColor = chroma.random();
    return hexColor;
}

function randomColors() {
    initialColors = [];
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const controlIcons = div.querySelectorAll(".controls button");
        const randomColor = randomHex();
        // Add it to the Array
        if(div.classList.contains("locked")) {
            initialColors.push(hexText.innerText);
            return
        } else {
            initialColors.push(chroma(randomColor).hex());
        }

        // Applying the generated hex as the background color
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
        // Checking for contrast
        checkTextContrast(randomColor, hexText, controlIcons);
        // Initialize color sliders
        const color =  chroma(randomColor);
        const sliders = div.querySelectorAll('.sliders input');
        const hue = sliders[0];
        const brightness = sliders[1];
        const saturation = sliders[2];

        colorizeSliders(color, hue, brightness, saturation);
    });
    // Resetting inputs
    resetInputs();
}

function checkTextContrast(color, text, buttons) {
    const luminance = chroma(color).luminance();
    if(luminance > 0.5) {
        text.style.color = "black";
        for(button of buttons) {
            button.style.color = "black";
        }
    } else {
        text.style.color = "white";
        for(button of buttons) {
            button.style.color = "white";
        }
    }
}

function colorizeSliders(color, hue, brightness, saturation) {
    // Scale saturation
    const noSaturation = color.set('hsl.s', 0);
    const fullSaturation = color.set('hsl.s', 1);
    const scaleSaturation = chroma.scale([noSaturation, color, fullSaturation]);
    // Scale brightness
    const midBright = color.set("hsl.l", 0.5);
    const scaleBright = chroma.scale(["black", midBright, "white"])

    // Update input colors
    saturation.style.backgroundImage = `linear-gradient(to right, ${scaleSaturation(0)}, ${scaleSaturation(1)})`;

    brightness.style.backgroundImage = `linear-gradient(to right, ${scaleBright(0)}, ${scaleBright(0.5)}, ${scaleBright(1)})`;

    hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`;
}

function hslControls(e) {
    const index = 
    e.target.getAttribute('data-bright') ||
    e.target.getAttribute('data-sat') || 
    e.target.getAttribute('data-hue');

    let sliders = e.target.parentElement.querySelectorAll('input[type="range"]');
    const hue = sliders[0];
    const brightness = sliders[1];
    const saturation = sliders[2];

    const bgColor = initialColors[index];

    let color = chroma(bgColor)
        .set("hsl.s", saturation.value)
        .set("hsl.l", brightness.value)
        .set("hsl.h", hue.value);

    colorDivs[index].style.backgroundColor = color;
    // Update sliders
    colorizeSliders(color, hue, brightness, saturation);
}

function updateTextUI(index) {
    const activeDiv = colorDivs[index];
    const color = chroma(activeDiv.style.backgroundColor);
    const textHex = activeDiv.querySelector("h2");
    const controlIcons = activeDiv.querySelectorAll(".controls button");
    textHex.innerText = color.hex();
    // Check contrast
    checkTextContrast(color, textHex, controlIcons);
}

function resetInputs() {
    const sliders = document.querySelectorAll(".sliders input");
    sliders.forEach(slider => {
        if(slider.name === "hue") {
            const hueColor = initialColors[slider.getAttribute("data-hue")];
            const hueValue = chroma(hueColor).hsl()[0];
            slider.value = Math.floor(hueValue);
        }
        if(slider.name === "brightness") {
            const brightColor = initialColors[slider.getAttribute("data-bright")];
            const brightValue = chroma(brightColor).hsl()[2];
            slider.value = Math.floor(brightValue * 100) / 100;
        }
        if(slider.name === "saturation") {
            const satColor = initialColors[slider.getAttribute("data-sat")];
            const satValue = chroma(satColor).hsl()[1];
            slider.value = Math.floor(satValue * 100) / 100;
        }
    })
}

function copyToClipboard(hex) {
    const el = document.createElement("textarea");
    const popupBox = popup.children[0];
    el.value = hex.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    popup.classList.add("active");
        popupBox.classList.add("active");
    setTimeout(() => {
        popup.classList.remove("active");
        popupBox.classList.remove("active");
    }, 1000)
}

// These functions take care of the slider container
function openAdjustmentPanel(index) {
    sliderContainers[index].classList.toggle("active");
}
function closeAdjustmentPanel(index) {
    sliderContainers[index].classList.remove("active");
}

randomColors();