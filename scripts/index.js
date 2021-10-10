const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const siteNav = document.querySelector('.navigation');
const themeToggleButton = document.querySelector('.theme-toggle__button');
const themeBox = document.querySelector('.theme-toggle');
const navigation = document.querySelector('.navigation');
const form = document.forms.subscription;
const input = form.elements['user-email'];
const backButton = document.querySelector('.tracks__button_type_left');
const forwardButton = document.querySelector('.tracks__button_type_right');
const tracksSlides = Array.from(document.querySelectorAll('.tracks__item'));
const bicyclesMenu = document.querySelector('.bicycles__menu');
const bicyclesMenuLinks = Array.from(document.querySelectorAll('.bicycles__menu-link'));
const bicyclesBoxes = Array.from(document.querySelectorAll('.bicycles__box'));

const lastTracksIndex = tracksSlides.length - 1;
let trackActiveIndex = 0;

const HEADER_HEIGHT = 74;

function setListeners() {
  addThemeListener();
  addNavMenuListener();
  addNavListener();
  addBicyclesMenuListener();
  addScrollListener();
  addFormListener();
  addListenerToBackButton();
  addListenerToForwardButton();
}

function addThemeListener() {
  themeToggleButton.addEventListener('change', handleThemeToggle);
}

function handleThemeToggle(e) {
  e.target.checked
    ? document.documentElement.classList.add('dark-theme')
    : document.documentElement.classList.remove('dark-theme');
}

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

function addBicyclesMenuListener() {
  bicyclesMenu.addEventListener('click', handleBicyclesMenuClicked);
}

function handleBicyclesMenuClicked(e) {
  e.preventDefault();

  const isLinkClicked = e.target.classList.contains('bicycles__menu-link');

  if (isLinkClicked) {
    const boxId = e.target.getAttribute('href');

    bicyclesBoxes.forEach((box) => {
      boxId === `#${box.id}`
        ? box.classList.add('bicycles__box_active')
        : box.classList.remove('bicycles__box_active');
    });

    bicyclesMenuLinks.forEach((link) => {
      link === e.target
        ? link.classList.add('bicycles__menu-link_active')
        : link.classList.remove('bicycles__menu-link_active');
    });
  }
}

function addFormListener() {
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const email = input.value.trim();

  if (email) {
    input.value = 'Круто!';
    input.blur();

    setTimeout(clearInputValue, 3000);
  }
}

function clearInputValue() {
  input.value = '';
}

function addListenerToBackButton() {
  backButton.addEventListener('click', handleBackButtonClicked);
}

function handleBackButtonClicked(e) {
  trackActiveIndex = --trackActiveIndex <= 0 ? 0 : trackActiveIndex;
  console.log(trackActiveIndex, 'back');

  tracksSlides.forEach((slide, index) => {
    trackActiveIndex === index
      ? slide.classList.add('tracks__item_active')
      : slide.classList.remove('tracks__item_active');

    const slideWidth = tracksSlides[index].clientWidth;
    slide.style.transform = `translateX(-${slideWidth * trackActiveIndex}px)`;
  });
}

function addListenerToForwardButton() {
  forwardButton.addEventListener('click', handleForwardButtonClicked);
}

function handleForwardButtonClicked(e) {
  trackActiveIndex = ++trackActiveIndex >= lastTracksIndex ? lastTracksIndex : trackActiveIndex;
  console.log(trackActiveIndex);

  tracksSlides.forEach((slide, index) => {
    trackActiveIndex === index
      ? slide.classList.add('tracks__item_active')
      : slide.classList.remove('tracks__item_active');

    const slideWidth = tracksSlides[index].clientWidth;
    slide.style.transform = `translateX(-${slideWidth * trackActiveIndex}px)`;
  });
}

setListeners();
