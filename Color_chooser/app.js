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

const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelectorAll('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
const controls = document.querySelectorAll(".controls");
let initialColors;

// Event listeners
sliders.forEach(slider => {
    slider.addEventListener('input', hslControls);
})
colorDivs.forEach((div, index) => {
    div.addEventListener('change', () => {
        updateTextUI(index);
    })
})

// This takes care of generating colors
function randomHex() {
    const hexColor = chroma.random();
    return hexColor;
}

function randomColors() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const sliderIcon = div.children[1].children[0];
        const lockIcon = div.children[1].children[1];
        const randomColor = randomHex();

        // Applying the generated hex as the background color
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
        // Checking for contrast
        checkTextContrast(randomColor, hexText, sliderIcon, lockIcon);
        // Initialize color sliders
        const color =  chroma(randomColor);
        const sliders = div.querySelectorAll('.sliders input');
        const hue = sliders[0];
        const brightness = sliders[1];
        const saturation = sliders[2];

        colorizeSliders(color, hue, brightness, saturation);
    });
}

function checkTextContrast(color, text, button, button2) {
    const luminance = chroma(color).luminance();
    if(luminance > 0.5) {
        text.style.color = "black";
        button.style.color = "black";
        button2.style.color = "black";
    } else {
        text.style.color = "white";
        button.style.color = "white";
        button2.style.color = "white";
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

    const bgColor = colorDivs[index].querySelector("h2").innerText;

    let color = chroma(bgColor)
        .set("hsl.s", saturation.value)
        .set("hsl.l", brightness.value)
        .set("hsl.h", hue.value);

    colorDivs[index].style.backgroundColor = color;
}

function updateTextUI(index) {
    const activeDiv = colorDivs[index];
    const color = chroma(activeDiv.style.backgroundColor);
    const textHex = activeDiv.querySelector("h2");
    const icons = activeDiv.querySelectorAll(".controls button");
    textHex.innerText = color.hex();
}

randomColors();