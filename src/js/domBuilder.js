const weatherContainer = document.getElementById('weatherContainer');
const temp = document.createElement('h3');
const wind = document.createElement('h3');
const humidity = document.createElement('h3');
const feel = document.createElement('h3');
const icon = document.createElement('img');
const condition = document.createElement('h3');
const city = document.createElement('h2');
// const cityName = document.getElementById("cityName").value;
const region = document.createElement('h2');
const country = document.createElement('h2');



const buildDom = (dom) => {
    temp.innerText = dom.temp;
    wind.innerText = dom.wind;
    humidity.innerText = dom.humidity;
    feel.innerText = dom.tempFeel;
    icon.src = dom.weatherIcon;
    condition.innerText = dom.condition;
    //city.innerText = cityName;
    region.innerText = dom.region;
    country.innerText = dom.country;

    weatherContainer.appendChild(city);
    weatherContainer.appendChild(region);
    weatherContainer.appendChild(country);
    weatherContainer.appendChild(temp);
    weatherContainer.appendChild(icon);
    weatherContainer. appendChild(condition);
    weatherContainer. appendChild(wind);
    weatherContainer. appendChild(humidity);
    weatherContainer. appendChild(feel);
}


export{buildDom}


