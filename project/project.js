document.addEventListener('DOMContentLoaded', function () {
    // Existing gallery code
    const galleryImages = document.querySelector('.gallery-images');
    const images = Array.from(document.querySelectorAll('.gallery-images img'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }

    function updateGallery() {
        const totalImages = images.length;
        const imagesToShow = 5;
        const spacing = 10;
        const imageWidth = (100 / imagesToShow) - (spacing / imagesToShow * 2);

        const visibleImages = images.slice(currentIndex, currentIndex + imagesToShow);
        if (visibleImages.length < imagesToShow) {
            visibleImages.push(...images.slice(0, imagesToShow - visibleImages.length));
        }

        galleryImages.innerHTML = '';
        visibleImages.forEach(img => {
            const newImg = document.createElement('img');
            newImg.src = img.src;
            newImg.alt = img.alt;
            newImg.style.width = `calc(${imageWidth}% - ${spacing}px)`;
            newImg.style.margin = `0 ${spacing / 2}px`;
            galleryImages.appendChild(newImg);
        });

        galleryImages.style.transform = `translateX(0%)`;
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    setInterval(showNextImage, 3000);
    updateGallery();

    // New form handling code for register.html
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const species = document.getElementById('species').value;

            const registrationData = {
                name,
                email,
                species
            };

            localStorage.setItem('registrationData', JSON.stringify(registrationData));
            alert('Registration Successful!');
        });
    }
});