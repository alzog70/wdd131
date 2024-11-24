
const currentYear = new Date().getFullYear(); 
document.getElementById("currentyear").textContent = currentYear; 


const lastModified = document.lastModified; 
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified; 


function calculateWindChill(temp, windSpeed) {
    
    const windChill = 13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2); 
}


const temperature = 8; 
const windSpeed = 10; 


if (temperature <= 10 && windSpeed > 4.8) {
    
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChillValue + " °C";
} else {
    
    document.getElementById("windChill").textContent = "N/A";
}
