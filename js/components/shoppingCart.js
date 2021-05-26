function getCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartList"));
  if (cartItems) {
    return cartItems;
  } else {
    return [];
  }
}

function colorValidate(color) {
  const colorError = document.querySelector("#colorError");
  if (color) {
    colorError.style.display = "none";
    return true;
  } else {
    colorError.style.display = "block";
    return false;
  }
};

export function addToCart(product) {
  const cartArray = getCartItems();
  const form = document.querySelector("form");

  function submitForm(event) {
    event.preventDefault();

    const size = document.querySelector("#size");
    const color = document.querySelector("input[type='radio'][name='color']:checked");

    if (colorValidate(color)) {
      product.size = size.value;
      product.color = color.value;

      cartArray.push(product);
      showCart(cartArray);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
    }
  }

  form.addEventListener("submit", submitForm);
}

function showCart(cartItems) {
  const cart = document.querySelector(".cart");
  const cartList = document.querySelector(".cart-list");
  const totalContainer = document.querySelector(".total");

  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML +=
      `
  <div class="shoppingCartItem">
  <h4>${cartElement.name}</h4>
  <div style="background-image: url('${cartElement.image}')" class="cart-image"></div>
  <p>Size: ${cartElement.size.toUpperCase()}</p>
  <p>Color: ${cartElement.color}</p>
  <p>Price: $ ${cartElement.price},-</p>
  </div>
  `
  })

  totalContainer.innerHTML = `Total: $ ${total}`;
}