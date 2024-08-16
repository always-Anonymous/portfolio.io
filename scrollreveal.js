// main.js

// ScrollReveal Animations
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.hero-content', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px'
    });

    ScrollReveal().reveal('.certificate-card', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        interval: 200
    });

    ScrollReveal().reveal('.project-card', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        interval: 200
    });
});
