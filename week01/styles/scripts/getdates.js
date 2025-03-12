// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Output the current year in the footer's first paragraph
document.querySelector('footer p:first-of-type').textContent = `© ${currentYear}`;

// Output the last modified date in the footer's second paragraph
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModified}`;