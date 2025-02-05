let currentIndex = 0;
const images = document.querySelectorAll('.image-container-extra img');
const totalImages = images.length;
const container = document.querySelector('.image-container-extra');

function getImageWidth() {
    return images[0].offsetWidth + 15; // Dynamic width detection
}

function slideImages() {
    images[currentIndex].classList.remove('highlighted'); // Remove highlight

    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * getImageWidth();

    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(${offset}px)`;

    images[currentIndex].classList.add('highlighted'); // Highlight new image
}

// Auto-slide every 3 seconds
setInterval(slideImages, 3000);

// Adjust slider on window resize
window.addEventListener("resize", () => {
    container.style.transition = "none"; // Prevent jump on resize
    container.style.transform = `translateX(-${currentIndex * getImageWidth()}px)`;
});
