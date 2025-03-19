// JavaScript functionality for the temples page

document.addEventListener("DOMContentLoaded", () => {
    console.log("Temples page script loaded.");
    const lastUpdatedElement = document.getElementById("lastUpdated");
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    lastUpdatedElement.textContent = new Date(document.lastModified).toLocaleDateString('en-US', options);

    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    });
});
