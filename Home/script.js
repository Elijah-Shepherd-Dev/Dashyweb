import Aurora from './Aurora.js';

// Initialize Aurora Background
document.addEventListener('DOMContentLoaded', function() {
    const auroraContainer = document.getElementById('aurora-background');
    
    if (auroraContainer) {
        // Create Aurora instance with blue/purple color scheme
        const aurora = new Aurora({
            container: auroraContainer,
            colorStops: ["#4361ee", "#7209b7", "#3a0ca3"],
            amplitude: 0.8,
            blend: 0.6,
            speed: 0.3
        });
        
        aurora.init();
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.problem-card, .feature-card, .category-card, .audience-card').forEach(el => {
        observer.observe(el);
    });

    // Language selector functionality
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLanguage = document.querySelector('.language-selector a');
    
    if (languageOptions.length && currentLanguage) {
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const language = option.querySelector('span').textContent;
                const flagSrc = option.querySelector('img').src;
                
                currentLanguage.innerHTML = `<i class="fas fa-globe"></i> ${language}`;
                
                // In a real implementation, you would change the site language here
                console.log(`Language changed to: ${language}`);
            });
        });
    }

    console.log('Dashyweb loaded successfully!');
});
