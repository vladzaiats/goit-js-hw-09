const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const formData = { email: '', message: '' };

const checkLocalStorage = () => {
  const localInf = JSON.parse(localStorage.getItem('feedback-form-state'));

  formData.email = localInf.email;
  formData.message = localInf.message;

  email.value = formData.email;
  message.value = formData.message;
};

if (localStorage.length !== 0) {
  checkLocalStorage();
}

const savingLocal = () => {
  const formDataInJSON = JSON.stringify(formData);

  localStorage.setItem('feedback-form-state', formDataInJSON);
};

const listenEmail = e => {
  e.target === email
    ? (formData.email = e.target.value.trim())
    : (formData.message = e.target.value.trim());

  savingLocal();
};

const formSubmit = e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formData.email = '';
  formData.message = '';

  localStorage.removeItem('feedback-form-state');

  form.reset();
};

form.addEventListener('input', listenEmail);
form.addEventListener('submit', formSubmit);
