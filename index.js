"use strict";

const buttonsWrapper = document.querySelector(".buttons-wrapper");

buttonsWrapper.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "BUTTON") {
        alert(`You chose: ${target.textContent}`);
    }
});
