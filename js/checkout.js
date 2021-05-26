const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (product) {
  total += product.price;
  cartContainer.innerHTML +=
    `
  <div class="cart-item">
  <h4>${product.name}</h4>
  <div style="background-image: url('${product.image}')" class="cart-image"></div>
  <p>Size: ${product.size.toUpperCase()}</p>
  <p>Color: ${product.color}</p>
  </div>
  `

})
totalContainer.innerHTML = `Total: $ ${total}`;
