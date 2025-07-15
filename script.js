// TOGGLE MENU

const hamburger = document.getElementById('hamburger');
const menuLayer = document.getElementById('menu');

hamburger.onclick = () => {
  menuLayer.classList.add('show');
  hamburger.style.display = 'none';
};
const hamburgerMenu = document.getElementById('hamburger-menu');
if (hamburgerMenu) {
  hamburgerMenu.onclick = () => {
    menuLayer.classList.remove('show');
    hamburger.style.display = 'flex';
  };
}

// DARK & LIGHT MODE

const themeBtn = document.getElementById('theme');
const prefersDark = true; // default ke dark mode

// Simpan mode ke localStorage
function setTheme(mode) {
  if (mode === 'light') {
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
    themeBtn.src = 'asset/img/Light.svg'; // opsional ganti ikon
    themeBtn.alt = 'Light theme btn';
  } else {
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    themeBtn.src = 'asset/img/moon.svg';
    themeBtn.alt = 'Dark theme btn';
  }
}

// Toggle antara dark dan light
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Event: Klik atau Enter
themeBtn.addEventListener('click', toggleTheme);
themeBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') toggleTheme();
});

// Saat load: pakai dari localStorage atau default ke dark
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});
