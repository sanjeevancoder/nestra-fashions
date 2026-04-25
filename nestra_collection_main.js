//selecting the elements for navbar
const popupOpenButton = document.getElementById("open-popup");
const popupCloseButton = document.getElementById("close-btn");
const sidenav = document.getElementById("side-nav-popup");
const navLinks = document.querySelectorAll("#side-nav-popup ul li a");

popupOpenButton.addEventListener("click", () => {
    sidenav.classList.toggle("show");
});

popupCloseButton.addEventListener("click", () => {
    sidenav.classList.remove("show");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidenav.classList.remove("show");
    });
});

window.addEventListener("click", (event) => {
    if (event.target === sidenav) {
        sidenav.classList.remove("show");
    }
});

//getting the search fiter function's elements
let enteredText = "";
let input = document.getElementById("search");
let productContainer = document.querySelectorAll(".products-container");
