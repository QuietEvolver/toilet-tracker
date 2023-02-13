//api for 
src="https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places&callback=initMap"

//api for Maps Static API request
https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=${process.env.API_KEY}

var service;
var infowindow;

service = new google.maps.places.PlacesService(map);
service.textSearch(request, callback);

//create a map
var map;
function initialize() {
  var portland = new google.maps.LatLng(45.5152,122.6784);

  map = new google.maps.Map(document.getElementById('map'), {
      center: portland,
      zoom: 15
    });

  var request = {
    location: portland,
    radius: '500',
    query: 'restroom'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

//query (required) The text string on which to search, for example: "restaurant" or "123 Main Street". 
//openNow — A boolean value, indicating that the Places service should only return those places that are open for business at the time the query is sent.
//a location and a radius — You may bias results to a specified circle by passing a location and a radius parameter. 
//type — Restricts the results to places matching the specified type. Only one type may be specified (if more than one type is provided, all types following the first entry are ignored) 