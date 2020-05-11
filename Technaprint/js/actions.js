// This code is for the mobile nav
let mobileOnly = window.matchMedia('(max-width: 650px)');
let open = document.getElementById('open');
let close = document.getElementById('close');

mobileOnly.addListener(screenSize);
open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function screenSize() {
  if (mobileOnly.matches) {
    openNav();
    closeNav();
  } else {
    open.style.display = 'none';
  }
};

function openNav() {
  document.getElementById("open").style.display = "none";
  document.getElementById("nav").style.width = "100%";
};

function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("open").style.display = "block";
};


// This code is for the banner carousel
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('bannerPics');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = 'block';
  setTimeout(carousel, 8000);
};