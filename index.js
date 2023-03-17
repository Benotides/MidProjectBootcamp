const menu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    console.log("Button hamburger clicked");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.classList.remove("openedMenu");
  } else {
    menu.classList.add("showMenu");
    menuIcon.classList.add("openedMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);