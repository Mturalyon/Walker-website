import { hamburgerSelect } from "./components/hamburger.js";
import { getUsername, getToken } from "./storage/user/storage.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { adminHtml } from "./components/createHtml/adminHtml.js";

const token = getToken();

if (!token) {
    location.href = "/index.html";
};

hamburgerSelect();




//Add username to page
const usernameContainer = document.querySelector(".username-admin");
const username = getUsername();
document.title = `Walker - ${username}`;

if (username) {
    usernameContainer.innerHTML = `${username}`;
} else {
    usernameContainer.innerHTML = `Not Logged in`;
};

//Fetch API
const productsUrl = baseUrl + "/products";

(async function () {
    try {

        const response = await fetch(productsUrl);
        const json = await response.json();

        //create html
        adminHtml(json);

    }
    catch (error) {
        displayMessage("error", error, ".non-featured-products__container");
        displayMessage("error", error, ".featured-products__container");
    };
})();