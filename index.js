"use strict";

const API_KEY = "c4ff3dfcad5185a5e167f674538d26d3";

const url =
  `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;

fetch(
  url
)
  .then((response) => response.json())

