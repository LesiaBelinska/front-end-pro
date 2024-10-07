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

const randomImageButton = document.querySelector(".random-img-button");
const imgElement = document.querySelector(".image");

const setRandomImage = (arr, img) => {
  const indexImg = Math.floor(Math.random() * arr.length);

  img.src = arr[indexImg];
};

if (randomImageButton && imgElement) {
  randomImageButton.addEventListener("click", () => {
    setRandomImage(images, imgElement);
  });
}
