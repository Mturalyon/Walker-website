import { getUsername, clearStorage } from "../storage/user/storage.js";
import { getExistingProducts } from "../storage/cart/getExistingProducts.js";

const hamburger = document.querySelector("#hamburger");
const navUl = document.querySelector(".default-ul");
const afterLogin = document.querySelector(".after-login");
const loginLink = document.querySelector(".login-link");
const usernameContainer = document.querySelector(".username");
const logoutButton = document.querySelector(".logout-btn");
const cartItemNumber = document.querySelector(".cart-item-number");

function hamburgerSelect() {
    //add numbers of item in cart
    const cartProductsLength = getExistingProducts().length;
    cartItemNumber.innerHTML = cartProductsLength;


    const username = getUsername();
    //display secondary nav if logged in

    if (username) {
        usernameContainer.innerHTML = `${username}`;
        afterLogin.style.display = "flex";
        loginLink.style.display = "none";
    } else {
        usernameContainer.innerHTML = `user`;
        afterLogin.style.display = "none";
        loginLink.style.display = "block";
    }

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
    //logout button
    logoutButton.onclick = function () {
        const doLogout = confirm("Do you want to log out?");

        if (doLogout) {
            clearStorage();
            window.location.href = "/index.html";
        };
    };
};

export { hamburgerSelect };



