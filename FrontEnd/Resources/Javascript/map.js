var mymap = L.map('mapid').setView([-14.2350044, -51.9252815], 5); // Starts the map pointing to Brazil

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
*/
function loadAssetPoints(){
  fetch("Towers") // Make an API call to get Discharges information
  .then(res => res.json())
  .then(data => plotMarker(data,"polyline"))
  .catch(err => console.log(err));
}

/**
 * * plotMarker(object data, string mode)
 * * Plot marker points in the map given a coordinate in the plan
 * @param data: element object to be plotted
 * @param mode: select the plot mode (polyline or marker)
*/
function plotMarker(data,mode){
  debugger;
  switch (mode){ // Plot a specific geometrical figure according to the desired mode
    case "marker":
        data.forEach((element) => {
          L.marker([element.coord_y, element.coord_x]).addTo(mymap);
        });
      break;
    case "polyline":
      let coordinatesArray = [];
      data.forEach(element => coordinatesArray.push([element.coord_y,element.coord_x]));
      L.polyline(coordinatesArray, {color: 'red'}).addTo(mymap);
      break;
  }
}