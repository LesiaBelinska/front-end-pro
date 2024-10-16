"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let link;

    const getLinkButton = document.querySelector("#get-link-button");
    const redirectButton = document.querySelector("#redirect-button");

    if (getLinkButton) {
        getLinkButton.addEventListener("click", () => {
            link = prompt("Enter a link");
        });
    }

    if (redirectButton) {
        redirectButton.addEventListener("click", () => {
            if (link) {
                window.location.replace(link);
            }
        });
    }
});
