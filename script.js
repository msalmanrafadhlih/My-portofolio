// TOGGLE MENU
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');
const menuLayer = document.getElementById('menu');

hamburger.onclick = () => {
  menuLayer.classList.toggle('show');
};

hamburgerMenu.onclick = () => {
  menuLayer.classList.remove('show');
};