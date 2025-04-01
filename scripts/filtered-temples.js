//Hamburger button responsive code
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
           

//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + '&#x1F3B8;Horacio Velarde Riquelme &#x1F3B8; Canada';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt);    



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
  
