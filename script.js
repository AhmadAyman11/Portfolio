// Toggle navigation menu for mobile
const navbar = document.querySelector(".nav-links");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".hamburger");

// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.section-title, .about-content, .certificate-card, .project-card, .skill-item');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize fade-in elements
fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    fadeInObserver.observe(element);
});

// Hamburger menu toggle
hamburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
});

// Skill item hover animation
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
});