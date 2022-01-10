import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../../components/common/displayMessage.js";

async function updateProduct(name, price, description, featured, image, id, token, form) {

    const url = baseUrl + "/products/" + id;

    const data = JSON.stringify({
        title: name,
        description: description,
        price: price,
        featured: featured,
        image_url: image,
    });

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.updated_at) {
            displayMessage("success", "Product Updated", ".error-container");
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

export { updateProduct };