"use strict";

for (let i = 1; i <= 10; i++) {
  const enteredValue = prompt("Please enter a number greater than 100");

  if (
    enteredValue !== null &&
    enteredValue.trim() !== "" &&
    !isNaN(enteredValue)
  ) {
    const numberValue = Number(enteredValue);

    if (numberValue <= 100) {
      alert("Please, enter a number greater than 100");
    } else {
      alert(`You entered: ${numberValue}`);
      break;
    }
  } else {
    alert("Please, enter a number greater than 100");
  }
}
