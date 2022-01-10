import { baseUrl } from "../../settings/api.js";

function productDetailsHtml(details) {
    const container = document.querySelector(".container__products-detail");

    let image = "";

    if (!details.image_url) {
        image = baseUrl + details.image.url;
    } else {
        image = details.image_url;
    };

    container.innerHTML = `
            <div class="flex-control">

                <div class="col">
                    <img src="${image}" alt="picture of the product">
                </div>

                <div class="col col__text">
                    <h1>${details.title}</h1>
                    <p class="price">Price: ${details.price} NOK</p>
                    <p class="description">${details.description}</p>
                    <button class="button-effect cart-button" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-img="${image}">ADD TO CART</button>
                </div>

            </div>`;
};

export { productDetailsHtml };