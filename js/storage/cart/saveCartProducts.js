//Saving Function
function saveCartProducts(product) {
    localStorage.setItem("cart", JSON.stringify(product));
}

export { saveCartProducts };