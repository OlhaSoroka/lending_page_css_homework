const burger = document.querySelector(".header__burger");
const cross = document.querySelector(".side_menu__cross");
const sideMenu = document.querySelector(".side_menu");

burger.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(0vw)";
});
cross.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(-100vw)";
});
