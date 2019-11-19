const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input--login");
const passwordInput = document.querySelector(".login-form__input--password");

const handleFormSubmit = e => {
  e.preventDefault();
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;
  console.log(loginValue, passwordValue);
  if (loginValue) {
    // loginForm.submit();
  }
};

loginForm.addEventListener("submit", handleFormSubmit);
