import { mapboxgl } from "./mapbox.js";
import { weatherApi } from "./weatherBuild.js";
import { buildDom } from "./domBuilder.js";


(() => {
    weatherApi();
  
})();