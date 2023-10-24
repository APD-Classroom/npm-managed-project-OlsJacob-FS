//Mapbox with faker:
import { faker } from '@faker-js/faker';
    //Faker to randomly select cordinates for mapbox
    // const lat = faker.location.latitude();
    // const lon = faker.location.longitude();
    const startingCity = faker.location.city()
    const mapboxgl = require('mapbox-gl');
    
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2xzamFjb2IiLCJhIjoiY2xueHhsa2RlMDF3djJscDlvdWhlMXlzcSJ9.0z6r7RcwHZnOftOTfOIiSg';
    const map = new mapboxgl.Map({
    container: 'mapContainer', // container ID
    style: 'mapbox://styles/olsjacob/clnxytpns008901qs6vqbhylu', // style URL
    center: [-74, 40.8], // starting position [lng, lat]
    zoom: 9, // starting zoom
    });

export{mapboxgl, startingCity}