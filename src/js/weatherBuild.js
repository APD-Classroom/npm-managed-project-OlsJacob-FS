//Build weather table data::
fetch(`http://api.weatherapi.com/v1/current.json?key=298fa3d5a3c94cd8b7601047232310&q=${location}&aqi=no`)
.then(res => res.json())
.then(data => console.log(data))
