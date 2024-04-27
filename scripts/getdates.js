const currentYear = new Date().getFullYear();

const footer = document.querySelector('footer');
footer.querySelector('#year').textContent = `©️${currentYear}, Zac Vongphakdy, USA`;

const lastModifiedDate = new Date(document.lastModified);

document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;