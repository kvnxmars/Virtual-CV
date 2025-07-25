document.addEventListener('DOMContentLoaded', () => {
    // --- SCROLL-REVEAL ANIMATION ---
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- BACK TO TOP BUTTON FUNCTIONALITY ---
    const backToTopBtn = document.getElementById('backToTopBtn');
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        // Show or hide back-to-top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        // Toggle shadow on nav
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- HERO TYPING ANIMATION ---
    function typeEffect(element, text, speed = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        element.innerHTML = "";
        type();
    }

    const heroTitle = document.querySelector('.type-target');
    if (heroTitle) {
        typeEffect(heroTitle, "Hi! I'm Unathi Kevin Mbolongwe", 75);
    }
});

function typeLoop(element, messages, speed = 80, pause = 2000) {
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = messages[msgIndex];
        element.innerHTML = current.substring(0, charIndex);

        if (!isDeleting && charIndex === current.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, pause);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            msgIndex = (msgIndex + 1) % messages.length;
            setTimeout(type, speed);
        } else {
            charIndex += isDeleting ? -1 : 1;
            setTimeout(type, isDeleting ? speed / 2 : speed);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    //const heroTitle = document.querySelector('.type-target');
    //if (heroTitle) {
        /*typeLoop(heroTitle, [
            "Hi! I'm Unathi Kevin Mbolongwe",
            "Final Year BSc IT Student",
            "Full-Stack Dev in Training 🚀",
            "Scroll down to see my work 👇"
        ]);*/
        

        // -- scroll reveal animation--//
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    
);

