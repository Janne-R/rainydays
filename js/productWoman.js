import { productArray } from "./constants/productArray.js";
import { addToCart } from "./components/shoppingCart.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

let product = {};

for (let i = 0; i < productArray.length; i++) {
  if (productArray[i].id === id) {
    product = productArray[i];
  }
}

const detailContainer = document.querySelector(".product-woman-section");

detailContainer.innerHTML =
  `

<div class="product-img-woman">
<img src="${product.image}" alt="${product.name}"> 
</div>
<div class="product-info-woman">
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
    <div class="woman-color">
      <div class="pink-color">
        <input type="radio" id="pink" name="color" value="pink" />
        <label for="pink">Pink</label>
      </div>
      <div class="Purple-color">
        <input type="radio" id="purple" name="color" value="purple" />
        <label for="purple">Purple</label>
      </div>
      <div class="form-error" id="colorError">Please select a color</div>
    </div>
    <button class="button-small" data-product="${product.id}">Add to cart</button>
  </form>
</section>
</div>
</section>
`;

addToCart(product);
