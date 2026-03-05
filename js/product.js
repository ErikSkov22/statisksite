const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;

const produktside = document.querySelector(".produktside");

function getData() {
  fetch(productURL)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  produktside.innerHTML = `
    <div class="product-detail">

        <div class="product-image">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}">
        </div>

        <div class="product-info">
            <p class="brand">${data.brandname}</p>

            <h2 class="product-title">${data.productdisplayname}</h2>

            <p class="price">${data.price} kr</p>

            <p class="stock">
                Lagerstatus: ${data.soldout ? "Udsolgt" : "På lager"}
            </p>

            <button class="add-to-basket">Add to basket</button>

            <div class="product-meta">
                <h3>Produktinfo</h3>
                <p>${data.articletype}</p>
            </div>

        </div>

    </div>
  `;
}

getData();
