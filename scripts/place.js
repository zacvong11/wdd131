document.addEventListener("DOMContentLoaded", function () {

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
        } else {
            return "N/A";
        }
    }


    const temp = 10;
    const windSpeed = 5;
    const windChillElement = document.getElementById("windchill");
    windChillElement.textContent = calculateWindChill(temp, windSpeed);


    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = `©️ ${currentYear}, Zac Vongphakdy, USA`;

  
    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
});