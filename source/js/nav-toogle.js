let mainNav = document.querySelector('.main-nav');
let mainNavToggle = document.querySelector('.main-nav__toogle');
let userNav = document.querySelector('.main-nav__user-nav');
let primaryNav = document.querySelector('.main-nav__primary-nav');

const initToogleNavigation = () => {
  mainNavToggle.classList.remove('main-nav__toogle--no-js');
  userNav.classList.add('main-nav__user-nav--js-menu');
  primaryNav.classList.add('main-nav__primary-nav--menu-closed');

  mainNavToggle.addEventListener('click', () => {
    mainNavToggle.classList.toggle('main-nav__toogle--closed')
    mainNavToggle.classList.toggle('main-nav__toogle--opened')
    primaryNav.classList.toggle('main-nav__primary-nav--menu-closed')
    primaryNav.classList.toggle('main-nav__primary-nav--menu-opened')
  });
}

initToogleNavigation();
