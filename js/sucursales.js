/* ================================================
   Visual Point Panamá — sucursales.js
   Datos reales de las 8 sucursales
   ⚠️ Albrook tiene DOS locales distintos
================================================ */

const SUCURSALES = [
  {
    id: 1,
    nombre: 'Súpercentro El Dorado',
    descripcion: 'Piso 1, frente a las escaleras mecánicas del cine. Sector nuevo.',
    horario: 'Lun–Sáb: 10:00 a.m – 7:00 p.m | Dom: 11:00 a.m – 6:00 p.m',
    whatsapp: '50768031895',
    maps: 'https://maps.google.com/?q=Supercentro+El+Dorado+Panama',
  },
  {
    id: 2,
    nombre: 'Altaplaza Mall',
    descripcion: 'Planta baja, entre Swarovski y Félix.',
    horario: 'Lun–Sáb: 11:00 a.m – 8:00 p.m | Dom y Feriados: 11:00 a.m – 7:00 p.m',
    whatsapp: '50761078544',
    maps: 'https://maps.google.com/?q=Altaplaza+Mall+Panama',
  },
  {
    id: 3,
    nombre: 'Albrook Mall — Pasillo Central',
    descripcion: 'Pasillo central, frente a Zara planta superior.',
    horario: 'Lun–Sáb: 10:00 a.m – 7:00 p.m | Dom y Feriados: 11:00 a.m – 6:00 p.m',
    whatsapp: '50760911977',
    maps: 'https://maps.google.com/?q=Albrook+Mall+Panama',
    badge: 'Albrook #1',
  },
  {
    id: 4,
    nombre: 'Los Pueblos',
    descripcion: 'Entre el Súper 99 y Credichips.',
    horario: 'Lun–Sáb: 9:00 a.m – 6:00 p.m | Dom: Cerrado',
    whatsapp: '50761119098',
    maps: 'https://maps.google.com/?q=Los+Pueblos+Panama',
  },
  {
    id: 5,
    nombre: 'Costa Verde',
    descripcion: 'Entre Do It y Banco General.',
    horario: 'Lun–Sáb: 9:30 a.m – 7:00 p.m | Dom y Feriados: Cerrado',
    whatsapp: '50761495296',
    maps: 'https://maps.google.com/?q=Costa+Verde+Panama',
  },
  {
    id: 6,
    nombre: 'Los Andes',
    descripcion: 'Frente a la salida de la estación del metro.',
    horario: 'Lun–Sáb: 9:30 a.m – 6:00 p.m | Dom: Cerrado',
    whatsapp: '50761346538',
    maps: 'https://maps.google.com/?q=Los+Andes+Panama',
  },
  {
    id: 7,
    nombre: 'David, Chiriquí',
    descripcion: 'Calle José Linton Navarro, al lado del Hotel Ciudad de David, frente a plaza Oteima.',
    horario: 'Lun–Vie: 9:00 a.m – 6:00 p.m | Sáb: 9:00 a.m – 3:00 p.m | Dom: Cerrado',
    whatsapp: '50760735877',
    maps: 'https://maps.google.com/?q=David+Chiriqui+Panama',
  },
  {
    id: 8,
    nombre: 'Albrook Mall — Pasillo del Dinosaurio',
    descripcion: 'Por el pasillo Dinosaurio.',
    horario: 'Lun–Sáb: 10:00 a.m – 7:00 p.m | Dom y Feriados: 11:00 a.m – 6:00 p.m',
    whatsapp: '50764254433',
    maps: 'https://maps.google.com/?q=Albrook+Mall+Panama',
    badge: 'Albrook #2',
  },
];

function renderBranchCards() {
  const container = document.getElementById('sucursales-grid');
  if (!container) return;

  container.innerHTML = SUCURSALES.map(function (s, i) {
    const badgeHtml = s.badge
      ? `<span class="branch-card__badge">${s.badge}</span>`
      : '';
    const num = String(i + 1).padStart(2, '0');

    return `
      <article class="branch-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 75}">
        <span class="branch-card__num" aria-hidden="true">${num}</span>
        <div class="branch-card__pin" aria-hidden="true">
          <i class="fas fa-location-dot"></i>
        </div>
        ${badgeHtml}
        <h3 class="branch-card__name">${s.nombre}</h3>
        <div class="branch-card__info">
          <i class="fas fa-map-pin"></i>
          <span>${s.descripcion}</span>
        </div>
        <div class="branch-card__info">
          <i class="fas fa-clock"></i>
          <span>${s.horario}</span>
        </div>
        <div class="branch-card__actions">
          <a href="https://wa.me/${s.whatsapp}?text=Hola,%20me%20interesa%20información%20sobre%20la%20sucursal%20de%20${encodeURIComponent(s.nombre)}"
             target="_blank" rel="noopener noreferrer"
             class="btn btn--whatsapp">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="${s.maps}" target="_blank" rel="noopener noreferrer"
             class="btn btn--outline-gold">
            <i class="fas fa-map"></i> Cómo llegar
          </a>
        </div>
      </article>
    `;
  }).join('');

  if (typeof AOS !== 'undefined') AOS.refresh();
}

document.addEventListener('DOMContentLoaded', renderBranchCards);
