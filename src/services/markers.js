// import { Map } from './maps.js';
// import { mymap, markers } from './index.js';
// import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/src/Leaflet.js';

// mymap.addEventListener("click", function(event) {
//   // Get coordinates of click
//   const lat = event.latlng.lat;
//   const lng = event.latlng.lng;

//   // Create a new marker with name and coordinates
//   const prompt = prompt("Enter Toilet Title:");
//   const marker = L.marker([lat, lng]).addTo(mymap);
//   marker.bindPopup(`${prompt}`).openPopup();

//   // Addthe marker to cluster
//   markers.addLayer(marker);
// });

// Map.addLayer(markers);

export default class Marker {
  constructor(){
    this.marker1 = [45.519859, -122.677803];
  }   
}

