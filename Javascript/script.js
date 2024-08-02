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
  const hiddenNavBtn = document.getElementById("hidden-nav");
  hiddenNavBtn.style.opacity = 0;
  hiddenNavBtn.style.position = 'fixed'
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById("main-nav");
    const sticky = navbar.offsetHeight;
    if (window.scrollY >= sticky) {
      navbar.style.top = "-100%";
      hiddenNavBtn.style.opacity = 1;
      hiddenNavBtn.style.top = "1rem"
    } else {
      hiddenNavBtn.style.opacity = 0;
      hiddenNavBtn.style.top = "-100%"
      navbar.style.top = 0
    }
  });
})


// Generate a random number
var randomNumber = Math.floor(Math.random() * 1000000);

// Update the CSS link with the random number as a cache-busting parameter
document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;




