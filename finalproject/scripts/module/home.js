const myKey = "90158c8799bb28ca5c3054efdcbe85fd";

const time = new Date();
const day = time.getDay();
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

document.addEventListener("DOMContentLoaded", () => {
    // Reusable fetch function for any city
    async function loadWeather(city, elementId) {
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city},ZA&units=metric&appid=${myKey}`;
        try {
            const response = await fetch(urlWeather);
            if (response.ok) {
                const data = await response.json();
                displayResults(data, elementId);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Display results in the correct container
    const displayResults = (data, elementId) => {
        const eventMainBox = document.querySelector(`#${elementId}`);
        if (!eventMainBox) return;
        eventMainBox.innerHTML = "";

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = data.weather[0].description;

        eventMainBox.innerHTML = `
            <div class="current-weather">
                <h2>The current Weather in: <span id="city-name">${data.name}</span></h2>
                <h4>${weekdays[day]}</h4>
                <p>Temperature <span id="current-temp">${parseFloat(data.main.temp).toFixed(0)}&deg;C</span></p>
                <figure>
                    <img id="weather-icon" src="${iconsrc}" alt="${desc}">
                    <figcaption>${desc}</figcaption>
                </figure>
            </div>
        `;
    };

    // Load weather for the three cities
    loadWeather("Johannesburg", "weather-johannesburg");
    loadWeather("Durban", "weather-durban");
    loadWeather("Cape Town", "weather-capetown");
});