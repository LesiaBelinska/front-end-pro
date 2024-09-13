"use strict";

let integerValue = prompt("Please, enter integer");

if (
  integerValue !== null &&
  integerValue.trim() !== "" &&
  !isNaN(integerValue) &&
  Number.isInteger(+integerValue)
) {
  integerValue = Number(integerValue);

  for (let i = 1; i <= 100; i++) {
    if (i ** 2 > integerValue) {
      break;
    }
    console.log(i);
  }
} else {
  alert("Please enter a valid integer");
}
