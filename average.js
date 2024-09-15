"use strict";

const myArray = [1, "hello", 2, 3, 4, 5, "world", 6, 7, "12"];

function numbersAverageCalculate(array) {
  let sum = 0;

  const numbers = array.filter((item) => typeof item === "number");

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  sum / numbers.length;

  return sum / numbers.length;
}

console.log(numbersAverageCalculate(myArray));
