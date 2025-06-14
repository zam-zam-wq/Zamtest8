document.addEventListener('DOMContentLoaded', function() {
  // ===== Mobile Menu Toggle =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  // Toggle menu on button click
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    // Change icon from ☰ to ✕ when open
    this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.textContent = '☰';
    });
  });

  // ===== Smooth Scrolling for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ===== Close Menu When Clicking Outside =====
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      navToggle.textContent = '☰';
    }
  });

  // ===== Close Menu on Escape Key =====
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.textContent = '☰';
    }
  });

  // ===== Animate Elements on Scroll =====
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project, .degree-box, .social-btn');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animated elements
  document.querySelectorAll('.project, .degree-box, .social-btn').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });

  // Run on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);

  // ===== Current Year in Footer =====
  document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} zamgraphics. All rights reserved.`;

  // ===== WhatsApp Floating Button =====
  const floatingWhatsApp = document.createElement('a');
  floatingWhatsApp.href = 'https://wa.me/254745655029';
  floatingWhatsApp.className = 'floating-whatsapp';
  floatingWhatsApp.innerHTML = '💬 Chat on WhatsApp';
  document.body.appendChild(floatingWhatsApp);
});
