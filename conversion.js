"use strict";

let exchangeRate = 26;
let result;

for (let i = 10; i <= 100; i += 10) {
  result = i * exchangeRate;
  console.log(`${i}$ =  ${result} UAH`);
}
