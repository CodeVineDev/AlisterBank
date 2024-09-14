// Load navigation bar
// Function to load external HTML files and inject them into the page
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById(componentId).innerHTML = `<p>Failed to load content.</p>`;
        });
}

// Load navbar
loadComponent('navbar', '../PAGES/navbar.html');

// Load footer
loadComponent('footer', '../PAGES/footer.html');









// ABOUT PAGE SCRIPTS
// COUNTER BOX SCRIPT
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const increment = target / 150;
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

