const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Better dropdown behavior - stays open when hovering over menu items
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdown && dropdownMenu) {
    let dropdownTimeout;
    
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
        dropdownMenu.style.display = 'block';
    });
    
    dropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            dropdownMenu.style.display = 'none';
        }, 200);
    });
    
    dropdownMenu.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
    });
    
    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            dropdownMenu.style.display = 'none';
        }, 200);
    });
}

// Smooth scroll with offset for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = 100;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover tooltips for phone and email
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

phoneLinks.forEach(link => {
    link.setAttribute('title', 'Click to call or text us');
});

emailLinks.forEach(link => {
    link.setAttribute('title', 'Click to email us');
});
