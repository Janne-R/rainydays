function getCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartList"));
  if (cartItems) {
    return cartItems;
  } else {
    return [];
  }
}

export function addToCart(product) {

  const cartArray = getCartItems();

  const button = document.querySelector("button");

  button.onclick = function (event) {
    event.preventDefault();
    cartArray.push(product);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  }

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
  <div class="cart-item">
  <h4>${cartElement.name}</h4>
  <div style="background-image: url('${cartElement.image}')" class="cart-image"></div>
  </div>
  `
  })

  totalContainer.innerHTML = `total:${total}`;
}