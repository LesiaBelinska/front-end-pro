"use strict";

const userName = prompt("Please, enter your name");

if (userName !== null && userName.trim() !== "") {
  alert(`Hello, ${userName}! How are you?`);
}
