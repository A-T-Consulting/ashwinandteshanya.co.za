const fs = require('fs');


async function run() {
    const data = fs.readFileSync('./malta.psv', 'utf8');
    const lines = data.split('\n');
    const entries = lines.map(l => l.split('|')).filter(l => l.length === 7);
    for (const entry of entries) {
    const riskLevel = entry[6].trim().toUpperCase() === '' ? "NULL" : `'${entry[6].trim().toUpperCase()}'`
        console.log(`INSERT INTO risk_assessment.document_type("type", "metadata") VALUES ('${entry[3].trim()}', '${entry[4].trim()}') ON CONFLICT DO NOTHING;`);
        console.log(`
INSERT INTO risk_assessment.jurisdiction_required_document ("jurisdiction_id", "investor_legal_type_id", "document_type", "metadata", "document_group", "risk_level") VALUES (
    (SELECT j.jurisdiction_id FROM risk_assessment.jurisdiction j WHERE j.jurisdiction = '${entry[1].trim()}' AND j.tenant_id = (SELECT t.tenant_id FROM config.tenant t WHERE t.name = '${entry[0].trim()}' LIMIT 1)  LIMIT 1),
    (SELECT ilt.investor_legal_type_id FROM risk_assessment.investor_legal_type ilt WHERE ilt.type = '${entry[2].trim()}' LIMIT 1),
    '${entry[3].trim()}',
    '${entry[4].trim()}',
    '${entry[5].trim()}',
    ${riskLevel}
    ) ON CONFLICT DO NOTHING;\n\n\n`);
    }

}


run().then(() => {}).catch((err) => console.error(err));

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
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Submit to Web3Forms
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Success - show snackbar
            showSnackbar();
            this.reset();
            guestCountDiv.style.display = 'none';
        } else {
            // Error
            throw new Error('Submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your RSVP. Please try again or contact us directly.');
    })
    .finally(() => {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});

// Snackbar functionality
function showSnackbar() {
    const snackbar = document.getElementById('successSnackbar');
    snackbar.classList.add('show');
    
    // Hide snackbar after 5 seconds
    setTimeout(() => {
        snackbar.classList.remove('show');
    }, 5000);
}

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
