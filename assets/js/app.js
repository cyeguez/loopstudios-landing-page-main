const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const nav = document.getElementById("nav");

function toogleMenu() {
  btnMenu.classList.toggle("open-menu");
  btnClose.classList.toggle("open-menu");
  nav.classList.toggle("open-menu");
}

btnMenu.addEventListener("click", () => {
  toogleMenu();
});

btnClose.addEventListener("click", () => {
  toogleMenu();
});
