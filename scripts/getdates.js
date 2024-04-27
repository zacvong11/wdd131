const currentYear = new Date().getFullYear();

document.querySelector('footer p:first-of-type').textContent += ` ${currentYear}`;


const lastModifiedDate = new Date(document.lastModified);

document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;