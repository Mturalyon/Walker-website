import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../../components/common/displayMessage.js";

async function createProduct(name, price, description, image, featured, token, form) {
    const url = baseUrl + "/products";

    //formdata

    const data = JSON.stringify({
        title: name,
        description: description,
        price: price,
        featured: featured,
        image_url: image,
    });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };


    //media

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product Created", ".error-container");
            form.reset();
        };

        if (json.error) {
            displayMessage("error", json.message, ".error-container");
        };

    }
    catch (error) {
        displayMessage("error", error, ".error-container");
    };
};

export { createProduct };