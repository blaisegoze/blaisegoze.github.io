const navBar = document.querySelector('.navBar');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navBar.classList.add('open');
    menuOpen = true;
  } else {
    navBar.classList.remove('open');
    menuOpen = false;
  }
});