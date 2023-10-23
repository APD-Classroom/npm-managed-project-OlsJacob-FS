import { API_WEATHER_KEY } from "./apiKey.js";
//Build weather table data::
const location = "cleveland";
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
    console.log()
    //weather Location:
    const weatherLocation = api.location;
    const region = weatherLocation.region;
    const city = weatherLocation.name;
    const country = weatherLocation.country;
    

    weatherStats = {
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
}
handleError = (err) => {
    console.error(err)
}
fetch(`http://api.weatherapi.com/v1/current.json?key=${API_WEATHER_KEY}&q=${location}&aqi=no`)
.then(res => res.json())
.then(json => weatherApi(json))
.catch(error => handleError(error))


export{weatherApi, weatherStats}