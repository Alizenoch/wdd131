const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  }
];

// Select the existing temple container from the HTML
const templeContainer = document.querySelector(".temple-cards");

document.addEventListener("DOMContentLoaded", () => {
    function getYear(dedicatedStr) {
        return parseInt(dedicatedStr.split(",")[0]); 
    }

    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = ""; // Clear previous entries
        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card");
            
            const templeName = document.createElement("h3");
            templeName.textContent = temple.templeName;
            card.appendChild(templeName);

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;
            card.appendChild(location);

            const dedication = document.createElement("p");
            dedication.textContent = `Dedicated: ${temple.dedicated}`;
            card.appendChild(dedication);

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area} sq ft`;
            card.appendChild(area);

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = temple.templeName;
            image.loading = "lazy";
            card.appendChild(image);

            templeContainer.appendChild(card);
        });
    }

    function filterOldTemples() {
        displayTemples(temples.filter(temple => getYear(temple.dedicated) < 1900));
    }

    function filterNewTemples() {
        displayTemples(temples.filter(temple => getYear(temple.dedicated) > 2000));
    }

    function filterLargeTemples() {
        displayTemples(temples.filter(temple => temple.area > 90000));
    }

    function filterSmallTemples() {
        displayTemples(temples.filter(temple => temple.area < 10000));
    }

    function displayAllTemples() {
        displayTemples(temples);
    }

    document.getElementById("old-temples").addEventListener("click", filterOldTemples);
    document.getElementById("new-temples").addEventListener("click", filterNewTemples);
    document.getElementById("large-temples").addEventListener("click", filterLargeTemples);
    document.getElementById("small-temples").addEventListener("click", filterSmallTemples);
    document.getElementById("home").addEventListener("click", displayAllTemples);

    displayAllTemples(); // Ensure all temples display on initial load
});



