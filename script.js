let currentIndex = 0;
const imageContainer = document.querySelector('.image-container-extra');
const images = document.querySelectorAll('.image-container-extra img');

function getImageWidth() {
    return images[0].clientWidth + 10; // Adjust dynamically for margin/padding
}

function slideImages() {
    // Remove highlight from the previous image
    images[currentIndex].classList.remove('highlighted');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * getImageWidth();

    // Apply smooth sliding effect
    imageContainer.style.transition = "transform 0.5s ease-in-out";
    imageContainer.style.transform = `translateX(${offset}px)`;

    // Add highlight effect to new image
    images[currentIndex].classList.add('highlighted');
}

// Auto-slide every 3 seconds
setInterval(slideImages, 3000);

// Handle screen resizing
window.addEventListener("resize", () => {
    imageContainer.style.transition = "none"; // Prevent jump on resize
    imageContainer.style.transform = `translateX(-${currentIndex * getImageWidth()}px)`;
});
