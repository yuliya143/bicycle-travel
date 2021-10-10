const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const siteNav = document.querySelector('.navigation');
const themeBox = document.querySelector('.theme-toggle');
const navigation = document.querySelector('.navigation');

const HEADER_HEIGHT = 74;

function addNavMenuListener() {
  menuButton.addEventListener('click', handleNavMenuToggle);
}

function handleNavMenuToggle(e) {
  document.body.classList.toggle('page_menu-opened');
  siteNav.classList.toggle('navigation_opened');
  menuButton.classList.toggle('menu-button_opened');
  themeBox.classList.toggle('theme-toggle_header');
}

function addScrollListener() {
  window.addEventListener('scroll', handleSiteScroll);
}

function handleSiteScroll() {
  window.pageYOffset > 100
    ? header.classList.add('header_scrolled')
    : header.classList.remove('header_scrolled');
}

function addNavListener() {
  navigation.addEventListener('click', handleNavLinkClicked);
}

function handleNavLinkClicked(e) {
  e.preventDefault();

  const isLinkClicked = e.target.classList.contains('navigation__link');

  if (isLinkClicked) {
    const sectionId = e.target.getAttribute('href');
    const sectionOffsetTop = document.querySelector(sectionId).offsetTop;

    window.scrollTo({ top: sectionOffsetTop - HEADER_HEIGHT, behavior: 'smooth' });
  }
}

export { addNavListener, addNavMenuListener, addScrollListener };
