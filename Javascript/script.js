// window.addEventListener('load', () => {
//   window.scrollTo(0, 0);  // Scrolls to the top left corner of the page
// });







// Generate a random number
var randomNumber = Math.floor(Math.random() * 1000000);

// Update the CSS link with the random number as a cache-busting parameter
document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;

// Navbar script
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






// Preloader script
document.addEventListener("DOMContentLoaded", function () {
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






// Image slider script
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






// Get card script
const cardSlider = document.querySelector('.getcardSlider');
const cardSlides = document.querySelectorAll('.getcardSlide');
const cardPagination = document.querySelector('.card-pagination');
let cardCurrentIndex = 0;
const cardVisibleSlides = 1; // Number of slides visible at a time
const cardTotalSlides = cardSlides.length;

// Clone the first and last slides for seamless infinite scrolling
const firstSlideClone = cardSlides[0].cloneNode(true);
const lastSlideClone = cardSlides[cardTotalSlides - 1].cloneNode(true);

cardSlider.appendChild(firstSlideClone);
cardSlider.insertBefore(lastSlideClone, cardSlides[0]);

// Variables to handle touch events
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let isDragging = false;
const swipeThreshold = 50; // Minimum swipe distance to trigger slide change
const angleThreshold = 10; // Maximum angle from the horizontal line

function cardMoveSlider() {
    cardSlider.style.transition = 'transform 0.5s ease-in-out';
    cardSlider.style.transform = `translateX(-${(cardCurrentIndex + 1) * 100}%)`;

    if (cardCurrentIndex === -1) {
        setTimeout(() => {
            cardSlider.style.transition = 'none';
            cardCurrentIndex = cardTotalSlides - 1;
            cardSlider.style.transform = `translateX(-${cardTotalSlides * 100}%)`;
        }, 500);
    } else if (cardCurrentIndex === cardTotalSlides) {
        setTimeout(() => {
            cardSlider.style.transition = 'none';
            cardCurrentIndex = 0;
            cardSlider.style.transform = `translateX(-${100}%)`;
        }, 500);
    }

    cardUpdatePagination();
}

function nSlide() {
    cardCurrentIndex++;
    cardMoveSlider();
}

function pSlide() {
    cardCurrentIndex--;
    cardMoveSlider();
}

function cardUpdatePagination() {
    cardPagination.innerHTML = '';
    const cardTotalDots = cardTotalSlides; // Number of dots should equal the original slides count
    for (let i = 0; i < cardTotalDots; i++) {
        const cardDot = document.createElement('div');
        if (i === cardCurrentIndex || (cardCurrentIndex === cardTotalSlides && i === 0)) {
            cardDot.classList.add('active');
        }
        cardDot.addEventListener('click', () => {
            cardCurrentIndex = i;
            cardMoveSlider();
        });
        cardPagination.appendChild(cardDot);
    }
}

// Touch events for mobile interaction
cardSlider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
    cardSlider.style.transition = 'none'; // Disable transition during drag
});

cardSlider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    const angle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180 / Math.PI);

    // Only move the slider if the swipe is mostly horizontal
    if (angle < angleThreshold) {
        cardSlider.style.transform = `translateX(calc(-${(cardCurrentIndex + 1) * 100}% + ${diffX}px))`;
    }
});

cardSlider.addEventListener('touchend', () => {
    isDragging = false;
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    const angle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180 / Math.PI);

    // Only trigger slide change if the swipe is horizontal and passes the threshold
    if (angle < angleThreshold && Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
            pSlide(); // Swipe right
        } else if (diffX < 0) {
            nSlide(); // Swipe left
        }
    } else {
        cardMoveSlider(); // Snap back if not enough swipe or too vertical
    }
});

// Initialize the slider at the first real slide
cardSlider.style.transform = `translateX(-${100}%)`;
cardMoveSlider();





// Testimonial script
// Testimonial slider script
const testimonialSlider = document.querySelector('.testimonialSlider');
const testimonialSlides = document.querySelectorAll('.testimonialSlide');
const testimonialPagination = document.querySelector('.testimonial-pagination');
let testimonialCurrentIndex = 0;
const testimonialVisibleSlides = 1; // Number of slides visible at a time
const testimonialTotalSlides = testimonialSlides.length;

// Clone the first and last slides for seamless infinite scrolling
const testimonialFirstSlideClone = testimonialSlides[0].cloneNode(true);
const testimonialLastSlideClone = testimonialSlides[testimonialTotalSlides - 1].cloneNode(true);

