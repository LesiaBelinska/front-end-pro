"use strict";

let numberValue = 12345;

// first variant

console.log(
  numberValue.toString().slice(0, 1),
  numberValue.toString().slice(1, 2),
  numberValue.toString().slice(2, 3),
  numberValue.toString().slice(3, 4),
  numberValue.toString().slice(4, 5)
);

// second variant

console.log(numberValue.toString().split("").join(" "));
