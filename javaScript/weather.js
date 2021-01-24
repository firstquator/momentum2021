const weather = document.querySelector(".js-weather");
const nWeather = weather.querySelector(".js-nowWeather");
const ntemperature = weather.querySelector(".js-temperature");
const nPlace = weather.querySelector(".js-place");


const API_KEY = "3a5349e3caac4e15b592d097c0ccdd13";
const COORDS = 'coords'

function paintWeatherIcon(weather) {
    switch (weather) {
        case "broken clouds": 
            nWeather.classList.add("fas", "fa-cloud-sun", "fa-2x");
            break;

        case "overcast clouds":
            nWeather.classList.add("fab", "fa-cloudversify", "fa-2x");

        case "snow":
            nWeather.classList.add("far", "fa-snowflake", "fa-2x");

        case "rain":
            nWeather.classList.add("fas", "fa-cloud-showers-heavy", "fa-2x");
            break;

        case "wind":
            nWeather.classList.add("fas", "fa-wind", "fa-2x");       
            break;

        case "clear sky":
            nWeather.classList.add("far", "fa-sun", "fa-2x");
            break;

        default:
    }
}

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            return response.json()
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const nowWeather = json.weather[0].description;
            const place = json.name;
            console.log(json);
            paintWeatherIcon(nowWeather);
            ntemperature.innerText = `${Math.floor(temperature)} ℃`;
            nPlace.innerText = `${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        /* 
        latitude : latitude,
        longitude : longitude 
        */
       latitude,
       longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init() {
    loadCoords();
}

init();