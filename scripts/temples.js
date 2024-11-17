document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");


    year.textContent = new Date().getFullYear();

 
    lastModified.textContent = document.lastModified;


    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        hamburger.textContent = menu.style.display === "block" ? "✖" : "☰";
    });
});
