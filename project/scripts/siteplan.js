document.addEventListener("DOMContentLoaded", () => {
   
    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");
    year.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

    
    const gallery = document.getElementById("gallery");
    const largeImageDiv = document.createElement("div");
    largeImageDiv.id = "large-image";
    largeImageDiv.style.display = "none";  
    largeImageDiv.style.position = "fixed";
    largeImageDiv.style.top = "50%";
    largeImageDiv.style.left = "50%";
    largeImageDiv.style.transform = "translate(-50%, -50%)";
    largeImageDiv.style.zIndex = "1000";
    largeImageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    largeImageDiv.style.padding = "20px";
    largeImageDiv.style.borderRadius = "10px";
    largeImageDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    document.body.appendChild(largeImageDiv);

    const largeImage = document.createElement("img");
    largeImageDiv.appendChild(largeImage);

   
    largeImage.style.width = "400px"; 
    largeImage.style.height = "600px"; 
    largeImage.style.objectFit = "cover"; 

    
    gallery.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            const imageSrc = event.target.src;
            largeImage.src = imageSrc;
            largeImageDiv.style.display = "block";  

            
            largeImageDiv.addEventListener("click", () => {
                largeImageDiv.style.display = "none";  
            });
        }
    });
});
