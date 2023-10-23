//import { API_WEATHER_KEY } from "./apiKey.js";
import { buildDom } from "./domBuilder.js";
//Build weather table data::

const API_WEATHER_KEY = process.env.NODE_ENV === 'production' ? process.env.API_WEATHER_KEY : "broke";
const weatherApi = (api) => {
    //Weather Metrics:
    const weatherMetrics = api.current;
    const temp = weatherMetrics.temp_f;
    const wind = weatherMetrics.gust_mph;
    const humidity = weatherMetrics.humidity;
    const tempFeel = weatherMetrics.feelslike_f;
    
    //Weather conditions:
    const weatherConditions = weatherMetrics.condition;
    const weatherIcon = weatherConditions.icon;
    const condition = weatherConditions.text;
    console.log(api)
    //weather Location:
    const weatherLocation = api.location;
    const region = weatherLocation.region;
    const city = weatherLocation.name;
    const country = weatherLocation.country;
    //weather Object
    const weatherStats = {
        temp,
        wind,
        humidity,
        tempFeel,
        weatherIcon,
        condition,
        region,
        city,
        country
    }
    buildDom(weatherStats);
}
console.log(location)
handleError = (err) => {
    console.error(err)
}
const buttonValue = () => {
event.preventDefault();
const location = document.getElementById("cityName").value;
fetch(`http://api.weatherapi.com/v1/current.json?key=${API_WEATHER_KEY}&q=${location}&aqi=no`)
.then(res => res.json())
.then(json => weatherApi(json))
.catch(error => handleError(error))
}
document.querySelector("#btn").addEventListener("click", buttonValue);

export{weatherApi}