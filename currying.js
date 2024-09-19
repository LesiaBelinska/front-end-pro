"use strict";

function calculateMultiplication(firstNumber) {
  return function (secondNumber) {
    return firstNumber * secondNumber;
  };
}

console.log(calculateMultiplication(5)(2));
