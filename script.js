// JavaScript Functionality for Slideshow
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the selected slide
    slides[index].style.display = 'block';
    updateDots(index);
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Create navigation dots
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
    dotsContainer.appendChild(dot);
});

// Show initial slide
showSlide(currentSlide);

// Automatic slideshow
setInterval(nextSlide, 5000);

// Event listeners for prev and next buttons
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
