// Initialize the map
const map = L.map('map').setView([47.7511, -120.7401], 7); // Center on Washington State

// Add a base layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to fetch weather data from the National Weather Service API
function fetchWeatherData(stationCode) {
    const url = `https://api.weather.gov/stations/${stationCode}/observations/latest`;
    fetch(url, {
        method: 'GET',
        headers: { 'User-Agent': 'myweatherapp.com, contact@myweatherapp.com' }
    })
    .then(response => response.json())
    .then(data => addWeatherMarker(data, stationCode))
    .catch(error => console.error('Error retrieving weather data:', error));
}

// Function to add weather data markers to the map
function addWeatherMarker(data, stationCode) {
    if (data && data.properties) {
        const coords = data.geometry.coordinates;
        const temp = data.properties.temperature.value;
        const weather = data.properties.textDescription;
        L.marker([coords[1], coords[0]]).addTo(map)
            .bindPopup(`<strong>Station: ${stationCode}</strong><br>Temperature: ${temp}°C<br>Description: ${weather}`);
    }
}

// Array of station codes and coordinates
const stations = [
    { name: "Seattle", code: "KSEA", coords: [47.6062, -122.3321] },
    { name: "Olympia", code: "KOLM", coords: [47.0379, -122.9007] },
    { name: "Bellingham", code: "KBLI", coords: [48.7519, -122.4787] },
    // Add additional stations as needed
];

// Fetch and display weather for all listed stations
stations.forEach(station => {
    fetchWeatherData(station.code);
});

// Function to geocode user input and find the closest weather station
function findAndZoomToClosestStation(input) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            const closestStation = findClosestStation(lat, lon);
            zoomAndDisplayWeather(closestStation);
        } else {
            alert('Location not found or geocoding failed!');
        }
    })
    .catch(error => {
        console.error('Geocoding error:', error);
        alert('Geocoding failed');
    });
}

// Function to find the closest weather station
function findClosestStation(lat, lon) {
    let closestStation = null;
    let minDist = Infinity;
    stations.forEach(station => {
        const dist = distance(lat, lon, station.coords[0], station.coords[1]);
        if (dist < minDist) {
            minDist = dist;
            closestStation = station;
        }
    });
    return closestStation;
}

// Haversine distance formula
function distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Zoom into the map and display the weather data for the closest station
function zoomAndDisplayWeather(station) {
    if (station) {
        map.flyTo([station.coords[0], station.coords[1]], 10); // Zoom into the map at level 10
        fetchWeatherData(station.code); // Fetch weather data for the closest station
    } else {
        alert('No nearby station found!');
    }
}
