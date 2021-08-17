/*import { productArray } from "./constants/productArray.js";
const productListMen = document.querySelector(".product-list-men");

productArray.forEach(function (product) {
  if (product.type === "man") {
    productListMen.innerHTML +=
      `
<a class="products-men" href="product-man.html?id=${product.id}">
          <img src="${product.image}" alt="Blue mens rainjacket" />
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>$${product.price}</p>
        </a>
`
  }
})
*/

const productListMen = document.querySelector(".product-list-men");
const url = "https://rainydays.janne-ringdal.one/wp-json/wc/store/products/?per_page=20";

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    return json;

  } catch (error) {
    productListMen.innerHTML = "error";

  }
}

const products = await callApi();

products.forEach(function (result) {
  if (result.categories[0].id === 16) {
    productListMen.innerHTML +=

      `<a class="products-men" href="product-man.html?id=${result.id}">
      <img src="${result.images[0].src}" alt="rainjacket" />
      <h2>${result.name}</h2>
      <p>${result.short_description}</p>
      <p>$${result.prices.price}</p>
  </a>`;

  }
});





