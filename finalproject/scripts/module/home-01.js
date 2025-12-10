const myKey = "90158c8799bb28ca5c3054efdcbe85fd";
const myLat = "-26.2041";
const myLon = "28.0473";

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
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myKey}`;

    async function apiFetch() {
        try {
            const response = await fetch(urlWeather);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error(error);
        }
    }

    const displayResults = (data) => {
        const eventMainBox = document.querySelector("#weather-main");
        eventMainBox.innerHTML = "";

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = data.weather[0].description;

        eventMainBox.innerHTML = `
                <div class="current-weather">
                    <h2>The current Weather in: <span id="city-name">${
                        data.name
                    }</span></h2>
                    <h4>${weekdays[day]}</h4>
                    <div class="weather-content"></div>
                    <p>Temperature <span id="current-temp">${parseFloat(
                        data.main.temp
                    ).toFixed(0)}&deg;C</span></p>
                    <figure>
                        <img id="weather-icon" src="${iconsrc}" alt="${desc}">
                        <figcaption>${desc}</figcaption>
                    </figure>
                </div>
            `;
    };

    apiFetch();
});

