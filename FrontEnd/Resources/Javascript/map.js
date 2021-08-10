var mymap = L.map('mapid',{
  preferCanvas: true
}).setView([-14.2350044, -51.9252815], 4); // Starts the map pointing to Brazil

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3,
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'ACCESS_TOKEN'
}).addTo(mymap);

/**
 * * loadAssetPoints()
 * * Load asset points by AJAX request and print them on map
 *  ! This function is executed during page load
*/
function loadAssetPoints(){
  fetch("http://pfcwebserver-env.eba-2ebev37k.sa-east-1.elasticbeanstalk.com/towers") // Make an API call to get Discharges information
  .then(res => res.json())
  .then(data => {
    data = Object.values(data);
    // plotMarker(data,"polyline");
    plotTowerRadius(data);
  })
  .catch(err => console.log(err));

  fetch("http://pfcwebserver-env.eba-2ebev37k.sa-east-1.elasticbeanstalk.com/results") // Make an API call to get Discharges information
  .then(res => res.json())
  .then(data => {
    data = Object.values(data);
    plotResults(data);
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

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

/**
 * * plotResults(object data, string mode)
 * * Plot discharge position
 * @param results: results whose coordinates will be ploted
*/
function plotResults(results){
  results.forEach((discharge) => {
    if(discharge.latitude && discharge.longitude){ // Plot only if coordinates are not null
      L.marker([discharge.latitude, discharge.longitude],{icon: greenIcon}).addTo(mymap)
      .bindPopup('Torre afetada: '+discharge.towerindex.toString()+'<br>'+
                 'Horário: '+discharge.date.toString()+'<br>'+
                 'Distância da torre: '+parseFloat(discharge.distance).toFixed(2).toString()+' metros<br>')
      .openPopup();
    }
  })
};
