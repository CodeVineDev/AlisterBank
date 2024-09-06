
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
  