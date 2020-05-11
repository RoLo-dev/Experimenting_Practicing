let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;



// Clear all images
function reset() {
  for(let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Show previous image
function slideLeft() {
  reset();
  sliderImages[ current - 1 ].style.display = 'block';
  current--;
}

// Show the next image
function slideRight() {
  reset();
  sliderImages[ current + 1 ].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
  if ( current === 0 ) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function() {
  if ( current === sliderImages.length - 1 ) {
    current = -1;
  }
  slideRight();
});

// Initializes the slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}
startSlide();

// This is for the carousel for mobile only
let mobileOnly = window.matchMedia('(max-width: 625px)');
let myIndex = 0;

mobileOnly.addListener(screenSize);

function screenSize() {
  if (mobileOnly.matches) {
    reset();
    for(let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'block';
    }
  }
};

