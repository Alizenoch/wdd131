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
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253016,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple8.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 11",
    area: 16000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-mormon-temple-1164678-wallpaper.jpg"
  },
  {
    templeName: "Seattle Washington",
    location: "Seattle, Washington, United States",
    dedicated: "1980, November, 23",
    area: 16000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seattle-temple-lds-83286-wallpaper.jpg"
  }
];

const templeContainer = document.createElement("div");
templeContainer.classList.add("temple-cards");
document.body.appendChild(templeContainer);

temples.forEach((temple) => {
  // Create card container
  const card = document.createElement("div");
  card.classList.add("temple-card");

  // Temple name
  const templeName = document.createElement("h3");
  templeName.textContent = temple.templeName;
  card.appendChild(templeName);

  // Temple location
  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;
  card.appendChild(location);

  // Dedication date
  const dedication = document.createElement("p");
  dedication.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedication);

  // Area
  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(area);

  // Image with lazy loading
  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = "lazy";
  card.appendChild(image);

  // Append the card to the container
  templeContainer.appendChild(card);
});

// Filter functions
function filterOldTemples() {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
}

function filterNewTemples() {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
}

function filterLargeTemples() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmallTemples() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

function displayAllTemples() {
  displayTemples(temples);
}

// Event listeners for navigation menu items
document.getElementById("old-temples").addEventListener("click", filterOldTemples);
document.getElementById("new-temples").addEventListener("click", filterNewTemples);
document.getElementById("large-temples").addEventListener("click", filterLargeTemples);
document.getElementById("small-temples").addEventListener("click", filterSmallTemples);
document.getElementById("home").addEventListener("click", displayAllTemples);

// Initial display of all temples
displayAllTemples();
  


