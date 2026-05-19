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
  hamburger.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  });
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

// ── CONTACT FORM (Formspree) ─────────────────────────────────────────
const form     = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    formNote.textContent = '⚠️ Please fill in all fields.';
    formNote.style.color = '#ff6b6b';
    return;
  }

  // Show sending state
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  formNote.textContent = '';

  try {
    const response = await fetch('https://formspree.io/f/xkoegpqo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      formNote.textContent = '✅ Message sent! I will get back to you soon.';
      formNote.style.color = '#00d4aa';
      form.reset();
    } else {
      const data = await response.json();
      throw new Error(data.error || 'Server error');
    }
  } catch (err) {
    formNote.textContent = '❌ Failed to send. Please email me directly at kabir1922@gmail.com';
    formNote.style.color = '#ff6b6b';
  } finally {
    btn.textContent = 'Send Message ✉️';
    btn.disabled = false;
    setTimeout(() => formNote.textContent = '', 6000);
  }
});

// ── TYPED EFFECT ON HERO CODE CARD ───────────────────────────────────
// Small cursor pulse on load — just CSS handles this via .blink
