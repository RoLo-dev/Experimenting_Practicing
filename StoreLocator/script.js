const desktopFilterBtn = document.getElementById("desktop-filter");
const filterItems = document.getElementById("filter-items");
const mobileFilterIcon = document.getElementById("mobile-filter");

desktopFilterBtn.addEventListener("click", showFilter);
mobileFilterIcon.addEventListener("click", showFilter);

function showFilter() {
    filterItems.classList.toggle("show");
}

let mobileMenuBtns = document.getElementsByClassName("mobile-menu-btns");

mobileMenuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    })
});