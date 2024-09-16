"use strict";

const string = prompt("Enter the string to process:").toLowerCase();
const deleteLetters = prompt(
  "Enter the letters to delete separated by commas:"
).toLowerCase();

const removeLetters = function (string, lettersToDelete) {
  let result = "";

  const arrayToDelete = lettersToDelete.split(",");

  for (let i = 0; i < arrayToDelete.length; i++) {
    arrayToDelete[i] = arrayToDelete[i].trim();
  }

  for (let i = 0; i < string.length; i++) {
    if (!arrayToDelete.includes(string[i])) {
      result += string[i];
    }
  }

  return result;
};

if (string && deleteLetters) {
  console.log(removeLetters(string, deleteLetters));
} else {
  alert("You didn't enter enough data");
}
