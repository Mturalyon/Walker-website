import { productsHtml } from "../createHtml/productsHtml.js";

const search = document.querySelector(".search");
const container = document.querySelector(".products-container");

function filterProducts(productsToRender, json) {
    search.onkeyup = function () {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = json.filter(function (product) {
            if (product.title.toLowerCase().startsWith(searchValue)) {
                return true;
            };
        });
        if (!filteredProducts.length) {
            container.innerHTML = `<div class="feedback-container">
                                        <h3>Search Result: "${event.target.value}" Not found</h3>
                                   </div>`;
        } else {
            productsToRender = filteredProducts;
            productsHtml(productsToRender);
        };

    };
};

export { filterProducts };