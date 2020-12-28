let myIndex = 0;

function carousel() {
    let i;
    let x = document.getElementsByClassName("img-container");
    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 8000);
}
carousel();

// This is for the smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 200
});

// This is for the hamburger menu
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const menuContainer = document.getElementById("hamburger-menu");
const body = document.getElementById("body");

menuContainer.addEventListener("click", openMobileNav);
body.addEventListener("click", outsideClick);

function openMobileNav() {
    menuIcon.classList.toggle("animate");
    mobileMenu.classList.toggle("show");
}
function outsideClick(e) {
    if(e.target === body) {
        console.log("clicked");
        menuIcon.classList.remove("animate");
        mobileMenu.classList.remove("show");
    }
}