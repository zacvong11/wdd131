const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-lds-412121-wallpaper.jpg" },
    { templeName: "Hong Kong China", location: "Hong Kong, China", dedicated: "1996, May, 26", area: 21648, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-lds-178318-wallpaper.jpg" },
    { templeName: "Kyiv Ukraine", location: "Kyiv, Ukraine", dedicated: "2010, August, 29", area: 21737, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-728221-wallpaper.jpg" },
    { templeName: "Adelaide Australia Temple", location: "Adelaide, Australia", dedicated: "2000, June, 15", area: 10700, imageUrl: "https://www.churchofjesuschrist.org/temples/photo-gallery?lang=eng" },
    { templeName: "Arequipa Peru Temple", location: "Arequipa, Peru", dedicated: "2019, December, 15", area: 26969, imageUrl: "https://www.churchofjesuschrist.org/temples/photo-gallery?lang=eng" },
    { templeName: "Barranquilla Colombia Temple", location: "Barranquilla, Columbia", dedicated: "2018, December, 9", area: 25349, imageUrl: "https://www.churchofjesuschrist.org/temples/photo-gallery?lang=eng" }

];

document.addEventListener('DOMContentLoaded', () => {
    updateFooterDates();
    displayTemples(temples);
    setupFilters();
});

function displayTemples(templeArray) {
    const resGrid = document.querySelector(".res-grid");
    resGrid.innerHTML = ''; // Clear existing content
    templeArray.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        resGrid.appendChild(card);
    });
}

function setupFilters() {
    document.getElementById('home').addEventListener('click', () => displayTemples(temples));
    document.getElementById('old').addEventListener('click', () => {
        const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        displayTemples(oldTemples);
    });
    document.getElementById('new').addEventListener('click', () => {
        const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        displayTemples(newTemples);
    });
    document.getElementById('large').addEventListener('click', () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    });
    document.getElementById('small').addEventListener('click', () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    });
}

function updateFooterDates() {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = `© Zac Vongphakdy, USA ${currentYear}`;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}