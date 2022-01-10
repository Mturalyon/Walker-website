import { backgroundApi } from "./components/background.js";
import { hamburgerSelect } from "./components/hamburger.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { indexHtml } from "./components/createHtml/indexHtml.js";

hamburgerSelect();
backgroundApi();

const productsUrl = baseUrl + "/products";

(async function () {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        indexHtml(json);
    }
    catch (error) {
        displayMessage("error", error, ".featured-container");
    }

})();