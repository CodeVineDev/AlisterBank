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

// Navbar script
document.addEventListener("DOMContentLoaded", function () {
  var dropnavBtn = document.querySelector(".dropnav-btn");
  var sideBar = document.querySelector(".sideBar");
  // var centerNav = document.querySelector(".centerNav");

  dropnavBtn.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });

  sidebarBtn.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    sidebarBtn.classList.toggle("toggle");
  });
});





// Generate a random number
var randomNumber = Math.floor(Math.random() * 1000000);

// Update the CSS link with the random number as a cache-busting parameter
document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;




