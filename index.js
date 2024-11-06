"use strict";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&units=metric&APPID=";
const API_KEY = "c4ff3dfcad5185a5e167f674538d26d3";

const updateDateTime = () => {
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.querySelector("#date").textContent = date;
  document.querySelector("#time").textContent = time;
}

const fetchWeatherData = () => {
  fetch(API_URL + API_KEY)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      const cityElement = document.querySelector("#city");
      const temperatureElement = document.querySelector("#temperature");
      const descriptionElement = document.querySelector("#description");
      const humidityElement = document.querySelector("#humidity");
      const feelsLikeElement = document.querySelector("#feels-like");
      const pressureElement = document.querySelector("#pressure");
      const windElement = document.querySelector("#wind");
  

      cityElement.textContent = data.name;
      temperatureElement.textContent = `${data.main.temp}°C`;
      feelsLikeElement.textContent = `Feels like: ${data.main.feels_like}°C`;
      descriptionElement.textContent = `${data.weather[0].description}`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
      windElement.textContent = `Wind: ${data.wind.speed} km/h`;

      updateDateTime();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

fetchWeatherData();

setInterval(updateDateTime, 60000);

const updateButtonElement = document.querySelector("#update-button");

updateButtonElement.addEventListener("click", fetchWeatherData);
