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

    
    year.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

   
    hamburger.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        hamburger.textContent = menu.style.display === "block" ? "✖" : "☰";
    });

   
    createTempleCard(temples); 

    

    
    homeLink.addEventListener("click", () => {
        createTempleCard(temples); 
    });

   function getYearFromDate(dateString) {
    const dateParts = dateString.split(","); 
    if (dateParts.length > 0) {
        const year = parseInt(dateParts[0].trim()); 
        return year;
    }
    return null; 
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
        gallery.innerHTML = ""; 

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
