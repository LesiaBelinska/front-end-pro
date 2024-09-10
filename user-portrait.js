"use strict";

let userBirthYear = prompt("enter your year of birth");
let userCity = prompt("enter your city");
let userSportKind = prompt("enter your favorite kind of sport");

const nowDate = new Date();
const currentYear = nowDate.getFullYear();

if (userBirthYear && userCity && userSportKind) {
  userBirthYear = userBirthYear.trim();
  userCity = userCity.trim();
  userSportKind = userSportKind.trim();

  if (
    !isNaN(userBirthYear) &&
    userBirthYear.length === 4 &&
    userBirthYear <= currentYear
  ) {
    let userAge = currentYear - parseInt(userBirthYear);
    let cityMessage;
    let userCountry = "";

    switch (userCity) {
      case "Kyiv":
        userCountry = "Ukraine";
        break;
      case "Washington":
        userCountry = "USA";
        break;
      case "London":
        userCountry = "United Kingdom";
        break;
      default:
        userCountry = "";
    }

    if (userCountry) {
      cityMessage = `You live in the capital of ${userCountry}`;
    } else {
      cityMessage = `You live in ${userCity}`;
    }

    alert(
      `Your age is: ${userAge}, your favorite kind of sport is: ${userSportKind}. ${cityMessage}`
    );
  } else {
    alert("Please enter a valid year of birth.");
  }
} else {
  alert("All fields are required!");
}