"use strict";

function calculateSum() {
  let total = 0;

  return function (num) {
    total += num;

    return total;
  };
}

const sum = calculateSum();

console.log(sum(4));
console.log(sum(3));
console.log(sum(7));
console.log(sum(10));
console.log(sum(11));
