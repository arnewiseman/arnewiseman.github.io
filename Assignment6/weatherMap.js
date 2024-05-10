// I decided to initalize the map to the center of WA for simplicity
const map = L.map('map').setView([47.7511, -120.7401], 7); 

// This adds in the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

//This dynamically resizes the page for all screensizes
function resizeMap() {
    var height = window.innerHeight; 
    var width = window.innerWidth; 
    var mapDiv = document.getElementById('map'); 
    mapDiv.style.height = height + 'px'; 
    mapDiv.style.width = width + 'px'; 
  }
  
  window.addEventListener('resize', resizeMap);
  window.addEventListener('load', resizeMap);
  
// Makes weather service api calls
function fetchWeatherData(stationId) {
    const url = `https://api.weather.gov/stations/${stationId}/observations/latest`;
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'myweatherapp.com, contact@myweatherapp.com'
        }
    })
    .then(response => response.json()) 
    .then(data => addWeatherMarker(data, stationId))
    .catch(error => console.error('Error retrieving weather data:', error));
}

// This adds the little markers on the page
function addWeatherMarker(data, stationId) {
    if (data && data.properties) {
        const coords = data.geometry.coordinates;
        const temp = data.properties.temperature.value;
        const weather = data.properties.textDescription;
//This is the content put in the tags
        L.marker([coords[1], coords[0]]).addTo(map)
            .bindPopup(`<strong>Station: ${stationId}</strong><br>Temperature: ${temp}°C<br>Description: ${weather}`);
    }
}

// WA state station codes(or the easy ones to find)
const stations = ["KSEA", "KOLM", "KBLI", "KPAE", "KTIW", "KRNT", "KBVS", "KEAT", "KNOW", "KKLS", "KELN", "KMWH", "KPLU", "KPWT", "KHQM", "KAWO", "KSHN", "KNUW"];


// Display weather for all listed stations
stations.forEach(stationId => {
    fetchWeatherData(stationId);
});
const locations = [
    { name: "Seattle", coords: { lat: 47.6062, lon: -122.3321 } },
    { name: "Olympia", coords: { lat: 47.0379, lon: -122.9007 } },
    { name: "Bellingham", coords: { lat: 48.7519, lon: -122.4787 } },
    { name: "Everett", coords: { lat: 47.9789, lon: -122.2021 } },
    { name: "Tacoma", coords: { lat: 47.2529, lon: -122.4443 } },
    { name: "Renton", coords: { lat: 47.4829, lon: -122.2171 } },
    { name: "Yakima", coords: { lat: 46.6021, lon: -120.5059 } },
    { name: "Redmond", coords: { lat: 47.6740, lon: -122.1215 } },
    { name: "Kennewick", coords: { lat: 46.2087, lon: -119.1193 } },
    { name: "Mount Vernon", coords: { lat: 48.4212, lon: -122.3340 } },
    { name: "Wenatchee", coords: { lat: 47.4235, lon: -120.3103 } },
    { name: "Port Angeles", coords: { lat: 48.1181, lon: -123.4307 } },
    { name: "Longview", coords: { lat: 46.1382, lon: -122.9382 } },
    { name: "Ellensburg", coords: { lat: 46.9965, lon: -120.5478 } },
    { name: "Moses Lake", coords: { lat: 47.1301, lon: -119.2781 } },
    { name: "Lacey", coords: { lat: 47.0343, lon: -122.8232 } },
    { name: "Snohomish", coords: { lat: 47.9129, lon: -122.0982 } },
    { name: "Puyallup", coords: { lat: 47.1854, lon: -122.2929 } },
    { name: "Bremerton", coords: { lat: 47.5673, lon: -122.6326 } },
    { name: "Aberdeen", coords: { lat: 46.9754, lon: -123.8157 } },
    { name: "Port Orchard", coords: { lat: 47.5404, lon: -122.6363 } },
    { name: "Sammamish", coords: { lat: 47.6163, lon: -122.0356 } },
    { name: "Maple Valley", coords: { lat: 47.3664, lon: -122.0437 } },
    { name: "Edmonds", coords: { lat: 47.8107, lon: -122.3774 } },
    { name: "Lynnwood", coords: { lat: 47.8279, lon: -122.3051 } },
    { name: "Marysville", coords: { lat: 48.0518, lon: -122.1771 } },
    { name: "Monroe", coords: { lat: 47.8554, lon: -121.9700 } },
    { name: "Bothell", coords: { lat: 47.7623, lon: -122.2054 } },
    { name: "Pasco", coords: { lat: 46.2396, lon: -119.1006 } },
    { name: "Pullman", coords: { lat: 46.7313, lon: -117.1796 } },
    { name: "Issaquah", coords: { lat: 47.5301, lon: -122.0326 } },
    { name: "Mukilteo", coords: { lat: 47.9445, lon: -122.3046 } },
    { name: "Shelton", coords: { lat: 47.2151, lon: -123.1007 } },
    { name: "Anacortes", coords: { lat: 48.5126, lon: -122.6127 } },
    { name: "Gig Harbor", coords: { lat: 47.3293, lon: -122.5801 } },
    { name: "Oak Harbor", coords: { lat: 48.2932, lon: -122.6432 } },
    { name: "Ferndale", coords: { lat: 48.8465, lon: -122.5910 } },
    { name: "Arlington", coords: { lat: 48.1987, lon: -122.1251 } },
    { name: "Bainbridge Island", coords: { lat: 47.6262, lon: -122.5212 } },
    { name: "Bonney Lake", coords: { lat: 47.1770, lon: -122.1865 } },
    { name: "Sedro-Woolley", coords: { lat: 48.5039, lon: -122.2364 } },
    { name: "Camano Island", coords: { lat: 48.1717, lon: -122.5282 } },
    { name: "Chehalis", coords: { lat: 46.6620, lon: -122.9640 } },
    { name: "Hoquiam", coords: { lat: 46.9809, lon: -123.8893 } },
    { name: "Mountlake Terrace", coords: { lat: 47.7882, lon: -122.3087 } },
    { name: "Poulsbo", coords: { lat: 47.7359, lon: -122.6465 } },
    { name: "Sumner", coords: { lat: 47.2032, lon: -122.2404 } },
    { name: "Tukwila", coords: { lat: 47.4740, lon: -122.2610 } },
    { name: "University Place", coords: { lat: 47.2357, lon: -122.5504 } },
    { name: "Walla Walla", coords: { lat: 46.0646, lon: -118.3430 } },
    { name: "Yelm", coords: { lat: 46.9420, lon: -122.6059 } },
    { name: "Enumclaw", coords: { lat: 47.2043, lon: -121.9915 } },
    { name: "Liberty Lake", coords: { lat: 47.6740, lon: -117.0959 } },
    { name: "Richland", coords: { lat: 46.2857, lon: -119.2845 } },
    { name: "Sequim", coords: { lat: 48.0795, lon: -123.1016 } },
    { name: "Snoqualmie", coords: { lat: 47.5287, lon: -121.8254 } },
    { name: "Spokane Valley", coords: { lat: 47.6733, lon: -117.2394 } },
    { name: "Stanwood", coords: { lat: 48.2412, lon: -122.3708 } },
    { name: "Sunset Beach", coords: { lat: 46.9048, lon: -124.1058 } },
    { name: "Toppenish", coords: { lat: 46.3774, lon: -120.3087 } },
    { name: "White Salmon", coords: { lat: 45.7279, lon: -121.4836 } }
];




