document.addEventListener("DOMContentLoaded", function() {
   
    function calculateWindChill(temperature, windSpeed) {
       
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
    }

   
    const temperature = 25; // Celsius
    const windSpeed = 10; // km/h

  
    const isWindChillApplicable = temperature <= 10 && windSpeed > 4.8;

   
    const windchillElement = document.getElementById("windchill");
    if (isWindChillApplicable) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windchillElement.textContent = `${windChill} °C`;
    } else {
        windchillElement.textContent = "N/A";
    }

    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

  
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
});