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
    temp.innerText = `Current Tempature: ${dom.temp} 'F`;
    wind.innerText = `Wind Speed: ${dom.wind} mph`;
    humidity.innerText = `Humidity: ${dom.humidity}`;
    feel.innerText = `Feels Like: ${dom.tempFeel} 'F`;
    icon.src = dom.weatherIcon;
    condition.innerText = `Weather Condition: ${dom.condition}`;
    city.innerText = `City: ${dom.city}`;
    region.innerText = `Region: ${dom.region}`;
    country.innerText = `Country: ${dom.country}`;

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


