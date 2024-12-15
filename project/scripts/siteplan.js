document.addEventListener("DOMContentLoaded", () => {
    // Handle the year and last modified date (your existing code)
    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");
    year.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

    // Interactive Gallery Functionality
    const gallery = document.getElementById("gallery");
    const largeImageDiv = document.createElement("div");
    largeImageDiv.id = "large-image";
    largeImageDiv.style.display = "none";  // Hidden by default
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

    // Set fixed size for the large image (same as gallery image size)
    largeImage.style.width = "400px"; // Set to match the gallery image width
    largeImage.style.height = "600px"; // Set to match the gallery image height
    largeImage.style.objectFit = "cover"; // Maintain aspect ratio

    // Function to toggle image view
    gallery.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            const imageSrc = event.target.src;
            largeImage.src = imageSrc;
            largeImageDiv.style.display = "block";  // Show the large image

            // Close the large image when clicked
            largeImageDiv.addEventListener("click", () => {
                largeImageDiv.style.display = "none";  // Hide the large image
            });
        }
    });
});
