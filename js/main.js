/* ================================================
   Visual Point Panamá — main.js
   Contadores animados, AOS init, scroll suave
================================================ */

(function () {
  'use strict';

  // ---- Inicializar AOS ----
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 650,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        delay: 0,
      });
    }
  });

  // ---- Contador animado ----
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const steps    = 60;
    const interval = duration / steps;
    let current    = 0;

    const timer = setInterval(function () {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('es-PA') + suffix;
    }, interval);
  }

  // ---- Observer para contadores ----
  function initCounters() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- AOS personalizado (fallback si no carga CDN) ----
  function initCustomAOS() {
    if (typeof AOS !== 'undefined') return; // ya cargó la librería

    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.aosDelay || 0;
            setTimeout(function () {
              entry.target.classList.add('aos-animate');
            }, parseInt(delay, 10));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Scroll suave para anclas ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const navbarH = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
            10
          ) || 64;
          const top = target.getBoundingClientRect().top + window.scrollY - navbarH - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ---- Filtros de productos (tabs) ----
  function initProductFilters() {
    const filterBtns = document.querySelectorAll('[data-filter]');
    const productCards = document.querySelectorAll('[data-category]');

    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        const filter = this.dataset.filter;

        productCards.forEach(function (card) {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ---- Formulario de contacto ----
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      // Simular envío (reemplazar con lógica real)
      setTimeout(function () {
        submitBtn.textContent = '¡Mensaje enviado!';
        submitBtn.style.backgroundColor = 'var(--color-success)';
        submitBtn.style.borderColor = 'var(--color-success)';
        form.reset();

        setTimeout(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.borderColor = '';
        }, 3000);
      }, 1200);
    });
  }

  // ---- Inicializar todo al cargar el DOM ----
  document.addEventListener('DOMContentLoaded', function () {
    initCounters();
    initCustomAOS();
    initSmoothScroll();
    initProductFilters();
    initContactForm();
  });

})();

// ---- Mapa Leaflet — carga diferida ----
(function () {
  var mapEl = document.getElementById('vp-map');
  if (!mapEl) return;

  var loaded = false;

  var sucursales = [
    { nombre: 'Súpercentro El Dorado',            sub: 'Piso 1, frente a las escaleras del cine',   lat:  9.0095, lng: -79.5345 },
    { nombre: 'Altaplaza Mall',                    sub: 'Planta baja, entre Swarovski y Félix',       lat:  9.0288, lng: -79.5343 },
    { nombre: 'Albrook Mall — Pasillo Central',    sub: 'Frente a Zara planta superior',              lat:  8.9746, lng: -79.5523 },
    { nombre: 'Albrook Mall — Pasillo Dinosaurio', sub: 'Pasillo del Dinosaurio',                     lat:  8.9742, lng: -79.5519 },
    { nombre: 'Los Pueblos',                       sub: 'Entre Súper 99 y Credichips',                lat:  9.0465, lng: -79.4493 },
    { nombre: 'Costa Verde',                       sub: 'Entre Do It y Banco General',                lat:  8.8946, lng: -79.7517 },
    { nombre: 'Los Andes',                         sub: 'Frente a la estación del metro',             lat:  9.0494, lng: -79.5086 },
    { nombre: 'David, Chiriquí',                   sub: 'Al lado del Hotel Ciudad de David',          lat:  8.4292, lng: -82.4254 },
  ];

  function initLeafletMap() {
    if (loaded) return;
    loaded = true;

    // Cargar CSS de Leaflet
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(css);

    // Cargar JS de Leaflet
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = function () { buildMap(); };
    script.onerror = function () {
      var fb = mapEl.querySelector('.map-loading-placeholder');
      if (fb) { fb.innerHTML = '<i class="fas fa-map-location-dot"></i><span>Mapa no disponible</span>'; }
    };
    document.head.appendChild(script);
  }

  function buildMap() {
    // Quitar placeholder
    var placeholder = mapEl.querySelector('.map-loading-placeholder');
    if (placeholder) placeholder.remove();

    var map = L.map('vp-map', {
      zoomControl: true,
      scrollWheelZoom: false,
    }).setView([9.01, -79.54], 11);

    // Tiles OpenStreetMap — sin API key
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    // Icono personalizado (pin dorado)
    var pinIcon = L.divIcon({
      className: '',
      html: '<div class="vp-map-pin"><i class="fas fa-location-dot"></i></div>',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -34],
    });

    sucursales.forEach(function (s) {
      L.marker([s.lat, s.lng], { icon: pinIcon })
        .bindPopup(
          '<div class="vp-popup-title">' + s.nombre + '</div>' +
          '<div class="vp-popup-sub">' + s.sub + '</div>'
        )
        .addTo(map);
    });
  }

  // Cargar Leaflet solo cuando el mapa entra en viewport
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        initLeafletMap();
      }
    }, { rootMargin: '300px' });
    observer.observe(mapEl);
  } else {
    // Fallback para browsers sin IntersectionObserver
    initLeafletMap();
  }
})();

// ---- Preloader ----
(function () {
  var loader = document.getElementById('page-loader');
  if (!loader) return;

  function hideLoader() {
    // Dar al menos 1.5s para que se vea la animación de las gafas
    setTimeout(function () {
      loader.classList.add('loader-hidden');
      // Eliminar del DOM tras la transición para liberar memoria
      loader.addEventListener('transitionend', function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, { once: true });
    }, 1500);
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
    // Fallback máximo 3.5s para que no se quede bloqueado
    setTimeout(hideLoader, 3500);
  }
})();
