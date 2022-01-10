import { hamburgerSelect } from "./components/hamburger.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { productsHtml } from "./components/createHtml/productsHtml.js";
import { filterProducts } from "./components/common/filterProducts.js";

hamburgerSelect();

const productsUrl = baseUrl + "/products";

(async function () {

    try {

        const response = await fetch(productsUrl);
        const json = await response.json();
        let productsToRender = json;

        productsHtml(productsToRender);
        filterProducts(productsToRender, json);

    }
    catch (error) {
        displayMessage("error", error, ".products-container");
    }

})();

