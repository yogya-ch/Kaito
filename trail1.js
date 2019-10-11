var map = L.map('map');//.setView([12.977365,77.574726],15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control({
	/*waypoints: [
		L.latLng(12.977365,77.574726),
		L.latLng(12.887702,77.642015)
	],*/
	router: new L.Routing.OSRMv1({
        serviceUrl: 'http://127.0.0.1:5000/route/v1/driving/77.5321598332335,12.93488755;77.4995421,12.9253978?overview=false&alternatives=true&steps=true'
    .})/*,
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}*/
}).addTo(map);

L.Routing.errorControl(control).addTo(map);
