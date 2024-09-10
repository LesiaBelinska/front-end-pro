"use strict";

let userBirthYear = prompt("Enter your year of birth");
let userCity = prompt("Enter your city");
let userSportKind = prompt("Enter your favorite kind of sport");

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

    let sportMessage;
    switch (userSportKind.toLowerCase()) {
      case "football":
        sportMessage = "Cool! Do you want to become like Andriy Shevchenko?";
        break;
      case "boxing":
        sportMessage = "Cool! Do you want to become like Oleksandr Usyk?";
        break;
      case "tennis":
        sportMessage = "Cool! Do you want to become like Elina Svitolina?";
        break;
      default:
        sportMessage = `Your favorite kind of sport is: ${userSportKind}`;
    }

    alert(
      `Your age is: ${userAge}, your favorite kind of sport is: ${userSportKind}. ${cityMessage}. ${sportMessage}`
    );
  } else {
    alert("Please enter a valid year of birth.");
  }
} else {
  if (!userBirthYear) {
    alert("It's a pity you didn't want to enter your year of birth.");
  } else if (!userCity) {
    alert("It's a pity you didn't want to enter your city.");
  } else if (!userSportKind) {
    alert("It's a pity you didn't want to enter your favorite kind of sport.");
  }
}
