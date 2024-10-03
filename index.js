"use strict";

const user = {
  name: "Alex",
  age: 25,
  city: "Kyiv",

  showUserInfo() {
    console.log(
      `User name is ${this.name}, user age is ${this.age}, user city is ${this.city}`
    );
  },
};

user.showUserInfo();
