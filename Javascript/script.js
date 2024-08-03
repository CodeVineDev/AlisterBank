window.addEventListener('load', () => {
  window.scrollTo(0, 0);  // Scrolls to the top left corner of the page 
});


// Generate a random number
var randomNumber = Math.floor(Math.random() * 1000000);

// Update the CSS link with the random number as a cache-busting parameter
document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;


document.addEventListener("DOMContentLoaded", () => {
  const dropnavBtns = document.querySelectorAll('.dropnav-btn');
  
  dropnavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-target');
      const container = document.querySelector(targetSelector);
      
      if (container) {
        container.classList.toggle('active');
        btn.classList.toggle('toggle');
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var preloader = document.querySelector(".preloader");
  var content = document.getElementById("content");

  // Minimum delay time (in milliseconds)
  var minimumDelay = 3000;
  var delayTimer;

  // Set a timeout for the minimum delay
  delayTimer = setTimeout(function () {
      if (document.readyState === "complete") {
          preloader.style.display = "none";
          content.style.display = "block";
      }
  }, minimumDelay);

  window.onload = function () {
      clearTimeout(delayTimer);
      preloader.style.display = "none";
      content.style.display = "block";
  };
});


const slider = document.querySelector('.slider');
const slidesContainer = slider.querySelector('.slides'); // Assuming you have a container for slides
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let autoScrollInterval;
let visibleSlides = 3; // Default number of slides visible at a time

function updateVisibleSlides() {
    if (window.matchMedia('(max-width: 450px)').matches) {
        visibleSlides = 1;
    } else if (window.matchMedia('(max-width: 800px)').matches) {
        visibleSlides = 2;
    } else {
        visibleSlides = 3;
    }
}

function updateSlider() {
    updateVisibleSlides(); // Update the number of visible slides based on screen width
    const totalSlides = slides.length; // Total number of slides

    if (currentIndex >= totalSlides - visibleSlides) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = 0;
            slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
        }, 500);
    }
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 3000);
}

// Update slides and totalSlides on resize
window.addEventListener('resize', () => {
    slides = document.querySelectorAll('.slide'); // Re-query slides
    updateSlider();
});

window.addEventListener('load', () => {
    slides = document.querySelectorAll('.slide'); // Initialize slides
    updateSlider();
});

updateSlider();
startAutoScroll();




document.addEventListener("DOMContentLoaded", () => {
  const hiddenNavBtn = document.getElementById("hidden-nav");
  hiddenNavBtn.style.cssText = "opacity: 0; position: fixed;";
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("main-nav");
    const sticky = navbar.offsetHeight;
    if (window.scrollY >= sticky) {
      navbar.style.top = "-100%";
      hiddenNavBtn.style.cssText = "opacity: 1; top: 1rem; position: fixed;";
    } else {
      hiddenNavBtn.style.cssText = "opacity: 0; top: -100%; position: fixed;";
      navbar.style.top = "0";
    }
  });
});





