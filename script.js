document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Premium Dynamic Navbar Background Blur on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 15, 25, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 210, 255, 0.15)';
        } else {
            navbar.style.background = 'rgba(11, 15, 25, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
    });

    // 2. Interactive Contact Form Handler (DOM Manipulation)
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get input values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation check
            if (name && email && message) {
                // Show a modern success toast state inside the card
                formFeedback.textContent = `Thank you, ${name}! Your message has been simulated successfully.`;
                formFeedback.style.color = 'var(--accent-teal)';
                formFeedback.style.marginTop = '15px';
                formFeedback.style.fontWeight = '500';
                
                // Reset the input fields
                contactForm.reset();
            } else {
                formFeedback.textContent = 'Please fill out all fields before sending.';
                formFeedback.style.color = '#EF4444';
            }
        });
    }
});

// 3. Mobile Hamburger Menu Interaction Engine
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const navLinksArray = document.querySelectorAll('.nav-links a');

    if (hamburger && navContainer) {
        // Toggle menu view state on toggle press
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navContainer.classList.toggle('active');
        });

        // Auto-close menu drawer when clicking a section link
        navLinksArray.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navContainer.classList.remove('active');
            });
        });
    }