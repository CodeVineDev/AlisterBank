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



// Generate a random number
var randomNumber = Math.floor(Math.random() * 1000000);

// Update the CSS link with the random number as a cache-busting parameter
document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;




