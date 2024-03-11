// NAVBAR SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  let dropnavBtn = document.querySelector('.dropnav-btn');
  let dropnavContainer = document.querySelector('.dropnav-container');
  let dropnavBars = document.querySelector('.bars');

  dropnavBtn.addEventListener('click', () => {
    dropnavContainer.classList.toggle('active')
    dropnavBtn.classList.toggle("toggle");

  })
});


 // Generate a random number
 var randomNumber = Math.floor(Math.random() * 1000000);

 // Update the CSS link with the random number as a cache-busting parameter
 document.querySelector('link[rel="stylesheet"]').href = './Dist/css/main.css?v=' + randomNumber;

