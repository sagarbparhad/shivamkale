// Set the time interval for image sliding
let currentIndex = 0;
const images = document.querySelectorAll('.image-container-extra img');
const totalImages = images.length;

function slideImages() {
    // Remove the highlighted class from the previous image
    images[currentIndex].classList.remove('highlighted');

    // Move the container to the next image
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to first image
    const offset = -currentIndex * 220;  // Adjust the value based on image width + margin
    document.querySelector('.image-container-extra').style.transform = `translateX(${offset}px)`;

    // Add the highlighted class to the new front image
    images[currentIndex].classList.add('highlighted');
}

// Set an interval to swipe images every 3 seconds
setInterval(slideImages, 3000);  // Change 3000 to control the speed