function zoomToLocation() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const location = locations.find(loc => loc.name.toLowerCase() === input);
    console.log("searchCoords:", searchCoords);
    console.log("Comparing:", prev.coords, curr.coords);

    if (location) {
        console.log(location);

        map.flyTo(location.coords, 10); 
        fetchWeatherData(location.name);
    } else {
    
        alert('Location not found!');
    }
}
// Function to geocode user input and find the closest weather station
function findAndZoomToClosestStation() {
    const input = document.getElementById('searchInput').value;
    console.log("Search initiated for:", input); // Debugging logs
    geocodeLocation(input, (coords) => {
        console.log("Geocoded coordinates:", coords);// Debugging logs
        if (coords) {
            const closestStation = findClosestStation(coords);
            console.log("Closest station found:", closestStation); // Debugging logs
            zoomAndDisplayWeather(closestStation);
        } else {
            alert('Location not found or geocoding failed!');
        }
    });
}


// Essentailly finds the location of whatever city you enter
function geocodeLocation(location, callback) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&city=${encodeURIComponent(location)}&state=Washington&country=USA`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const coords = { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
            callback(coords);
        } else {
            callback(null);
        }
    })
    .catch(error => {
        console.error('Geocoding error:', error);
        callback(null);
    });
}



// Function to find the closest weather station
function findClosestStation(searchCoords) {
    return locations.reduce((prev, curr) => {
        const prevDistance = distance(searchCoords, prev.coords);
        const currDistance = distance(searchCoords, curr.coords);
        return (prevDistance < currDistance) ? prev : curr;
    });
}



// This function takes two sets of coordinates and finds the distance between them 
function distance(coords1, coords2) {
    const R = 6371;
    const dLat = (coords2.lat - coords1.lat) * Math.PI / 180;
    const dLon = (coords2.lon - coords1.lon) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(coords1.lat * Math.PI / 180) * Math.cos(coords2.lat * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}


// Zoom into the map and display the weather data for the closest station
function zoomAndDisplayWeather(station) {
    map.flyTo(station.coords, 10);
    fetchWeatherData(station.id); 
}


