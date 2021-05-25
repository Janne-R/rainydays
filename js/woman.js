import { productArray } from "./constants/productArray.js";
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