const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (product) {
  total += parseInt(product.prices.price);
  cartContainer.innerHTML +=
    `
  <div class="cart-item">
  <h4>${product.name}</h4>
  <div style="background-image: url('${product.images[0].src}')" class="cart-image"></div>
  <p>Size: ${product.size.toUpperCase()}</p>
  <p>Color: ${product.color}</p>
  <p>Price: $ ${product.prices.price},-</p>
  </div>
  `

})
totalContainer.innerHTML = `Total: $ ${total},-`;

//payment form
const form = document.querySelector("payment-form");
const fullName = document.querySelector("#fname");
const nameError = document.querySelector("#fnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adr");
const adrError = document.querySelector("#adrError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const cName = document.querySelector("#cname");
const cNameError = document.querySelector("#cnameError");
const ccNum = document.querySelector("#ccnum");
const ccNumError = document.querySelector("#ccNumError");
const expMonth = document.querySelector("#expmonth");
const expMonthError = document.querySelector("#expmonthError");
const expYear = document.querySelector("#expyear");
const expYearError = document.querySelector("#expyearError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");
const button = document.querySelector(".button-checkout");


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

const adressValidate = () => {
  if (checkLength(adress.value, 4)) {
    adrError.style.display = "none";
    return true;
  } else {
    adrError.style.display = "block";
    return false;
  }
};

const zipValidate = () => {
  if (checkLength(zip.value, 3)) {
    zipError.style.display = "none";
    return true;
  } else {
    zipError.style.display = "block";
    return false;
  }
};

const cityValidate = () => {
  if (checkLength(city.value, 4)) {
    cityError.style.display = "none";
    return true;
  } else {
    cityError.style.display = "block";
    return false;
  }
};

const cNameValidate = () => {
  if (checkLength(cName.value, 0)) {
    cNameError.style.display = "none";
    return true;
  } else {
    cNameError.style.display = "block";
    return false;
  }
};

const ccNumValidate = () => {
  if (checkLength(ccNum.value, 15)) {
    ccNumError.style.display = "none";
    return true;
  } else {
    ccNumError.style.display = "block";
    return false;
  }
};

const expMonthValidate = () => {
  if (checkLength(expMonth.value, 1)) {
    expMonthError.style.display = "none";
    return true;
  } else {
    expMonthError.style.display = "block";
    return false;
  }
};

const expYearValidate = () => {
  if (checkLength(expYear.value, 3)) {
    expYearError.style.display = "none";
    return true;
  } else {
    expYearError.style.display = "block";
    return false;
  }
};

const cvcValidate = () => {
  if (checkLength(cvc.value, 2)) {
    cvcError.style.display = "none";
    return true;
  } else {
    cvcError.style.display = "block";
    return false;
  }
};

const validateForm = () => {
  if (nameValidate() && emailValidate() && adressValidate() && zipValidate() && cityValidate() && cNameValidate() && ccNumValidate() && expMonthValidate() && expYearValidate() && cvcValidate()) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

fullName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
adress.addEventListener("keyup", validateForm);
zip.addEventListener("keyup", validateForm);
city.addEventListener("keyup", validateForm);
cName.addEventListener("keyup", validateForm);
ccNum.addEventListener("keyup", validateForm);
expMonth.addEventListener("keyup", validateForm);
expYear.addEventListener("keyup", validateForm);
cvc.addEventListener("keyup", validateForm);

function submitForm(event) {
  event.preventDefault();
  location.href = "thankyou-purchase.html";
  form.reset();
}

button.addEventListener("click", submitForm);
