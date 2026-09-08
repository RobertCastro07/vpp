/* ================================================
   Visual Point Panamá — menu.js
   Menú hamburguesa móvil y comportamiento del navbar
================================================ */

(function () {
  'use strict';

  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const navbar     = document.querySelector('.navbar');
  const body       = document.body;

  // ---- Hamburguesa ----
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', function (e) {
      if (
        mobileMenu.classList.contains('open') &&
        !navbar.contains(e.target)
      ) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  // ---- Navbar sticky con sombra al hacer scroll ----
  if (navbar) {
    function onScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // estado inicial
  }

  // ---- Marcar link activo según página actual ----
  (function markActive() {
    const currentPage = window.location.pathname.split('/').filter(Boolean).pop() || 'index';
    const allLinks = document.querySelectorAll('.navbar__links a, .navbar__mobile-menu a');

    allLinks.forEach(function (link) {
      const href = link.getAttribute('href') || '';
      const hrefPage = href === '/' ? 'index' : href.replace(/^\//, '').split('#')[0] || 'index';
      if (hrefPage === currentPage) {
        link.classList.add('active');
      }
    });
  })();

})();
