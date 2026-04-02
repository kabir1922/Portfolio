// ── NAV SCROLL ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── HAMBURGER MENU ───────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SCROLL REVEAL ────────────────────────────────────────────────────
const revealTargets = [
  '.section-tag', '.section-title', '.about-text', '.about-card',
  '.skill-group', '.project-card', '.contact-item', '.contact-form',
  '.about-stats', '.contact-sub'
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

// ── ACTIVE NAV LINK ──────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--accent)' : '';
  });
});

// ── CONTACT FORM ─────────────────────────────────────────────────────
const form     = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formNote.textContent = '⚠️ Please fill in all fields.';
    formNote.style.color = '#ff6b6b';
    return;
  }

  // Build mailto link as fallback (no backend needed for static site)
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:kabir1922@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = '✅ Opening your email client...';
  formNote.style.color = 'var(--hot)';
  form.reset();
  setTimeout(() => formNote.textContent = '', 5000);
});

// ── TYPED EFFECT ON HERO CODE CARD ───────────────────────────────────
// Small cursor pulse on load — just CSS handles this via .blink
