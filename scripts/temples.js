document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('nav');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;'; // Unicode for hamburger icon
    nav.appendChild(hamburger);

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.style.display = 'none');

    hamburger.addEventListener('click', function () {
        navLinks.forEach(link => {
            link.style.display === 'none' ? link.style.display = 'block' : link.style.display = 'none';
        });
    });


    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.querySelector('#year').textContent = `©️${currentYear}, Zac Vongphakdy, USA`;


    const lastModified = document.querySelector('#lastModified');
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
});