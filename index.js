import * as L from "leaflet";



var osmTile = new L.TileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
                      

var mymap = new L.Map('leafletmap', 
    {center: [45.523064, -122.676483], 
    zoom: 13}
);

mymap.addLayer(osmTile);




