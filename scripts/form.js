const form = document.forms.subscription;
const input = form.elements['user-email'];

function addFormListener() {
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log('event bleat');

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

export { addFormListener };
