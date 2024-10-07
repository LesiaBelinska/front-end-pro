"use strict";

const titleElement = document.querySelector(".title");
const toggleColorButton = document.querySelector(".change-color-button");

const changeColorHandler = () => {
  titleElement.classList.toggle("accent-color");
};

toggleColorButton?.addEventListener("click", changeColorHandler);
