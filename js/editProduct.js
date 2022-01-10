import displayMessage from "./components/common/displayMessage.js";
import { hamburgerSelect } from "./components/hamburger.js";
import { baseUrl } from "./settings/api.js";
import { formValidate } from "./components/form/login/formValidate.js";
import { getToken } from "./storage/user/storage.js";
import deleteButton from "./components/form/admin/deleteButton.js";
import { updateProduct } from "./components/form/admin/updateProduct.js";

const token = getToken();

if (!token) {
    location.href = "/index.html";
}

hamburgerSelect();

//queryselectors
const errorContainer = document.querySelector(".error-container");

const form = document.querySelector(".add-product__form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#file");
const featuredInput = document.querySelector("#featured");
const idInput = document.querySelector("#id");

const nameError = document.querySelector(".name-error");
const priceError = document.querySelector(".price-error");
const descriptionError = document.querySelector(".description-error");
const imageError = document.querySelector(".image-error");

//querystring
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

//set the default input info for ID.
(async function () {
    try {
        const response = await fetch(productUrl);
        const json = await response.json();

        document.title = "Walker - Edit " + json.title;

        let image = "";

        if (!json.image_url) {
            image = baseUrl + json.image.url;
        } else {
            image = json.image_url;
        };

        nameInput.value = json.title;
        priceInput.value = json.price;
        descriptionInput.value = json.description;
        featuredInput.checked = json.featured;
        imageInput.value = image;
        idInput.value = json.id;

        deleteButton(json.id);
    }
    catch (error) {
        displayMessage("error", error, ".error-container");
    }
})();

//On submit function
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    errorContainer.innerHTML = "";

    const nameValue = nameInput.value.trim();
    const priceValue = parseFloat(priceInput.value);
    const descriptionValue = descriptionInput.value.trim();
    const imageValue = imageInput.value.trim();
    const featuredValue = featuredInput.checked;
    const idValue = idInput.value;

    const nameApproved = formValidate(nameValue, nameError);
    const descriptionApproved = formValidate(descriptionValue, descriptionError);
    const imageApproved = formValidate(imageValue, imageError);
    let priceApproved = false;

    if (isNaN(priceValue) || priceValue.length === 0) {
        priceApproved = false;
        priceError.style.display = "block";
    } else {
        priceApproved = true;
        priceError.style.display = "none";
    };

    if (nameApproved & descriptionApproved & imageApproved & priceApproved) {
        updateProduct(nameValue, priceValue, descriptionValue, featuredValue, imageValue, idValue, token, form);
    };
};



