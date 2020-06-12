const body = document.getElementById("body");
const colorContainer = document.querySelector(".colors");
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
const dragBtn = document.querySelectorAll(".draggable");
let initialColors;
let savedPalettes = [];

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
colorDivs.forEach((drag, index) => {
    drag.addEventListener('dragstart', () => {
        colorDivs[index].classList.add("dragging");
    });
    drag.addEventListener('dragend', () => {
        colorDivs[index].classList.remove("dragging");
    })
})
colorContainer.addEventListener('dragover', function(e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(e.clientY);
    const draggable = document.querySelector(".dragging");
    if(afterElement == null) {
        this.appendChild(draggable);
    } else{
        this.insertBefore(draggable, afterElement);
    }
})

function getDragAfterElement(container, i) {
    const draggableElements = [...container.querySelectorAll(".color:not(.dragging)")]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = i - box.top - box.height / 2;
        if(offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else{
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


// Takes care of the hex input value to change the colorDivs backgroundColor
const hexInput = document.querySelectorAll(".hex-input");
// let inputValue = colorDivs[index].querySelector("input[type='text]");

hexInput.forEach((input, index) => {
    input.addEventListener('keydown', () => {
        hexInputValue(index);
    })
})

function hexInputValue(e, index) {
    if(e.keyCode === 13 && e.target === inputValue) {
        colorDivs[index].style.backgroundColor = inputValue.value;
    }
}
// This toggles the lock icon from locked to unlocked
function lockColor(index) {
    colorDivs[index].classList.toggle("locked");
    if(lockBtn[index].children[0].innerText === "lock_open") {
        lockBtn[index].children[0].innerText = "lock";
    } else {
        lockBtn[index].children[0].innerText = "lock_open";
    }
}
// This allows the spacebar key to generate new colors
function spacebar(e){
    if(e.keyCode === 32 && e.target === body){
        e.preventDefault();
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
        // Add it to the array so it can be stored when color is locked
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
// It makes sure that the changes are updated
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
// Saving a color palette locally
const saveBtn = document.querySelector(".save");
const submitSave = document.querySelector(".submit-save");
const closeSave = document.querySelector(".close-save");
const saveContainer = document.querySelector(".save-container");
const saveInput = document.querySelector(".save-container input");
const libraryBtn = document.querySelector(".library");
const libraryContainer = document.querySelector(".library-container");
const savedPalettesDiv = document.querySelector(".saved-palettes");
const closeLibraryBtn = document.querySelector(".close-library");

saveBtn.addEventListener('click', openSavePopup);
closeSave.addEventListener('click', closeSavePopup);
submitSave.addEventListener('click', savePalette);
libraryBtn.addEventListener('click', openLibrary);
closeLibraryBtn.addEventListener('click', closeLibrary);
window.addEventListener('click', outsideClick);

function outsideClick(e){
    const popup1 = saveContainer.children[0];
    const popup2 = libraryContainer.children[0];
    if(e.target === saveContainer) {
        saveContainer.classList.remove("active");
        popup1.classList.remove("active");
    }
    if(e.target === libraryContainer) {
        libraryContainer.classList.remove("active");
        popup2.classList.remove("active");
    }
}
function openSavePopup(e) {
    const popup = saveContainer.children[0];
    saveContainer.classList.add("active");
    popup.classList.add("active");
    saveInput.focus();
}
function closeSavePopup(e) {
    const popup = saveContainer.children[0];
    saveContainer.classList.remove("active");
    popup.classList.remove("active");
}
function savePalette(e) {
    saveContainer.classList.remove("active");
    popup.classList.remove("active");
    const name = saveInput.value;
    const colors = [];
    currentHexes.forEach(hex => {
        colors.push(hex.innerText);
    })
    // Creating an object
    let paletteNumber;
    const paletteObjects = JSON.parse(localStorage.getItem("palettes"));
    if(paletteObjects) {
        paletteNumber = paletteObjects.length;
    } else {
        paletteNumber = savedPalettes.length;
    }

    const paletteObj = { name, colors, number: paletteNumber };
    savedPalettes.push(paletteObj);
    // Saving it to localStorage
    saveToLocal(paletteObj);
    saveInput.value = "";
    // Creating a div to hold the saved palette in library
    const palette = document.createElement("div");
    const titlePreviewDiv = document.createElement("div");
    const title = document.createElement("p");
    const preview = document.createElement("div");
    const deleteDiv = document.createElement("div");
    const paletteBtn = document.createElement("button");
    titlePreviewDiv.classList.add("colors-container");
    palette.classList.add("saved-palette");
    title.innerText = paletteObj.name;
    preview.classList.add("small-preview");
    paletteObj.colors.forEach(smallColor => {
        const smallDiv = document.createElement("div");
        smallDiv.style.backgroundColor = smallColor;
        preview.appendChild(smallDiv);
    })
    deleteDiv.classList.add("delete-container");
    paletteBtn.classList.add("delete-btn");
    paletteBtn.innerHTML = "<span class='material-icons'>delete</span>";
    titlePreviewDiv.classList.add(paletteObj.number);
    // Adding an event to the button
    titlePreviewDiv.addEventListener('click', e => {
        closeLibrary();
        const paletteIndex = e.target.classList[1];
        initialColors = [];
        // console.log(savedPalettes[paletteIndex]);
        savedPalettes[paletteIndex].colors.forEach((color, index) => {
            initialColors.push(color);
            colorDivs[index].style.backgroundColor = color;
            const text = colorDivs[index].children[0];
            const controlIcons = colorDivs[index].querySelectorAll(".controls button");
            checkTextContrast(color, text, controlIcons);
            updateTextUI(index);
        });
        resetInputs();
    })
    // Now we append it to the Library
    titlePreviewDiv.appendChild(title);
    titlePreviewDiv.appendChild(preview);
    deleteDiv.appendChild(paletteBtn);
    palette.appendChild(titlePreviewDiv)
    palette.appendChild(deleteDiv);
    savedPalettesDiv.appendChild(palette);
}
function saveToLocal(paletteObj) {
    let localPalettes;
    if(localStorage.getItem("palettes") === null) {
        localPalettes = [];
    } else {
        localPalettes = JSON.parse(localStorage.getItem("palettes"));
    }
    localPalettes.push(paletteObj);
    localStorage.setItem("palettes", JSON.stringify(localPalettes));
}

function openLibrary() {
    const popup = libraryContainer.children[0];
    libraryContainer.classList.add("active");
    popup.classList.add("active");
}
function closeLibrary() {
    const popup = libraryContainer.children[0];
    libraryContainer.classList.remove("active");
    popup.classList.remove("active");
}

function getFromLocalStorage() {
    if(localStorage.getItem("palettes") === null) {
        localPalettes = [];
    } else {
        const paletteObjects = JSON.parse(localStorage.getItem("palettes"));
        savedPalettes = [...paletteObjects];
        paletteObjects.forEach(paletteObj => {
            // Generate saved palette in library
            const palette = document.createElement("div");
            const titlePreviewDiv = document.createElement("div");
            const title = document.createElement("p");
            const preview = document.createElement("div");
            const deleteDiv = document.createElement("div");
            const paletteBtn = document.createElement("button");
            titlePreviewDiv.classList.add("colors-container");
            palette.classList.add("saved-palette");
            title.innerText = paletteObj.name;
            preview.classList.add("small-preview");
            paletteObj.colors.forEach(smallColor => {
                const smallDiv = document.createElement("div");
                smallDiv.style.backgroundColor = smallColor;
                preview.appendChild(smallDiv);
            })
            deleteDiv.classList.add("delete-container");
            paletteBtn.classList.add("delete-btn");
            paletteBtn.innerHTML = "<span class='material-icons'>delete</span>";
            titlePreviewDiv.classList.add(paletteObj.number);
            // Adding an event to the button
            titlePreviewDiv.addEventListener('click', e => {
                closeLibrary();
                const paletteIndex = e.target.classList[1];
                initialColors = [];
                paletteObjects[paletteIndex].colors.forEach((color, index) => {
                    initialColors.push(color);
                    colorDivs[index].style.backgroundColor = color;
                    const text = colorDivs[index].children[0];
                    const controlIcons = colorDivs[index].querySelectorAll(".controls button");
                    checkTextContrast(color, text, controlIcons);
                    updateTextUI(index);
                });
                resetInputs();
            })
            // Now we need to append it to Library
            titlePreviewDiv.appendChild(title);
            titlePreviewDiv.appendChild(preview);
            deleteDiv.appendChild(paletteBtn);
            palette.appendChild(titlePreviewDiv)
            palette.appendChild(deleteDiv);
            savedPalettesDiv.appendChild(palette);
        })
    }
}

getFromLocalStorage();
randomColors();