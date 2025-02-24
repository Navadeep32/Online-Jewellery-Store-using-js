// Slideshow and scroll animations
window.onload = function() {
    let ringSection = document.querySelector('.ring-showcase');
    let textContent = document.querySelector('.text-content');
    let goldRing = document.querySelector('.gold-ring');
    let options = { root: null, threshold: 0.1 };

    // Intersection Observer for scroll effect
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textContent.classList.add('visible');
                goldRing.classList.add('visible');
            }
        });
    }, options);

    observer.observe(ringSection);
};
