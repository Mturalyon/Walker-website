import { baseUrl } from "../../settings/api.js";
const nonFeaturedContainer = document.querySelector(".non-featured-products__container");
const featuredContainer = document.querySelector(".featured-products__container");

function adminHtml(json) {

    nonFeaturedContainer.innerHTML = "";
    featuredContainer.innerHTML = "";

    json.forEach(function (product) {

        let image = "";

        if (!product.image_url) {
            image = baseUrl + product.image.url;
        } else {
            image = product.image_url;
        };

        //non featured
        if (!product.featured) {
            nonFeaturedContainer.innerHTML += `
                <a href="/html/after-login/edit-product.html?id=${product.id}">
                    <div class="product-card">
                        <img src="${image}" alt="image of the product">
                        <div class="info">
                            <h3>${product.title}</h3>
                            <div class="price">
                                <p>Price:</p>
                                <p>${product.price} NOK</p>
                            </div>
                        </div>
                    </div>
                </a>`;
        } else {
            featuredContainer.innerHTML += `
                <a href="/html/after-login/edit-product.html?id=${product.id}">
                    <div class="product-card">
                        <img src="${image}" alt="image of the product">
                        <div class="info">
                            <h3>${product.title}</h3>
                            <div class="price">
                                <p>Price:</p>
                                <p>${product.price} NOK</p>
                            </div>
                        </div>
                    </div>
                </a>`;
        };
    });
};

export { adminHtml };