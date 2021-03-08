let monthBtn = document.getElementById("monthly-btn");
let yearBtn = document.getElementById("yearly-btn");
let professionalPrice = document.getElementById("professional-price");
let elitePrice = document.getElementById("elite-price");

yearBtn.addEventListener("click", showYearPrice);
monthBtn.addEventListener("click", showMonthPrice);

function showYearPrice() {
    yearBtn.classList.add("active-year");
    monthBtn.classList.add("inactive-month");
    professionalPrice.innerText = "$70/YEAR";
    elitePrice.innerText = "$150/YEAR";
}
function showMonthPrice() {
    monthBtn.classList.remove("inactive-month");
    yearBtn.classList.remove("active-year");
    professionalPrice.innerText = "$7/MONTH";
    elitePrice.innerText = "$14/MONTH";
}