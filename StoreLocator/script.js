const desktopFilterBtn = document.getElementById("desktop-filter");
const filterItems = document.getElementById("filter-items");

desktopFilterBtn.addEventListener("click", showFilter);

function showFilter() {
    console.log("clicked");
    filterItems.classList.toggle("show");
}