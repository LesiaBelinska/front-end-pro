"use strict";

class Calculator {
  add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
    };

  subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
    };

  multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
    };

  divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
    };
}

const calc = new Calculator();

console.log(calc.add(5, 3));

console.log(calc.subtract(10, 4));

console.log(calc.multiply(3, 6));

console.log(calc.divide(8, 2));
