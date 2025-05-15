
  
// Typed.js Animation
var TypedText = new Typed(".animatedText", {
    strings: ["WEB DESIGNER", "DIGITAL COMMUNICATIONS SPECIALIST", "BUT I ALSO ENJOY PLAYING THE PIANO", ":)"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});

// Sticky Header
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    console.log('scrollY:', window.scrollY); // Log scroll position
    console.log('Header class list:', header.classList); // Log current class list
    header.classList.toggle('sticky', window.scrollY > 0);
});



// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Basic Form Submission (Placeholder)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a placeholder. Connect to a backend for real functionality.)');
    this.reset();
});















    