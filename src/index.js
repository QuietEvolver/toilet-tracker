/* eslint-disable */
import {leaflet} from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/src/Leaflet.js';
import './css/styles.css';
import Marker from './markers.js';
import buildMap from './maps';
import './css/styles.css'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Map1Service from './services/map1Service';

// function getAPIData(userInput) {
//   Map1Service.getMap1(userInput)
//     .then(function(map1Response) {
//       if (map1Response instanceof Error) {
//         const errorMessage = `there was a problem accessing the data from map1 exchange request: ${map1Response.message}.`;
//         throw new Error(errorMessage);
//       }
//       // displayOutputs(map1Response, userInput);
//       displayMaps(map1Response, userInput);
      
//     })
//     .catch(function(error) {
//       printError(error);
//     });
// }

/////////////////////////////
// Initialize the map ///////
/*
00// eslint-disable //00
console.log("leaflet: ", leaflet);
var mymap = L.map("map").setView([45.519859, -122.677803], 13);

// Add a tile layer (the base map)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Add a marker to the map
var marker = L.marker([45.519859, -122.677803]).addTo(mymap);

// Add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>I am a toilet for y@u!").openPopup();
///////End Leaf //////////




// // function displayOutputs(req, res){
// //   const radioValue = document.querySelector("input[name=rate]:checked").value;

// //   document.querySelector("#currency").innerText += `\n Exchange rates in $${res} USD are equivalent to: ${(req.conversion_rates[radioValue] * res).toFixed(2)}  ${radioValue}.`;
// // }
// // tix fxn for events
// function displayMaps(){//events, city
//   const radioValue = document.querySelector("input[name=rate]:checked").value;
//   // add += to add each [i] of loop
//   // document.querySelector("#ticketmaster").innerText += `${radioValue}`; //`\n Events in ${city}, are ${events} `;
//   console.log("radioValue: ", radioValue);
// }

// function printError(error) {
//   document.querySelector('#error').innerText = error;
// }

function clearResults() {
  document.querySelector("#currency").innerText = null;
  document.querySelector('#error').innerText = null;
}

function formHandler(event) {
  event.preventDefault();
  clearResults();
  const usDollar = parseInt(document.querySelector('#user-input').value);
  const radioValue = document.querySelector("input[name=rate]:checked").value;
  document.querySelector('#user-input').value = 0;
  // displayMaps(radioValue);
  console.log("radioValue: ", radioValue);
  // console.log("cl dMap", displayMaps());
  // getAPIData(usDollar);
}

window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", formHandler);
  handleMap();
});
/* eslint-disable */

// Initialize the map
export function handleMap(){
  let markerObject = new Marker()
  let mymap = L.map("map").setView([45.519859, -122.677803], 13);
  // let markerCluster = L.marketClusterGroup();
  
  buildMap(mymap);

  // // Add a tile layer (the base map)
  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     maxZoom: 19,
  //   attribution:
  //     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  // }).addTo(mymap);

  // Add a marker to the map
  let marker = L.marker([45.519859, -122.677803]).addTo(mymap); {
  }
  // Add a popup to the marker
  marker.bindPopup("<b>Hello world!</b><br>I am a toilet!").openPopup();

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
    // Create a new marker with name and coordinates
    const marker = L.marker([lat, lng], {
      draggable: true,
    })
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
        const title = input.value;
        popup.setContent(`${title} 
        ${buttonRemove}`);
      })

    

    

    // // creates popup object for marker
    // const popup = L.popup();
    // marker.bindPopup(popup);

    // // creates field for user input
    // const input = document.createElement('input');
    // input.type = 'text';
    // input.placeholder = "Name of Toilet Location:";

    // // Changes popup content to be input, then opens
    // popup.setContent(input);
    // marker.openPopup();

    // // changes the value of popup text to what user entered
    // input.addEventListener("change", function()  {
    //   const title = input.value;
    //   popup.setContent(title + "<br>");

    //   // creates remove button
    //   const removeButton = document.createElement('button');
    //   removeButton.textContent = "Remove";
    //   removeButton.type = "button";
    //   removeButton.id = "removeButtonFin" + marker._leaflet_id; //add unique ID to each removeButton
    //   popup.setContent(popup.getContent() + removeButton.outerHTML);  
     
    //   let removeButtonFin = document.getElementById('removeButtonFin' + marker._leaflet_id);
    //    removeButtonFin.addEventListener('click', function() {
    //     marker.remove();
    //   });
  
});
// find event listner for the marker
//add remove function to that
}




window.addEventListener('load', function() {
  handleMap();
  
});