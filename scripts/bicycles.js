const bicyclesMenu = document.querySelector('.bicycles__menu');
const bicyclesMenuList = document.querySelector('.bicycles__menu-list');
const bicyclesMenuButton = document.querySelector('.bicycles__menu-button');
const bicyclesMenuLinks = Array.from(document.querySelectorAll('.bicycles__menu-link'));
const bicyclesBoxes = Array.from(document.querySelectorAll('.bicycles__box'));
const bicyclesContent = document.querySelector('.bicycles__content');
const dots = Array.from(document.querySelectorAll('.bicycles__dot'));

let activeSlideIndex = 0;
let currentBicycles = findBicycles(bicyclesBoxes[0]);
let touchstartX = 0;
let touchendX = 0;

const TUOCH_THRESHHOLD = 50;

function addBicyclesMunuButtonListener() {
  bicyclesMenuButton.addEventListener('click', handleBicyclesMunuButtonClicked);
}

function handleBicyclesMunuButtonClicked() {
  bicyclesMenuList.classList.toggle('bicycles__menu-list_opened');
}

function addTouchListeners() {
  bicyclesContent.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  bicyclesContent.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  });
}

function handleGesture() {
  const isTouchHappened = Math.abs(touchstartX - touchendX) > TUOCH_THRESHHOLD;
  const isLeftSwipe = isTouchHappened && touchendX < touchstartX;
  const isRightSwipe = isTouchHappened && touchendX > touchstartX;
  const lastIndex = currentBicycles.length - 1;

  if (isLeftSwipe) {
    activeSlideIndex = ++activeSlideIndex <= lastIndex ? activeSlideIndex : 0;
  }

  if (isRightSwipe) {
    activeSlideIndex = --activeSlideIndex < 0 ? lastIndex : activeSlideIndex;
  }

  setActiveSlide();
  setActiveDot();
}

function addBicyclesMenuListener() {
  bicyclesMenu.addEventListener('click', handleBicyclesMenuClicked);
}

function handleBicyclesMenuClicked(e) {
  e.preventDefault();

  const isLinkClicked = e.target.classList.contains('bicycles__menu-link');

  if (isLinkClicked) {
    switchBox(e.target);
  }
}

function switchBox(link) {
  const boxId = link.getAttribute('href');
  const box = document.querySelector(boxId);

  bicyclesMenuButton.textContent = link.textContent;
  bicyclesMenuList.classList.remove('bicycles__menu-list_opened');

  activeSlideIndex = 0;
  currentBicycles = findBicycles(box);

  setActiveSlide();
  setActiveDot();
  setActiveBox(boxId);
  setActiveMenuLink(link);
}

function findBicycles(box) {
  return Array.from(box.querySelectorAll('.bicycles__item'));
}

function setActiveSlide() {
  currentBicycles.forEach((card, index) => {
    activeSlideIndex === index
      ? card.classList.add('bicycles__item_active')
      : card.classList.remove('bicycles__item_active');
  });
}

function setActiveDot() {
  dots.forEach((dot, index) => {
    activeSlideIndex === index
      ? dot.classList.add('bicycles__dot_active')
      : dot.classList.remove('bicycles__dot_active');
  });
}

function setActiveBox(boxId) {
  bicyclesBoxes.forEach((box) => {
    boxId === `#${box.id}`
      ? box.classList.add('bicycles__box_active')
      : box.classList.remove('bicycles__box_active');
  });
}

function setActiveMenuLink(menuLink) {
  bicyclesMenuLinks.forEach((link) => {
    link === menuLink
      ? link.classList.add('bicycles__menu-link_active')
      : link.classList.remove('bicycles__menu-link_active');
  });
}

function addBicyclesListeners() {
  addBicyclesMenuListener();
  addBicyclesMunuButtonListener();
  addTouchListeners();
}

export { addBicyclesListeners };
