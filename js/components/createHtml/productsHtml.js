import { baseUrl } from "../../settings/api.js";
const productsContainer = document.querySelector(".products-container");

function productsHtml(json) {

    productsContainer.innerHTML = "";
    json.forEach(function (product) {

        let image = "";

        if (!product.image_url) {
            image = baseUrl + product.image.url;
        } else {
            image = product.image_url;
        };

        productsContainer.innerHTML += `
                <a href="/html/before-login/product-details.html?id=${product.id}">
                    <div class="product-card">
                        <img src="${image}" alt="picture of the product">
                        <div class="info">
                            <h3>${product.title}</h3>
                            <div class="price">
                                <p>Price:</p>
                                <p>${product.price} NOK</p>
                            </div>
                        </div>
                    </div>
                </a>`;

    });
};

export { productsHtml };