/*import { productArray } from "./constants/productArray.js";
const productListWoman = document.querySelector(".product-list-woman");

productArray.forEach(function (product) {
  if (product.type === "woman") {
    productListWoman.innerHTML +=
      `
<a class="products-woman" href="product-woman.html?id=${product.id}">
          <img src="${product.image}" alt="Blue mens rainjacket" />
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>$${product.price}</p>
        </a>
`
  }
})
*/

const productListWoman = document.querySelector(".product-list-woman");
const url = "https://rainydays.janne-ringdal.one/wp-json/wc/store/products";

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    return json;

  } catch (error) {
    productListWoman.innerHTML = "error";

  }
}

const products = await callApi();

products.forEach(function (result) {
  productListWoman.innerHTML += `<a class="products-woman" href="product-woman.html?id=${result.id}">
  <img src="${result.images[0].src}" alt="rainjacket" />
  <h2>${result.name}</h2>
  <p>${result.short_description}</p>
  <p>$${result.prices.price}</p>
</a>`;

});

