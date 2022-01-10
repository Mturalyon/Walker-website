import { hamburgerSelect } from "./components/hamburger.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { productDetailsHtml } from "./components/createHtml/productDetailsHtml.js";
import { buttonHandle } from "./storage/cart/buttonHandle.js";

hamburgerSelect();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

(async function () {

    try {
        const response = await fetch(productUrl);
        const details = await response.json();
        document.title = "Walker - " + details.title;

        productDetailsHtml(details);
        buttonHandle();

    }
    catch (error) {
        displayMessage("error", error, ".container__products-detail");
    };

})();

