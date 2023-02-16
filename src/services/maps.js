
/* eslint-disable */
export default class Map {
  constructor() {
    this.map = L.map("map").setView([45.519859, -122.677803], 13)
    this.tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    });
    this.myMarker = L.marker 
    this.markers = L.markerClusterGroup();
    this.init();
}

init() {
  this.tileLayer.addTo(this.map);
  this.map.addLayer(this.markers)
}

}

