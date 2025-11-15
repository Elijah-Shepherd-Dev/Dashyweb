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
            
            currentLanguage.innerHTML = `<i class="fas fa-globe"></i> ${language}`;
            
            // Show language change notification
            showNotification(`Language changed to ${language}`);
        });
    });
}

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4361ee, #7209b7);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add click effects to cards
document.querySelectorAll('.problem-card, .feature-card, .category-card, .audience-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Interactive dashboard preview
const dashboardPreview = document.querySelector('.dashboard-preview');
if (dashboardPreview) {
    dashboardPreview.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = dashboardPreview.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        dashboardPreview.style.transform = `perspective(1000px) rotateY(${-x * 10}deg) rotateX(${y * 5}deg)`;
    });
    
    dashboardPreview.addEventListener('mouseleave', () => {
        dashboardPreview.style.transform = 'perspective(1000px) rotateY(-10deg) rotateX(5deg)';
    });
}

console.log('Dashyweb loaded successfully! 🚀');

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta-section .btn-primary');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.transform = 'scale(1.05)';
            setTimeout(() => {
                ctaButton.style.transform = '';
            }, 600);
        }, 3000);
    }
    
    // Add floating animation to feature icons
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite alternate`;
    });
    
    // Add CSS for float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
});
