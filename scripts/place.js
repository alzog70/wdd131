// Display the current year in the footer
const currentYear = new Date().getFullYear(); // Get the current year
document.getElementById("currentyear").textContent = currentYear; // Add it to the footer

// Display the last modified date in the footer
const lastModified = document.lastModified; // Get the date the document was last modified
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified; // Add it to the footer

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    // Formula to calculate wind chill
    const windChill = 13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2); // Round to 2 decimal places
}

// Static values for temperature and wind speed
const temperature = 8; // Example temperature in °C
const windSpeed = 10; // Example wind speed in km/h

// Check if conditions are valid for calculating wind chill
if (temperature <= 10 && windSpeed > 4.8) {
    // If conditions are met, calculate wind chill and display it
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChillValue + " °C";
} else {
    // If conditions are not met, display "N/A"
    document.getElementById("windChill").textContent = "N/A";
}
