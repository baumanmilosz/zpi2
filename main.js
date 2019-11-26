const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input--login");
const passwordInput = document.querySelector(".login-form__input--password");
const loginFormButton = document.querySelector(".login-form__button");
const formInputsArray = [loginInput, passwordInput];

const handleInputValidate = e => {
  const loginValue = loginInput.value;
  const loginRegExp = new RegExp("^[1-9][0-9]{4}$", "gmi");
  const isLoginValidated = loginRegExp.test(loginValue);

  const passwordValue = passwordInput.value;
  const passwordRegExp = new RegExp("^([a-zA-Z0-9_-]){8,}$", "gmi");
  const isPasswordValidated = passwordRegExp.test(passwordValue);

  if (isLoginValidated && isPasswordValidated) {
    loginFormButton.removeAttribute("disabled");
  } else {
    loginFormButton.setAttribute("disabled", true);
  }
};

formInputsArray.forEach(item =>
  item.addEventListener("input", handleInputValidate)
);

const handleFormSubmit = e => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  console.log(loginValue, passwordValue);
};
loginForm.addEventListener("submit", handleFormSubmit);
