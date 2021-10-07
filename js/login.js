//Sign in modal
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const buttonSignIn = document.querySelector(".button-sign-in");

buttonSignIn.onclick = function () {
  modal.style.display = "block";
}

closeButton.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Create Account
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const button = document.querySelector(".button-login")

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else
    return false;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

const nameValidate = () => {
  if (checkLength(fullName.value, 0)) {
    nameError.style.display = "none";
    return true;
  } else {
    nameError.style.display = "block";
    return false;
  }
};

const emailValidate = () => {
  if (validateEmail(email.value, 1)) {
    emailError.style.display = "none";
    return true;
  } else {
    emailError.style.display = "block";
    return false;
  }
};

const passwordValidate = () => {
  if (checkLength(password.value, 7)) {
    passwordError.style.display = "none";
    return true;
  } else {
    passwordError.style.display = "block";
    return false;
  }
};

const validateForm = () => {
  if (nameValidate() && emailValidate() && passwordValidate()) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

fullName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
password.addEventListener("keyup", validateForm);


function submitForm(event) {
  event.preventDefault();
  location.href = "is-logged-in.html";
  form.reset();
}


button.addEventListener("click", submitForm);