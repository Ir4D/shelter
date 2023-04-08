/* ******************** */
/* BURGER MENU */
/* ******************** */

const burgerMenu = document.querySelector(".burger-menu");
const navContainer = document.querySelector(".nav-container");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navContainer.classList.toggle("active");
  overlay.classList.toggle("visible");
  body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav-link").forEach((elem) =>
  elem.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navContainer.classList.remove("active");
    overlay.classList.remove("visible");
    body.classList.remove("no-scroll");
  })
);

document.addEventListener('click', function(event) {
  if (!burgerMenu.contains(event.target)) {
    burgerMenu.classList.remove("active");
    navContainer.classList.remove("active");
    overlay.classList.remove("visible");
    body.classList.remove("no-scroll");
  }
});
