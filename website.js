// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// RSVP Form Functionality
const rsvpForm = document.getElementById('rsvpForm');
const attendingSelect = document.getElementById('attending');
const guestCountDiv = document.getElementById('guestCount');

// Show/hide guest count based on attendance
attendingSelect.addEventListener('change', function() {
    if (this.value === 'yes') {
        guestCountDiv.style.display = 'block';
    } else {
        guestCountDiv.style.display = 'none';
    }
});

// Handle RSVP form submission
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.attending) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
    
    // Reset form
    this.reset();
    guestCountDiv.style.display = 'none';
});

// Registry Toggle Functionality
// Simple if-statement to manually update registry visibility
const showRegistry = false; // Change this to true to show registry section

if (showRegistry) {
    document.getElementById('registry').style.display = 'block';
} else {
    document.getElementById('registry').style.display = 'none';
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Form input animations
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add some CSS for form animations
const style = document.createElement('style');
style.textContent = `
    .form-group.focused label {
        color: var(--accent-color);
        transform: translateY(-5px);
    }
    
    .form-group input:not(:placeholder-shown) + label,
    .form-group select:not([value=""]) + label,
    .form-group textarea:not(:placeholder-shown) + label {
        transform: translateY(-5px);
        color: var(--accent-color);
    }
`;
document.head.appendChild(style);

// Countdown timer (optional)
function updateCountdown() {
    const weddingDate = new Date('2026-01-17T14:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // You can add this countdown to your HTML if desired
    // document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Add some nice hover effects
document.querySelectorAll('.detail-card, .venue-map, .rsvp-form').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('Wedding website loaded successfully! 🎉'); 