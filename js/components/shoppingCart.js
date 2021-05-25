export function addToCart(product) {

  let cartArrey = [];

  const button = document.querySelector("button");

  button.onclick = function (event) {
    event.preventDefault();
    cartArrey.push(product);
    showCart(cartArrey);
    localStorage.setItem("cartList", JSON.stringify(cartArrey));
  }

}

export function showCart(cartItems) {
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