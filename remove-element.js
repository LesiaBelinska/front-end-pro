"use strict";

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeElement = function (array, index, amount = 1) {
  array.splice(index, amount);

  return array;
};

console.log(removeElement(myArray, 2));
