console.log("JavaScript file loaded successfully");
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
  
  const templeContainer = document.getElementById("temple-container");
  
  document.addEventListener("DOMContentLoaded", () => {
      function getYear(dedicatedStr) {
          const yearMatch = dedicatedStr.match(/\d{4}/);
          return yearMatch ? parseInt(yearMatch[0]) : null; 
      }
  
      function displayTemples(filteredTemples) {
          templeContainer.innerHTML = ""; // Clear previous entries
          filteredTemples.forEach(temple => {
              const card = document.createElement("div");
              card.classList.add("temple-card");
              
              card.innerHTML = `
                  <h3>${temple.templeName}</h3>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Area:</strong> ${temple.area} sq ft</p>
                  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              `;
  
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
  
      const addClickListener = (id, func) => {
          const element = document.getElementById(id);
          if (element) element.addEventListener("click", func);
      };
  
      addClickListener("old-temples", filterOldTemples);
      addClickListener("new-temples", filterNewTemples);
      addClickListener("large-temples", filterLargeTemples);
      addClickListener("small-temples", filterSmallTemples);
      addClickListener("home", displayAllTemples);
  
      displayAllTemples();
  });
  


