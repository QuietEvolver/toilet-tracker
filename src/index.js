// import { MarkerClusterer } from "@googlemaps/markerclusterer";
// ggl clustering: https://developers.google.com/maps/documentation/javascript/marker-clustering
/* eslint-disable no-undef */
/* eslint-enable no-undef */
function initMap() {
  console.log(" I am in the initMap() function. ");
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 45.520049472702055, lng: -122.67791084412895 },
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  const markerClusterer = new markerClusterer.MarkerClusterer({ map, markers  });
}

const locations = [
  { lat: 45.520049472702055, lng: -122.67791084412895 },
  { lat: 45.53, lng: -122.67 },
  { lat: 45.54, lng: -122.62 },
  { lat: 45.55, lng: -122.64 },
  { lat: 45.56, lng: -122.65 },

];

window.initMap = initMap;