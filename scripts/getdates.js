// JavaScript to dynamically populate the current year
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get the last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;
});
