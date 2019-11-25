const navWrapper = document.querySelector('.nav-wrapper'),
  menuToggle = document.querySelector('.menu-toggle'),
  mainNav = document.querySelector('.main-nav'),
  heroContent = document.querySelector('#hero-content'),
  menuToggleBtn = document.querySelector('#menu-toggle-btn'),
  closeIcon = document.querySelector('#close-icon'),
  upIcon = document.querySelector('.backup');


//Load the menu correctly on page load
document.addEventListener('DOMContentLoaded', () => {
  const winWidth = window.innerWidth;
  if (winWidth < 992) {
    menuToggle.classList.add('active');
    navWrapper.appendChild(mainNav);
  } else {
    mainNav.classList.add('menuOn');
  }
});

// Activate and move menu on browser resize
window.addEventListener('resize', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 992) {
    menuToggle.classList.remove('active');
    heroContent.appendChild(mainNav);
    mainNav.classList.add('menuOn');
    mainNav.classList.remove('active');
    menuToggleBtn.classList.remove('active');
  } else {
    menuToggle.classList.add('active');
    navWrapper.appendChild(mainNav);
    mainNav.classList.remove('menuOn');
  }
});

//activate mobile menu on click
menuToggleBtn.addEventListener('click', () => {
  mainNav.classList.add('active');
  closeIcon.classList.add('active');
});

//close mobile menu
closeIcon.addEventListener('click', () => {
  mainNav.classList.remove('active');
  closeIcon.classList.remove('active');
});
mainNav.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.hasAttribute('href')) {
    return false;
  } else {
    mainNav.classList.remove('active');
    closeIcon.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY > 500) {
    upIcon.classList.add('active');
  } else if (scrollY < 500) {
    upIcon.classList.remove('active');
  }
});