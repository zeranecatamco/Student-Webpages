
// Typing effect
const heroText = document.getElementById('hero-text');
const fullText = "Welcome to Carlos B.'s Portfolio";
let i = 0;

function typeText() {
  if (i < fullText.length) {
    heroText.textContent += fullText.charAt(i);
    i++;
    setTimeout(typeText, 60);
  }
}
typeText();

// Fade in on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
