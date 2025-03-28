document.addEventListener("DOMContentLoaded", function() {
    // Set current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Static values for temperature and wind speed
    const temperature = 20; // in °C
    const windSpeed = 15; // in km/h

    // Function to calculate windchill
    function calculateWindChill(temp, windSpeed) {
        // Wind Chill formula for Metric (Celsius)
        return (temp <= 10 && windSpeed > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) : "N/A";
    }

    // Display windchill or "N/A"
    const windchill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = windchill;
});




