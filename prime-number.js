"use strict";

let numberValue = prompt("Please, enter number");

if (numberValue !== null && numberValue.trim() !== "" && !isNaN(numberValue)) {
  numberValue = Number(numberValue);

  if (numberValue <= 1) {
    alert("The number isn't prime, it must be more than 1");
  } else {
    let isPrimeNumber = true;

    for (let i = 2; i <= Math.sqrt(numberValue); i++) {
      if (numberValue % i === 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      alert("The number is prime");
    } else {
      alert("The number isn't prime");
    }
  }
} else {
  alert("Please enter a valid number");
}
