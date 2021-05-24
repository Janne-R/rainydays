import { productArray } from "./constants/productArray.js";
const productListMen2 = document.querySelector(".new");

productArray.forEach(function (product) {
  productListMen2.innerHTML +=
    `
<a class="products-men" href="product-man.html?id=${product.id}">
          <i class="fas fa-heart"></i>
          <img src="images/men portrait.png" alt="Blue mens rainjacket" />
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>$${product.price}</p>
        </a>
`
})



