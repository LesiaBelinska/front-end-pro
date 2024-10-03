"use strict";

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],
  development: {
    web: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
  administrative: [
    {
      name: "Ann",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],
};

function calculateSalariesSum(company) {
  let sum = 0;

  for (let unit of Object.values(company)) {
    if (Array.isArray(unit)) {
      for (let employee of unit) {
        sum += employee.salary;
      }
    } else {
      sum += calculateSalariesSum(unit);
    }
  }

  return sum;
}

const totalSum = calculateSalariesSum(company);

console.log(`Total sum of employee's salaries is ${totalSum}`);
