import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../common/displayMessage.js";
import { saveToken, saveUser } from "../../../storage/user/storage.js";

async function doLogin(username, password) {
    const url = baseUrl + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/html/after-login/admin.html";
        };

        //error message if pw and username is wrong
        if (json.error) {
            displayMessage("error", "Invalid Login Information", ".error-container");
        };

    }
    catch (error) {
        displayMessage("error", error, ".error-container");
    };
};

export { doLogin };