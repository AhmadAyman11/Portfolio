// Toggle navigation menu for mobile

const navbar = document.querySelector(".nav-links");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
});
