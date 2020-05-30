// This is the function how you would generate random hex colors
function randomHex() {
    const letters = "0123456789ABCDEF";
    let hash = "#";
    for(let i = 0; i < 6; i++) {
        hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;
}
console.log(randomHex());

const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelectorAll('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

// This takes care of generating colors
function randomColors() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const randomColor = randomHex();

        // Applying the generated hex as the background color
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}
randomColors();