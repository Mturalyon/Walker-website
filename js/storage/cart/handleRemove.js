import { getExistingProducts } from "./getExistingProducts.js";
import { saveCartProducts } from "./saveCartProducts.js";

function handleRemove() {

    const removeButtons = document.querySelectorAll(".cart-item-info a");

    removeButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {
        const cartProducts = getExistingProducts();
        const id = this.dataset.id;
        const newProducts = cartProducts.filter(product => product.id !== id);
        saveCartProducts(newProducts);
        window.location.reload();
    };
};

export { handleRemove };