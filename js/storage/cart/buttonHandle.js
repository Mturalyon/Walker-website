import { saveCartProducts } from "./saveCartProducts.js";
import { getExistingProducts } from "./getExistingProducts.js";
import { hamburgerSelect } from "../../components/hamburger.js";

function buttonHandle() {

    //Save to local storage
    const cartButton = document.querySelector(".cart-button");
    cartButton.addEventListener("click", handleClick);

    function handleClick() {

        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const image = this.dataset.img;

        const currentCartProducts = getExistingProducts();

        const productExist = currentCartProducts.find(function (product) {
            return product.id === id;
        });

        if (!productExist) {

            const product = {
                id: id,
                title: title,
                price: price,
                image: image
            };

            currentCartProducts.push(product);
            saveCartProducts(currentCartProducts);
            hamburgerSelect();
            alert(`"${product.title}" was added to the cart :)`);
        }
        else {
            alert("This Product is already in the cart");
        };
    };

};

export { buttonHandle };