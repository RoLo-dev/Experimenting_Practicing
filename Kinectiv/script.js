let monthBtn = document.getElementById("monthly-btn");
let yearBtn = document.getElementById("yearly-btn");

yearBtn.addEventListener("click", showYearPrice);
monthBtn.addEventListener("click", showMonthPrice);

function showYearPrice() {
    yearBtn.classList.add("active-year");
    monthBtn.classList.add("inactive-month");
}
function showMonthPrice() {
    monthBtn.classList.remove("inactive-month");
    yearBtn.classList.remove("active-year");
}