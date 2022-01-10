//Get data from local storage
function getExistingProducts() {
    const cartProducts = localStorage.getItem("cart");

    if (!cartProducts) {
        return [];
    }
    else {
        return JSON.parse(cartProducts);
    };
};

export { getExistingProducts };