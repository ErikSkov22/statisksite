const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

const listContainer = document.querySelector(".product-grid");

const filterWomenBtn = document.querySelector("#filterWomenBtn");
const showAllBtn = document.querySelector("#showAllBtn");

let allProducts = [];

const fetchUrl = myCategory
  ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}`
  : "https://kea-alt-del.dk/t7/api/products";

function getProducts() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((products) => {
      allProducts = products; // gem alle produkter
      showProducts(products);
    });
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <a href="product.html?id=${product.id}" class="product-card">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
        <h2>${product.productdisplayname}</h2>
        <p class="brand">${product.brandname}</p>
        <p class="price">${product.price} kr</p>
      </a>
    `;
  });
}

function filterByGender(targetGender) {
  const filtered = allProducts.filter(
    (product) =>
      (product.gender || "").toLowerCase() === targetGender.toLowerCase(),
  );

  showProducts(filtered);
}

filterWomenBtn.addEventListener("click", () => filterByGender("Women"));
showAllBtn.addEventListener("click", () => showProducts(allProducts));

getProducts();
