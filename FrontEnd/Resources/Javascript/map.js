var mymap = L.map('mapid').setView([-14.2350044, -51.9252815], 5); // Brazilian coordinates

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3,
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFmYWVsc2E5NyIsImEiOiJjazJkejczamEwNDQyM2huMGN1cWR5bjFpIn0.bU27maqiKHbo6fEm_eor2g'
}).addTo(mymap);


/**
 * * Load asset points by AJAX request and print them on map
 *  ! This function is executed during page load
 * @param None
 * @return None
*/
function loadAssetPoints(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
      }
    };
    xhttp.open("GET", "Discharges", true);
    xhttp.send();
    /**
     * TODO use 'fetch' method instead of using 'XMLHttpRequest'
     */
}