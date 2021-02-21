const desktopFilterBtn = document.getElementById("desktop-filter");
const filterItems = document.getElementById("filter-items");
const mobileFilterIcon = document.getElementById("mobile-filter");

desktopFilterBtn.addEventListener("click", showFilter);
mobileFilterIcon.addEventListener("click", showFilter);

function showFilter() {
    filterItems.classList.toggle("show");
}

const listBtn = document.getElementById("list-btn");
const cardContainer = document.getElementById("card-container");
const mapBtn = document.getElementById("map-btn");

listBtn.addEventListener("click", showList);
mapBtn.addEventListener("click", showMap);

function showMap() {
    cardContainer.classList.remove("show");
}
function showList() {
    cardContainer.classList.toggle("show");
}

let mobileMenuBtns = document.getElementsByClassName("mobile-menu-btns");

mobileMenuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    })
});


