import { baseUrl } from "../../settings/api.js";
const featuredContainer = document.querySelector(".featured-container");

function indexHtml(json) {
    featuredContainer.innerHTML = "";

    json.forEach(function (featuredProduct) {
        let image = "";

        if (!featuredProduct.image_url) {
            image = baseUrl + featuredProduct.image.url;
        } else {
            image = featuredProduct.image_url;
        };


        if (featuredProduct.featured === true) { //making sure that only featured products appear in this container
            featuredContainer.innerHTML += `
            <a href="/html/before-login/product-details.html?id=${featuredProduct.id}">
                <div class="box"><img src="${image}" alt="picture of the product"></div>
            </a>`;
        };
    });
};

export { indexHtml };