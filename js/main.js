/* ============================================================
   SABOR & ARTE — JavaScript v2.0
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar: transparent ↔ scrolled ── */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleScroll() {
    const y = window.scrollY;
    if (y > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Mobile menu ── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navMenu.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });

  /* ── Intersection Observer: fade-in elements ── */
  const fadeEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  const ioFade  = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // Stagger siblings
      const parent   = entry.target.parentElement;
      const siblings = [...parent.querySelectorAll('.fade-up, .fade-left, .fade-right')];
      const idx      = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.min(idx * 90, 360)}ms`;
      entry.target.classList.add('visible');
      ioFade.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeEls.forEach(el => ioFade.observe(el));

  /* ── Highlight today in schedule ── */
  const PT_DAYS = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  const todayName = PT_DAYS[new Date().getDay()];

  document.querySelectorAll('.schedule-table tbody tr').forEach(row => {
    const cell = row.querySelector('td:first-child');
    if (cell && cell.textContent.trim().toLowerCase() === todayName) {
      row.classList.add('is-today');
    }
  });

  /* ── Gallery: duplicate track for seamless loop ── */
  const track = document.querySelector('.galeria-track');
  if (track) {
    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.parentElement.appendChild(clone);
  }

  /* ── Active nav link on scroll ── */
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-link[href^="#"]');

  const ioSection  = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { threshold: 0.45 });

  sections.forEach(s => ioSection.observe(s));

})();
