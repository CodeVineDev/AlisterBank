// NAVBAR SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  let dropnavBtn = document.querySelector('.dropnav-btn');
  let dropnavContainer = document.querySelector('.dropnav-container');

  dropnavBtn.addEventListener('click', () => {
    dropnavContainer.classList.toggle('active')
    dropnavBtn.classList.toggle("toggle");

  })
});
window.addEventListener('load', () => {
  window.scrollTo(0, 0);  // Scrolls to the top left corner of the page 
});

document.addEventListener("DOMContentLoaded", function () {
  var dropnavBtn = document.querySelector(".dropnav-btn");

  dropnavBtn.addEventListener("click", function () {
    var dropnavContainer = dropnavContainer.classList.toggle("active");
    dropnavBtn.classList.toggle("toggle");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".nav-wrap");
  var navbarHeight = navbar.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("sticky");
      setTimeout(function () {
        navbar.classList.add("show");
      }, 10); // Small delay to allow CSS transition
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("show");
    }
  });
});







// Generate a random number
var randomNumber = Math.floor(Math.random() * 1000000);

// Update the CSS link with the random number as a cache-busting parameter
document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;




