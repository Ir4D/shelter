/* ****************************** */
/* BURGER MENU */
/* ****************************** */

const burgerMenu = document.querySelector(".burger-menu");
const navContainer = document.querySelector(".nav-container");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navContainer.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((elem) =>
  elem.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navContainer.classList.remove("active");
  })
);

document.addEventListener('click', function(event) {
  if (!burgerMenu.contains(event.target)) {
    burgerMenu.classList.remove("active");
    navContainer.classList.remove("active");
  }
});