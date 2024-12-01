document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const homeLink = document.querySelector("#home");
    const oldLink = document.querySelector("#old");
    const newLink = document.querySelector("#new");
    const largeLink = document.querySelector("#large");
    const smallLink = document.querySelector("#small");

    // Set year and last modified date
    year.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

    // Toggle menu visibility
    hamburger.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        hamburger.textContent = menu.style.display === "block" ? "✖" : "☰";
    });

    // Create temple cards
    createTempleCard(temples); // Display all temples initially

    

    // Event listeners for filters
    homeLink.addEventListener("click", () => {
        createTempleCard(temples); // Displays all temples
    });

   function getYearFromDate(dateString) {
    const dateParts = dateString.split(","); // Split by comma to extract date parts
    if (dateParts.length > 0) {
        const year = parseInt(dateParts[0].trim()); // Get the first part as year
        return year;
    }
    return null; // Return null if no year can be extracted
}

oldLink.addEventListener("click", () => {
    createTempleCard(
        temples.filter((temple) => {
            const year = getYearFromDate(temple.dedicated);
            return year && year < 1900;
        })
    );
});


    newLink.addEventListener("click", () => {
        createTempleCard(
            temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000)
        );
    });

    largeLink.addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.area > 90000));
    });

    smallLink.addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.area < 10000));
    });

    function createTempleCard(filteredTemples) {
        const gallery = document.querySelector(".gallery");
        gallery.innerHTML = ""; // Clear existing content

        filteredTemples.forEach((temple) => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            gallery.appendChild(card);
        });
    }
});
