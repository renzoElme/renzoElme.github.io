document.querySelector(".bars_menu").addEventListener("click", animateBars);

var line1_bar_menu = document.querySelector(".line1_menu");
var line2_bar_menu = document.querySelector(".line2_menu");
var line3_bar_menu = document.querySelector(".line3_menu");
var container_menu = document.querySelector(".navBar");

function animateBars() {
    line1_bar_menu.classList.toggle("activeline1_menu");
    line2_bar_menu.classList.toggle("activeline2_menu");
    line3_bar_menu.classList.toggle("activeline3_menu");

    container_menu.classList.toggle("menu_active");
}

