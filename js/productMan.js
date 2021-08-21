
import { addToCart } from "./components/shoppingCart.js";



const detailContainer = document.querySelector(".product-men-section");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://rainydays.janne-ringdal.one/wp-json/wc/store/products/" + id;


async function getProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
    addToCart(details);

  } catch (error) {
    detailContainer.innerHTML = "error";
  }

}

getProduct();


function createHtml(details) {
  detailContainer.innerHTML = `
  <div class="product-img-men">
  <img src="${details.images[0].src}" alt="${details.name}">
</div>
<div class="product-info-men">
  <div class="primary-info">
    <h1>${details.name}</h1>
    <p>${details.description}</p>
  </div>
  <div class="secendary-info">
  <p>${details.short_description}</p>
  <p>$${details.prices.price}</p>
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
  <div class="form-error" id="colorError">Please select a color</div>
</div>
<button class="button-small" data-product="${details.id}">Add to cart</button>
</form>
  </section>
</div>

  `;

}

