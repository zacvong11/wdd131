document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelector('.gallery-images');
    const images = Array.from(document.querySelectorAll('.gallery-images img'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    let autoRotate;

    function updateGallery() {
        const imagesToShow = 5;
        const spacing = 10;
        const imageWidth = (100 / imagesToShow) - (spacing / imagesToShow * 2);

        galleryImages.innerHTML = '';
        for (let i = 0; i < imagesToShow; i++) {
            const index = (currentIndex + i) % images.length;
            const newImg = document.createElement('img');
            newImg.src = images[index].src;
            newImg.alt = images[index].alt;
            newImg.style.width = `calc(${imageWidth}% - ${spacing}px)`;
            newImg.style.margin = `0 ${spacing / 2}px`;
            galleryImages.appendChild(newImg);
        }
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }

    nextButton.addEventListener('click', () => {
        clearInterval(autoRotate);
        showNextImage();
        autoRotate = setInterval(showNextImage, 3000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoRotate);
        showPrevImage();
        autoRotate = setInterval(showNextImage, 3000);
    });

    autoRotate = setInterval(showNextImage, 3000);
    updateGallery();
});
const currentYear = new Date().getFullYear();

const footer = document.querySelector('footer');
footer.querySelector('#year').textContent = `©️${currentYear}, Zac Vongphakdy, USA`;

const lastModifiedDate = new Date(document.lastModified);

document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;