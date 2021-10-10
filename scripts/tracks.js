const backButton = document.querySelector('.tracks__button_type_left');
const forwardButton = document.querySelector('.tracks__button_type_right');
const tracksSlides = Array.from(document.querySelectorAll('.tracks__item'));

const lastTracksIndex = tracksSlides.length - 1;
let trackActiveIndex = 0;

function addListenerToBackButton() {
  backButton.addEventListener('click', handleBackButtonClicked);
}

function handleBackButtonClicked(e) {
  trackActiveIndex = --trackActiveIndex <= 0 ? 0 : trackActiveIndex;

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

export { addListenerToBackButton, addListenerToForwardButton };
