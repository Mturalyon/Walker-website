import { hamburgerSelect } from "./components/hamburger.js";
import { cartHtml } from "./components/createHtml/cartHtml.js";
import { handleRemove } from "./storage/cart/handleRemove.js";
import { getExistingProducts } from "./storage/cart/getExistingProducts.js";

hamburgerSelect();
const numberOfProducts = getExistingProducts().length;
document.title = `Walker - Cart(${numberOfProducts})`;

//adds products to the cart
cartHtml();

//remove items
handleRemove();

//total Price
const priceContainer = document.querySelector(".total-price");

const products = getExistingProducts();
let totalPrice = 0;

products.forEach(product => {
    totalPrice += parseFloat(product.price);
});

priceContainer.innerHTML = `${totalPrice} NOK`;
