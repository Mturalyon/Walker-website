import { baseUrl } from "../settings/api.js";
import displayMessage from "./common/displayMessage.js";


function backgroundApi() {
    const backgroundUrl = baseUrl + "/home";

    (async function () {
        const bannerContainer = document.querySelector(".gradient-overlay");
        try {
            const response = await fetch(backgroundUrl);
            const bannerJson = await response.json();
            bannerContainer.innerHTML = `<img class="banner-image" src="${baseUrl + bannerJson.hero_banner.url}" alt="${bannerJson.hero_banner_alt_text}">`;
        }
        catch (error) {
            displayMessage("error", error, ".banner");
        };

    })();
};

export { backgroundApi };


