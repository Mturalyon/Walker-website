import { getExistingProducts } from "../../storage/cart/getExistingProducts.js";

function cartHtml() {
    const cartItemsContainer = document.querySelector(".cart-items-container");
    const cartProducts = getExistingProducts();

    cartItemsContainer.innerHTML = "";

    if (!cartProducts.length) {
        cartItemsContainer.innerHTML = `
                        <div class="no-items-container">
                            <h3>No items added in the cart</h3>
                            <a href="./products.html" class="button-effect">BROWSE PRODUCTS</a>
                        </div>`;
    }
    else {
        cartProducts.forEach(product => {

            cartItemsContainer.innerHTML += `
                            <div class="cart-item">
                                <a href="/html/before-login/product-details.html?id=${product.id}"><img src="${product.image}" alt="picture of the product"></a>
                                <div class="cart-item-info">
                                    <h3>${product.title}</h3>
                                    <p>${product.price} NOK</p>
                                    <a href="#" data-id="${product.id}">Remove</a>
                                </div>
                            </div>`;

        });
    };
};

export { cartHtml };
