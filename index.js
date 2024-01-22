document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navItems = document.querySelector(".nav-item");
  const navbar = document.querySelector(".navbar");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  hamburgerMenu.addEventListener("click", function () {
    navItems.classList.toggle("show");
    navbar.classList.toggle("abcd");
    bar1.classList.toggle("cross1");
    bar2.classList.toggle("cross2");
    bar3.classList.toggle("remove");
  });
});

function changeCurrency() {
  var currencySelect = document.getElementById("currency");
  var selectedCurrency = currencySelect.value;
  var conversionRates = {
    inr: 1,
    usd: 0.012,
    eur: 0.011,
    gbp: 0.0095,
  };

  ["starter", "pro"].forEach(function (plan) {
    var tile = document.getElementById(plan + "-tile");
    var originalPrice = parseFloat(tile.getAttribute("data-original-price"));
    var convertedPrice = originalPrice * conversionRates[selectedCurrency];

    if (selectedCurrency === "inr") {
      tile.querySelector(".price").textContent =
        "₹" + convertedPrice.toFixed(2) + "/month";
    } else if (selectedCurrency === "usd") {
      tile.querySelector(".price").textContent =
        "$" + convertedPrice.toFixed(2) + "/month";
    } else if (selectedCurrency === "eur") {
      tile.querySelector(".price").textContent =
        "€" + convertedPrice.toFixed(2) + "/month";
    } else if (selectedCurrency === "gbp") {
      tile.querySelector(".price").textContent =
        "£" + convertedPrice.toFixed(2) + "/month";
    }
  });
}
