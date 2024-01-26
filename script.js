// GOLDEN JAVASCRIPT CODE 
// FOR THE IMAGE SLIDER
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++
    if (counter > 3) {
        counter = 1;
    }
}, 7000)

// NAVBAR 
let sidebarBtn = document.querySelector('#sidebarBtn');
let closeModal = document.querySelector('#close-modal');
let sideBar = document.querySelector('.sideBar')
let bodySlider = document.querySelector('.body-slider');

sidebarBtn.addEventListener('click', () => {
    sideBar.style.top = "60px"
    sidebarBtn.style.opacity = 0;
    bodySlider.style.marginTop = "315px"
})
closeModal.addEventListener('click', () => {
    sideBar.style.top = "-305px"
    sidebarBtn.style.opacity = 1;
    bodySlider.style.marginTop = 0
})
