"use strict";

let numberValue = prompt("Enter a three-digit number:");

if (numberValue !== null && numberValue.trim() !== "") {
  numberValue = numberValue.trim();

  if (numberValue.length === 3 && !isNaN(numberValue)) {
    let firstDigit = parseInt(numberValue[0]);
    let secondDigit = parseInt(numberValue[1]);
    let thirdDigit = parseInt(numberValue[2]);

    if (firstDigit === secondDigit && secondDigit === thirdDigit) {
      console.log("All entered numbers are the same");
    } else if (firstDigit === secondDigit) {
      console.log("first and second digits are the same");
    } else if (firstDigit === thirdDigit) {
      console.log("first and third digits are the same");
    } else if (secondDigit === thirdDigit) {
      console.log("second and third digits are the same");
    } else {
      console.log("All digits are different");
    }
  } else {
    alert("Incorrect data, please enter a valid three-digit number");
  }
} else {
  alert("Input cannot be empty");
}
