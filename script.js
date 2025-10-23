// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('show');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});