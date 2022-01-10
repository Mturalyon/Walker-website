import { hamburgerSelect } from "./components/hamburger.js";
import { formValidate } from "./components/form/login/formValidate.js";
import { getToken } from "./storage/user/storage.js";
import { createProduct } from "./components/form/admin/createProduct.js";

const token = getToken();

if (!token) {
    location.href = "/index.html";
};

hamburgerSelect();

//query selectors
const errorContainer = document.querySelector(".error-container");

const form = document.querySelector(".add-product__form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#file");
const featuredInput = document.querySelector("#featured");

const nameError = document.querySelector(".name-error");
const priceError = document.querySelector(".price-error");
const descriptionError = document.querySelector(".description-error");
const imageError = document.querySelector(".image-error");


//on submit
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    errorContainer.innerHTML = "";

    //input validations
    const nameValue = nameInput.value.trim();
    const priceValue = parseFloat(priceInput.value);
    const descriptionValue = descriptionInput.value.trim();
    const imageValue = imageInput.value.trim();
    const featuredValue = featuredInput.checked;

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
        createProduct(nameValue, priceValue, descriptionValue, imageValue, featuredValue, token, form);//activate create product function if all validations pass
    };
};







