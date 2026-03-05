const listContainer = document.querySelector(".category-grid");

const fetchUrl = `https://kea-alt-del.dk/t7/api/categories`;

function getCategories() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((category) => showCategories(category));
}

function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `
      
    
             <a href="productlist.html?category=${category.category}" class="category-card">
                    <h2>${category.category}</h2>

                </a>
    `;
  });
}

getCategories();
