document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate wind chill
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
        } else {
            return "N/A";
        }
    }

    // Set wind chill value
    const temp = 10; // Example temperature in Celsius
    const windSpeed = 5; // Example wind speed in km/h
    const windChillElement = document.getElementById("windchill");
    windChillElement.textContent = calculateWindChill(temp, windSpeed);

    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = `©️ ${currentYear}, Zac Vongphakdy, USA`;

    // Set last modified date in the footer
    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
});