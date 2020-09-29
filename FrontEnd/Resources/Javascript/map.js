var mymap = L.map('mapid').setView([-14.2350044, -51.9252815], 5); // Starts the map pointing to Brazil

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3,
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFmYWVsc2E5NyIsImEiOiJja2ZuZXY5MjkxcTNwMnFsM3l0NzlmZGQxIn0.BkgVYx-rYyQ_cUGfLDHxQQ'
}).addTo(mymap);

/**
 * * loadAssetPoints()
 * * Load asset points by AJAX request and print them on map
 *  ! This function is executed during page load
*/
function loadAssetPoints(){
  fetch("Towers") // Make an API call to get Discharges information
  .then(res => res.json())
  .then(data => {
    data = Object.values(data);
    // plotMarker(data,"polyline");
    plotTowerRadius(data);
  })
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
  data.forEach(element =>{
    switch (mode){ // Plot a specific geometrical figure according to the desired mode
      case "marker":
        element.forEach((innerElement) => {
            L.marker([innerElement.coord_y, innerElement.coord_x]).addTo(mymap);
          });
        break;
      case "polyline":
        let coordinatesArray = [];
        // Insert on coordinatesArray only if coordinates are not null:
        element.forEach( innerElement => (innerElement.coord_y && innerElement.coord_x) != null ? coordinatesArray.push([innerElement.coord_y,innerElement.coord_x]) : null );
        L.polyline(coordinatesArray, {color: 'red'}).addTo(mymap); // Plots all coordinates on the map as a continuous line
        break;
    }
  })
}

/**
 * * plotTowerRadius(object data, string mode)
 * * Plot tower radius within 50 meters
 * @param lines: lines whose towers will have their radius ploted
*/
function plotTowerRadius(lines){
  debugger;
  lines.forEach((towers) => {
    towers.forEach((tower) => {
      if(tower.coord_y && tower.coord_x){ // Plot only if coordinates are not null
        L.circle([tower.coord_y, tower.coord_x], {
          color: 'blue',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 50
        }).addTo(mymap)
      }
    })
  });
}