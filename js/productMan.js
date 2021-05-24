import { productArray } from "./constants/productArray.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

let product = {};

for (let i = 0; i < productArray.length; i++) {
  if (productArray[i].id === id) {
    product = productArray[i];
  }
}

const detailContainer = document.querySelector(".new-section");

detailContainer.innerHTML =
  `
  <div class="product-img-men">
  <img src="${product.image}" alt="${product.name}"> 
</div>
<div class="product-info-men">
  <div class="primary-info">
    <h1>${product.name}</h1>
    <p>${product.description}</p>
  </div>
  <div class="secendary-info">
  <p>${product.detailDescription}</p>
  <p>$${product.price}</p>
  </div>
  <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <p>(2)</p>
  </div>
  <section>
  <form>
<div class="man-size">
  <label for="size">Choose a size:</label>
  <select id="size" name="size">
    <option value="s">S</option>
    <option value="m">M</option>
    <option value="l" selected>L</option>
    <option value="xl">XL</option>
    <option value="xxl">XXL</option>
  </select>
</div>
<div class="man-color">
  <div class="blue-color">
    <input type="radio" id="blue" name="color" value="blue" />
    <label for="blue">Blue</label>
  </div>
  <div class="green-color">
    <input type="radio" id="green" name="color" value="green" />
    <label for="green">Green</label>
  </div>
</div>
<button data-product="${product.id}">Add to cart</button>
</form>
  </section>
</div>
`;


let cartArrey = [];

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const button = document.querySelector("button");


button.onclick = function (event) {
  event.preventDefault();
  cartArrey.push(product);
  showCart(cartArrey);
  localStorage.setItem("cartList", JSON.stringify(cartArrey));
}


function showCart(cartItems) {
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