import { hamburgerSelect } from "./components/hamburger.js";
import { formValidate } from "./components/form/login/formValidate.js";
import { doLogin } from "./components/form/login/doLogin.js";

hamburgerSelect();

const errorContainer = document.querySelector(".error-container");

const form = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");

//form Submit
form.addEventListener("submit", submitForm);

function submitForm() {
    event.preventDefault();
    errorContainer.innerHTML = "";

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    //form validation
    const usernameApproved = formValidate(usernameValue, usernameError);
    const passwordApproved = formValidate(passwordValue, passwordError);

    //login activation
    if (usernameApproved & passwordApproved) {
        doLogin(usernameValue, passwordValue);
    };
};




