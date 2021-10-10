const bicyclesMenu = document.querySelector('.bicycles__menu');
const bicyclesMenuList = document.querySelector('.bicycles__menu-list');
const bicyclesMenuButton = document.querySelector('.bicycles__menu-button');
const bicyclesMenuLinks = Array.from(document.querySelectorAll('.bicycles__menu-link'));
const bicyclesBoxes = Array.from(document.querySelectorAll('.bicycles__box'));
const bicyclesContent = document.querySelector('.bicycles__content');
const dots = Array.from(document.querySelectorAll('.bicycles__dot'));

let activeSlideIndex = 0;
let currentBicycles = [];
let touchstartX = 0;
let touchendX = 0;

const TUOCH_THRESHHOLD = 50;

function addBicyclesMunuButtonListener() {
  bicyclesMenuButton.addEventListener('click', handleBicyclesMunuButtonClicked);
}

function handleBicyclesMunuButtonClicked(e) {
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

  if (isLeftSwipe) {
    activeSlideIndex = --activeSlideIndex <= 0 ? 0 : activeSlideIndex;
  }

  if (isRightSwipe) {
    activeSlideIndex = ++activeSlideIndex < 3 ? activeSlideIndex : 2;
  }

  dots.forEach((dot, index) => {
    activeSlideIndex === index
      ? dot.classList.add('bicycles__dot_active')
      : dot.classList.remove('bicycles__dot_active');
  });
}

function addBicyclesMenuListener() {
  bicyclesMenu.addEventListener('click', handleBicyclesMenuClicked);
}

function handleBicyclesMenuClicked(e) {
  e.preventDefault();

  const isLinkClicked = e.target.classList.contains('bicycles__menu-link');

  if (isLinkClicked) {
    const boxId = e.target.getAttribute('href');
    const box = document.querySelector(boxId);

    bicyclesMenuButton.textContent = e.target.textContent;

    currentBicycles = Array.from(box.querySelectorAll('.bicycles__item'));

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

export { addBicyclesMenuListener, addBicyclesMunuButtonListener, addTouchListeners };
