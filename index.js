"use strict"

function createTable() {
  const table = document.createElement("table");

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j; 
      row.appendChild(cell); 
    }
    table.appendChild(row);
  }

  return table;
}

const tableContainer = document.querySelector(".table-wrapper");

tableContainer?.appendChild(createTable());