"use strict";

let myArray = [1, 3, 4, 6, 2, 5, 7];

const removeElement = function (array, item) {
  const index = myArray.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
};

console.log(removeElement(myArray, 3));

// second variant

let mySecondArray = [1, 3, 4, 6, 2, 5, 7];

const deleteElement = function (array, index, amount = 1) {
  array.splice(index, amount);

  return array;
};

console.log(deleteElement(mySecondArray, 2, 3));
