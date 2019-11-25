var mymap = L.map('mapid').setView([-14.2350044, -51.9252815], 5); // Brazilian coordinates

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3,
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFmYWVsc2E5NyIsImEiOiJjazJkejczamEwNDQyM2huMGN1cWR5bjFpIn0.bU27maqiKHbo6fEm_eor2g'
}).addTo(mymap);


/**
 * * loadAssetPoints()
 * * Load asset points by AJAX request and print them on map
 *  ! This function is executed during page load
 * @param None
*/
function loadAssetPoints(){
  fetch("Towers") // Make an API call to get Discharges information
  .then(res => res.json())
  .then(data => plotMarker(data))
  .catch(err => console.log(err));
}

/**
 * * plotMarker(object data)
 * * Plot marker points in the map given a coordinate in the plan
 * @param data: element object to be plotted
*/
function plotMarker(data){
  data.forEach((element) => {
    L.marker([element.LATITUDE, element.LONGITUDE]).addTo(mymap);
  })
}