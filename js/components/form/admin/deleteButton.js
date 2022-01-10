import { baseUrl } from "../../../settings/api.js";
import { getToken } from "../../../storage/user/storage.js";
import displayMessage from "../../common/displayMessage.js";

export default function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="form-button button-delete-effect delete-button">DELETE</button>`;

    const button = document.querySelector(".delete-button");

    button.onclick = async function () {

        const doDelete = confirm("Are you sure you want to delete?");

        if (doDelete) {

            const url = baseUrl + "/products/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {

                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "/html/after-login/admin.html";

            }
            catch (error) {
                displayMessage("error", error, ".error-container");
            };
        };

    };
};