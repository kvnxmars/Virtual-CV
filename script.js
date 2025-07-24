// --- SCROLL-REVEAL ANIMATION ---
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- BACK TO TOP BUTTON FUNCTIONALITY ---
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        // If user has scrolled down more than 300px, show the button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top when button is clicked
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor link behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
});