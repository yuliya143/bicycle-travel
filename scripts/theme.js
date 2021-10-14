const themeToggleButton = document.querySelector('.theme-toggle__button');

function handleThemeToggle(e) {
  e.target.checked
    ? document.documentElement.classList.add('dark-theme')
    : document.documentElement.classList.remove('dark-theme');
}

function addThemeListener() {
  themeToggleButton.addEventListener('change', handleThemeToggle);
}

export { addThemeListener };
