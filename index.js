"use strict";

const images = [
  "./images/img-1.jpg",
  "./images/img-2.jpg",
  "./images/img-3.jpg",
  "./images/img-4.jpg",
  "./images/img-5.jpg",
  "./images/img-6.jpg",
  "./images/img-7.jpg",
  "./images/img-8.jpg",
  "./images/img-9.jpg",
];

const image = document.querySelector("#image");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const paginationWrapper = document.querySelector("#pagination-wrapper");

let currentIndex = 0;

const updateImage = () => {
    image.src = images[currentIndex];
    updateButtonsStyle();
    updatePaginationStyle();
};

const updateButtonsStyle = () => {
    if (currentIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }

    if (currentIndex >= images.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }
};

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

for (let i = 0; i < images.length; i++) {
  const paginationElement = document.createElement("span");
  paginationElement.classList.add("pagination-span");

    paginationElement.addEventListener("click", () => {
        currentIndex = i;
        updateImage();
    });

  paginationWrapper.appendChild(paginationElement);
}

const updatePaginationStyle = () => {
    document.querySelectorAll(".pagination-span").forEach((span, index) => {
        span.classList.toggle("active", index === currentIndex);
    });
};
