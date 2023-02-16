import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/src/Leaflet.js';
import './css/styles.css';
import buildMap from './maps';


function handleMap(){
  // create poop emoji marker
  const poo = L.icon({
    iconUrl: 'https://assets.stickpng.com/images/5897a52fcba9841eabab614b.png',
    iconSize: [25, 50],
    iconAnchor: [11, 35],
    popupAnchor: [-1, -30]
  });

  let mymap = L.map("map").setView([45.519859, -122.677803], 13);

  // Initialize the map
  buildMap(mymap);

  // Add a marker to the map
  let marker = L.marker([45.519859, -122.677803], {icon: poo}).addTo(mymap);

  // Add a popup to the marker
  marker.bindPopup("<b>Hello world!</b><br>I am Epicodus' Bathroom").openPopup();

  mymap.addEventListener("click", function(event) {
    // Get coordinates of click
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    function removeMarker() {
      const marker = this;
      const btn = document.querySelector(".remove");
      btn.addEventListener("click", function () {
        mymap.removeLayer(marker);
      });
    }
    const buttonRemove = '<button type ="button" class="remove">Remove Toilette</button>';
    // Sets up a draggable marker on a map and allows the user to input a title for the marker's location. It also adds a button for removing the marker.
    const marker = L.marker([lat, lng], {
      draggable: true,
      icon: poo,
    });
    const popup = L.popup();
    marker.addTo(mymap);
    marker.bindPopup(popup);
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "Name of Toilet Location:";
    marker.bindPopup(input);
    marker.openPopup();
    marker.on("popupopen", removeMarker);
    input.addEventListener("change", function() {
      marker.openPopup();
      const title = input.value;
      popup.setContent(`${title} ${buttonRemove}`);
      
    });
  });
}    

window.addEventListener('load', function() {
  handleMap();
  
});