testimonialSlider.appendChild(testimonialFirstSlideClone);
testimonialSlider.insertBefore(testimonialLastSlideClone, testimonialSlides[0]);

function testimonialMoveSlider() {
  testimonialSlider.style.transition = 'transform 0.5s ease-in-out';
  testimonialSlider.style.transform = `translateX(-${(testimonialCurrentIndex + 1) * 100}%)`;

  if (testimonialCurrentIndex === -1) {
    setTimeout(() => {
      testimonialSlider.style.transition = 'none';
      testimonialCurrentIndex = testimonialTotalSlides - 1;
      testimonialSlider.style.transform = `translateX(-${testimonialTotalSlides * 100}%)`;
    }, 500);
  } else if (testimonialCurrentIndex === testimonialTotalSlides) {
    setTimeout(() => {
      testimonialSlider.style.transition = 'none';
      testimonialCurrentIndex = 0;
      testimonialSlider.style.transform = `translateX(-${100}%)`;
    }, 500);
  }

  testimonialUpdatePagination();
}

function testimonialNextSlide() {
  testimonialCurrentIndex++;
  testimonialMoveSlider();
}

function testimonialPreviousSlide() {
  testimonialCurrentIndex--;
  testimonialMoveSlider();
}

function testimonialUpdatePagination() {
  testimonialPagination.innerHTML = '';
  const testimonialTotalDots = testimonialTotalSlides; // Number of dots should equal the original slides count
  for (let i = 0; i < testimonialTotalDots; i++) {
    const testimonialDot = document.createElement('div');
    if (i === testimonialCurrentIndex || (testimonialCurrentIndex === testimonialTotalSlides && i === 0)) {
      testimonialDot.classList.add('active');
    }
    testimonialDot.addEventListener('click', () => {
      testimonialCurrentIndex = i;
      testimonialMoveSlider();
    });
    testimonialPagination.appendChild(testimonialDot);
  }
}

// Touch events for mobile interaction
testimonialSlider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  isDragging = true;
  testimonialSlider.style.transition = 'none'; // Disable transition during drag
});

testimonialSlider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  currentY = e.touches[0].clientY;
  const diffX = currentX - startX;
  const diffY = currentY - startY;
  const angle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180 / Math.PI);

  // Only move the slider if the swipe is mostly horizontal
  if (angle < angleThreshold) {
    testimonialSlider.style.transform = `translateX(calc(-${(testimonialCurrentIndex + 1) * 100}% + ${diffX}px))`;
  }
});

testimonialSlider.addEventListener('touchend', () => {
  isDragging = false;
  const diffX = currentX - startX;
  const diffY = currentY - startY;
  const angle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180 / Math.PI);

  // Only trigger slide change if the swipe is horizontal and passes the threshold
  if (angle < angleThreshold && Math.abs(diffX) > swipeThreshold) {
    if (diffX > 0) {
      testimonialPreviousSlide(); // Swipe right
    } else if (diffX < 0) {
      testimonialNextSlide(); // Swipe left
    }
  } else {
    testimonialMoveSlider(); // Snap back if not enough swipe or too vertical
  }
});

// Initialize the slider at the first real slide
testimonialSlider.style.transform = `translateX(-${100}%)`;
testimonialMoveSlider();






// ACCORDIION SCRIPT
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
      const activeHeader = document.querySelector('.accordion-header.active');
      
      // Close the previously active accordion if it's not the current one
      if (activeHeader && activeHeader !== header) {
          activeHeader.classList.remove('active');
          activeHeader.nextElementSibling.style.maxHeight = '0px';
      }

      // Toggle the clicked header's active state
      header.classList.toggle('active');
      
      // Toggle the content's max-height based on active state
      const accordionContent = header.nextElementSibling;
      if (header.classList.contains('active')) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
          accordionContent.style.maxHeight = '0px';
      }
  });
});






// ABOUT PAGE SCRIPTS
// COUNTER BOX SCRIPT
function animateCounter(counter) {
  const target = +counter.getAttribute('data-count');
  const increment = target / 100;
  let current = 0;

  const updateCounter = () => {
      current += increment;
      if (current < target) {
          counter.firstChild.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
      } else {
          counter.firstChild.textContent = target;
      }
  };

  updateCounter();
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          observer.unobserve(counter);
      }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
  observer.observe(counter);
});


