const apiKey = "b5b182318e887828004e47a5362ecc52";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchBtn");

const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const descriptionElement = document.getElementById("description");
const iconElement = document.getElementById("icon");
const weatherCard = document.getElementById("weatherCard")

searchBtn.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        locationElement.textContent = `Location:${data.name}`;
        temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
        humidityElement.textContent = `Humidity: ${data.main.humidity} %`;
        descriptionElement.textContent = `Description: ${data.weather[0].description}`;
        iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        iconElement.alt = data.weather[0].description;
    });
};

