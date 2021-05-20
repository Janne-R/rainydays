const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("button");

/*
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

function validateForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(message.value, 24)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);*/


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

const messageValidate = () => {
  if (checkLength(message.value, 24)) {
    messageError.style.display = "none";
    return true;
  } else {
    messageError.style.display = "block";
    return false;
  }
};

const validateForm = () => {
  if (nameValidate() && emailValidate() && messageValidate()) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

fullName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

function submitForm(event) {
  event.preventDefault();
  location.href = "thankyou-contact.html";
  form.reset();
}

form.addEventListener("submit", submitForm);
