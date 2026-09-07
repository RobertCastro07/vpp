# Visual Point Panamá — Sitio Web Oficial
## Documento de planificación para Claude Code

---

## 🏢 ¿Qué es este proyecto?

Rediseño completo del sitio web de **Ópticas Visual Point Panamá**, una cadena de ópticas con **8 sucursales** en Panamá. La página anterior estaba desactualizada y no reflejaba la calidad ni los servicios reales de la empresa.

**Objetivo:** Crear una página web moderna, profesional y optimizada para SEO que muestre todos los servicios, tecnologías, promociones y sucursales de Visual Point, y que posicione bien en Google y en las respuestas de IAs.

**Repositorio GitHub:** `vpp`
**Dominio final:** visualpointopticas.com (comprado en GoDaddy)
**Hosting:** Vercel (deploy conectado al repo `vpp`)
**Estado actual:** Publicado en GitHub Pages; migrando hosting a Vercel con dominio propio.

---

## 📱 PRIORIDAD DE DISEÑO: MOBILE FIRST

**El celular es lo más importante.** La mayoría de visitantes llegan desde el teléfono.

- Diseñar primero para pantallas de 375px (iPhone SE)
- Luego adaptar para tablet (768px)
- Luego para escritorio (1280px+)
- Usar CSS responsive con media queries en cada componente
- Menú hamburguesa en móvil, menú horizontal en escritorio
- Botones grandes y fáciles de tocar en móvil (mínimo 44px de alto)
- Imágenes optimizadas para no pesar mucho en celular

---

## 🎨 DISEÑO VISUAL

### Identidad de marca
El logo de Visual Point tiene:
- Texto "Visual Point" en negro elegante
- Texto "Óptica · Panamá" en negro
- Arco decorativo amarillo dorado en la parte superior
- Fondo transparente
- Estilo: elegante, serio, profesional

### Paleta de colores — EXTRAÍDA DEL LOGO OFICIAL

```css
:root {
  --color-primary: #1a1a1a;      /* Negro elegante del texto del logo */
  --color-gold: #F5C800;         /* Amarillo dorado del arco del logo */
  --color-gold-dark: #C9A800;    /* Dorado oscuro para hover y detalles */
  --color-gold-light: #FFD700;   /* Dorado claro para acentos */
  --color-bg: #ffffff;           /* Blanco puro */
  --color-bg-soft: #f8f8f8;      /* Gris muy claro para secciones alternas */
  --color-bg-dark: #111111;      /* Negro profundo para navbar y footer */
  --color-text: #2d2d2d;         /* Gris oscuro */
  --color-text-light: #6b7280;   /* Gris medio para descripciones */
  --color-text-white: #ffffff;   /* Blanco para textos sobre fondos oscuros */
  --color-border: #e5e7eb;
  --color-success: #10b981;
}
```

### Cómo se aplican los colores
- **Navbar:** Fondo negro `#111111`, logo visible, links en blanco, línea inferior dorada
- **Botones principales:** Fondo dorado `#F5C800`, texto negro
- **Botones secundarios:** Fondo negro, texto blanco, borde dorado al hacer hover
- **Títulos de sección:** Negro con línea decorativa dorada debajo
- **Cards:** Fondo blanco, borde superior dorado, sombra suave
- **Barra de promoción:** Fondo dorado, texto negro
- **Secciones alternas:** Blanco y gris suave `#f8f8f8`
- **Footer:** Fondo negro `#111111`, texto blanco, detalles dorados

### Tipografía
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

--font-heading: 'Montserrat', sans-serif;
--font-body: 'Open Sans', sans-serif;
```

### Estilo general
- **Minimalista premium** — elegante, sin saturar
- Animaciones suaves al hacer scroll (AOS.js)
- Mucho espacio en blanco
- Sombras suaves: `box-shadow: 0 4px 20px rgba(0,0,0,0.08)`
- Bordes redondeados: `border-radius: 8px`
- Líneas y acentos dorados como elemento decorativo consistente

---

## 🏠 HERO — SECCIÓN DE INICIO (MUY IMPORTANTE)

El hero es lo primero que ve el visitante. Tiene que impactar en los primeros 3 segundos.

### Imagen de fondo
Usar una imagen de Unsplash (gratuita, sin derechos) de alta calidad que transmita:
- Elegancia y modernidad
- Salud visual / cuidado personal
- Personas con lentes o óptica moderna

**URL recomendada (Unsplash — gratuita y rápida):**
```html
<!-- Imagen optimizada directamente desde Unsplash CDN — no pesa, carga rápido -->
<img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1400&q=80&auto=format&fit=crop"
     alt="Óptica Visual Point Panamá — Cuida tu visión"
     loading="lazy">

<!-- Alternativa: persona con lentes moderna -->
<img src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1400&q=80&auto=format&fit=crop"
     alt="Lentes modernos Visual Point Panamá"
     loading="lazy">
```

### Técnica para velocidad sin sacrificar impacto visual
```css
.hero {
  /* Overlay negro semitransparente sobre la imagen para que el texto se lea bien */
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(17, 17, 17, 0.60) 50%,
    rgba(245, 200, 0, 0.15) 100%
  );
  min-height: 100vh;           /* Pantalla completa en escritorio */
  min-height: 85vh;            /* Un poco menos en móvil */
}

/* Imagen como background-image en CSS para mejor control */
.hero-bg {
  background-image: url('https://images.unsplash.com/photo-1577803645773-f96470509666?w=1400&q=80&auto=format');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efecto parallax suave en escritorio */
}
```

### Contenido del hero
```
[LOGO pequeño o solo nombre si ya está en navbar]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Tu visión merece lo mejor.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tecnología de punta en cristales, aros para todos los estilos
y exámenes visuales profesionales. 8 sucursales en Panamá.

[Botón dorado: "Encuentra tu sucursal →"]   [Botón outline: "Ver servicios"]

▼ Scroll indicator animado
```

### Efecto visual especial para el título
- El título aparece con una animación de entrada suave (fade + slide up)
- Una línea dorada `#F5C800` decorativa debajo del título principal
- Texto en blanco puro con sombra suave para legibilidad sobre cualquier imagen
- En móvil: texto más pequeño, botones apilados verticalmente, sin parallax

---

## 🎁 PROMOCIÓN VIGENTE

### Texto oficial de la promoción:
> **"Lleva tus cristales y te regalamos los aros. Así de simple."**

### Dónde aparece:
1. **Barra superior** (sobre el navbar, fondo dorado, en todas las páginas):
   ```
   🎁  Lleva tus cristales y te regalamos los aros. Así de simple.  [Quiero mis aros →]
   ```

2. **Sección destacada en index.html** (después de servicios):
   - Fondo negro con detalles dorados
   - Texto grande y llamativo
   - Botón dorado: **"Quiero mis aros gratis →"** → lleva a contacto/WhatsApp

### Lo que NO hacer con la promoción:
- No poner texto adicional ni condiciones inventadas
- No cambiar el mensaje — es el texto oficial aprobado
- Mantenerla visible y destacada, no enterrarla al final

---

## 📄 PÁGINAS Y ESTRUCTURA

### 1. `index.html` — Inicio
- **Barra de promoción dorada** (arriba de todo)
- **Navbar:** Logo + menú
- **Hero:** Pantalla completa, imagen impactante, texto animado, 2 botones
- **Servicios destacados:** 3 tarjetas — Exámenes Visuales, Tecnología en Cristales, Productos
- **Sección promoción:** "Lleva tus cristales y te regalamos los aros. Así de simple." con botón dorado
- **Por qué elegirnos:** 8 sucursales, tecnología, atención personalizada (números animados)
- **Categorías de productos:** Aros Oftálmicos, Aros de Sol, Lentes de Contacto, Accesorios
- **Tecnologías en cristales:** Grid visual con las principales tecnologías
- **Newsletter:** Sección de suscripción — "Recibe sorpresas, lanzamientos y mucho más"
- **CTA final:** Fondo negro, botón dorado "Encuéntranos", botón WhatsApp
- **Footer completo**

### 2. `servicios.html` — Servicios y Tecnologías
- **Hero de página** (más pequeño que el inicio, con imagen relacionada)
- **Exámenes visuales:** Descripción y equipos
- **Tecnologías en cristales:**
  - Antirreflejo
  - Fotocromáticos
  - Transitions (marca — sección propia destacada)
  - Progresivos / Multifocal
  - Blue Cut (filtro luz azul)
  - Cristales de alta definición
  - Sección expandible para agregar más
- **Montaje y reparación**

### 3. `productos.html` — Catálogo
- **Hero con banner de promoción**
- Filtros por categoría
- Aros Oftálmicos / Aros de Sol / Lentes de Contacto / Accesorios
- Cards con foto, nombre, botón "Consultar"
- Placeholders hasta tener fotos reales

**⚠️ Estado: construida pero despublicada temporalmente (2026-08-13).** El archivo existe y funciona (filtros probados), pero se quitó a propósito del navbar, del menú móvil y del footer de todas las páginas, y la tarjeta "Aros y Lentes para Ti" del home ahora enlaza a WhatsApp en vez de a esta página. Es intencional: el usuario aún no tiene suficiente material real de producto para publicarla. No reagregar los enlaces hasta que el usuario lo pida explícitamente.

### 4. `nosotros.html` — Sobre Nosotros
- Historia de Visual Point Panamá
- Misión, visión y valores
- Números animados: 8 sucursales, años, clientes
- Equipo (estructura lista, fotos pendientes)

### 5. `sucursales.html` — Nuestras 8 Sucursales
- Hero de página
- Mapa Google Maps con los 8 puntos
- Grid de cards con datos completos
- 1 columna móvil / 2 tablet / 4 escritorio

### 6. `contacto.html` — Contacto
- Formulario completo
- Datos de contacto
- Mapa embebido
- Redes sociales

---

## 📍 DATOS COMPLETOS DE LAS 8 SUCURSALES

```javascript
const sucursales = [
  {
    nombre: "Súpercentro El Dorado",
    descripcion: "Piso 1, frente a las escaleras mecánicas del cine. Sector nuevo",
    horario: {
      lunesASabado: "10:00 a.m - 7:00 p.m",
      domingos: "11:00 a.m - 6:00 p.m"
    },
    whatsapp: "50760482000"
  },
  {
    nombre: "Altaplaza Mall",
    descripcion: "Planta baja, entre Swarovski y Félix.",
    horario: {
      lunesASabado: "11:00 a.m - 8:00 p.m",
      domingosFeriados: "11:00 a.m - 7:00 p.m"
    },
    whatsapp: "50760482000"
  },
  {
    nombre: "Albrook Mall — Pasillo Central",
    descripcion: "Pasillo central, frente a Zara planta superior.",
    horario: {
      lunesASabado: "10:00 a.m - 7:00 p.m",
      domingosFeriados: "11:00 a.m - 6:00 p.m"
    },
    whatsapp: "50760482000"  // Número central único (pendiente: usuario confirmará número definitivo)
  },
  {
    nombre: "Los Pueblos",
    descripcion: "Estamos entre el Súper 99 y Credichips.",
    horario: {
      lunesASabado: "9:00 a.m - 6:00 p.m",
      domingos: "Cerrado"
    },
    whatsapp: "50760482000"
  },
  {
    nombre: "Costa Verde",
    descripcion: "Entre Do It y Banco General",
    horario: {
      lunesASabado: "9:30 a.m - 7:00 p.m",
      domingosFeriados: "Cerrado"
    },
    whatsapp: "50760482000"
  },
  {
    nombre: "Los Andes",
    descripcion: "Frente a la salida de la estación del metro",
    horario: {
      lunesASabado: "9:30 a.m - 6:00 p.m",
      domingos: "Cerrado"
    },
    whatsapp: "50760482000"
  },
  {
    nombre: "David, Chiriquí",
    descripcion: "Calle José Linton Navarro, al lado del Hotel Ciudad de David, frente a plaza Oteima.",
    horario: {
      lunesAViernes: "9:00 a.m - 6:00 p.m",
      sabado: "9:00 a.m - 3:00 p.m",
      domingo: "Cerrado"
    },
    whatsapp: "50760482000"
  },
  {
    nombre: "Albrook Mall — Pasillo del Dinosaurio",
    descripcion: "Estamos por el pasillo Dinosaurio.",
    horario: {
      lunesASabado: "10:00 a.m - 7:00 p.m",
      domingosFeriados: "11:00 a.m - 6:00 p.m"
    },
    whatsapp: "50760482000"
  }
];
```

**⚠️ Nota:** Albrook Mall tiene DOS sucursales distintas. Mostrarlas separadas y claramente diferenciadas.

---

## 🔘 COMPONENTES GLOBALES

### Barra de promoción (encima del navbar, en todas las páginas)
```html
<div class="promo-bar">
  🎁 Lleva tus cristales y te regalamos los aros. Así de simple.
  <a href="contacto.html" class="promo-link">Quiero mis aros →</a>
</div>
```
- Fondo dorado `#F5C800`, texto negro, altura pequeña (~40px)

### Botón WhatsApp flotante (en todas las páginas)
```html
<a href="https://wa.me/50760482000?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios"
   target="_blank" class="whatsapp-float">
  <i class="fab fa-whatsapp"></i>
</a>
```

### Footer
- Logo + descripción breve
- Links de navegación
- Lista de servicios
- Contacto completo
- Newsletter: campo email + botón "Suscribirme"
- Métodos de pago: Visa, MasterCard, AmEx, Diners, Discover, China Union Pay, JCB, PayPal
- Redes: Instagram + Facebook
- Copyright: © 2025 Visual Point Panamá

---

## 📁 ESTRUCTURA DE CARPETAS

```
vpp/
│
├── index.html
├── servicios.html
├── productos.html
├── nosotros.html
├── sucursales.html
├── contacto.html
├── CLAUDE.md
│
├── css/
│   ├── styles.css
│   ├── components.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── sucursales.js
│   └── menu.js
│
└── images/
    ├── logo/
    ├── hero/
    ├── servicios/
    ├── productos/
    ├── sucursales/
    └── icons/
```

---

## 🔧 TECNOLOGÍAS

| Tecnología | Para qué |
|---|---|
| HTML5 semántico | Estructura SEO |
| CSS3 con variables | Estilos y responsive |
| JavaScript ES6+ | Interactividad |
| AOS.js (CDN) | Animaciones al scroll |
| Google Fonts (CDN) | Montserrat + Open Sans |
| Font Awesome 6 (CDN) | Íconos |
| Unsplash CDN | Imágenes hero optimizadas y gratuitas |
| Google Maps Embed | Mapa de sucursales |

---

## 🔍 SEO

**Estado (2026-09-07):** `robots.txt` y `sitemap.xml` en la raíz. Todas las páginas públicas tienen `<link rel="canonical">` apuntando a `https://visualpointopticas.com/...`. `productos.html` (despublicada) y `presentacion-vpp.html` (deck de ventas interno) están en `noindex` y excluidas del sitemap y de `robots.txt`. `sucursales.html` tiene un `@graph` de JSON-LD con las 8 sucursales individuales (horarios estructurados) además del `Optician` general — clave para búsquedas locales tipo "óptica cerca de mí" en Panamá. Meta descriptions ajustadas a ~150-156 caracteres.

**Pendiente fuera del código (decisivo para el posicionamiento local):** crear/reclamar un Perfil de Negocio de Google (Google Business Profile) por cada una de las 8 sucursales, con dirección exacta, categoría, fotos y reseñas — esto pesa más que el schema on-page para aparecer en el "local pack" de Google en Panamá.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="DESCRIPCIÓN ÚNICA — máximo 160 caracteres">
<meta name="keywords" content="óptica panamá, lentes, aros oftálmicos, examen visual, visual point panamá">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="TÍTULO | Ópticas Visual Point Panamá">
<meta property="og:description" content="DESCRIPCIÓN">
<meta property="og:image" content="images/hero/og-image.jpg">
<meta property="og:url" content="https://visualpointopticas.com">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ópticas Visual Point Panamá",
  "description": "Cadena de ópticas en Panamá con 8 sucursales. Exámenes visuales, tecnología en cristales, aros oftálmicos y de sol, lentes de contacto.",
  "url": "https://visualpointopticas.com",
  "telephone": "+50760482000",
  "email": "visualpointpanama@gmail.com",
  "numberOfLocations": 8,
  "address": { "@type": "PostalAddress", "addressCountry": "PA" },
  "sameAs": [
    "https://www.instagram.com/visualpointpanama",
    "https://www.facebook.com/VisualPointGroup"
  ]
}
</script>
<title>TÍTULO | Ópticas Visual Point Panamá</title>
```

---

## 📞 CONTACTO

```
Email:            visualpointpanama@gmail.com
Teléfono 1:       +507 6048 2000
Teléfono 2:       +507 6040 2663
WhatsApp:         +507 6048 2000 (número central único para todas las sucursales, incluido Albrook — pendiente confirmar número definitivo)
Instagram:        @visualpointpanama
Facebook:         VisualPointGroup
```

---

## 🚫 LO QUE NO HACER

- No cambiar el texto de la promoción
- No usar frameworks pesados
- No olvidar el WhatsApp flotante en ninguna página
- No descuidar móvil
- No confundir las dos sucursales de Albrook
- No usar colores fuera de la paleta negro/dorado

---

## ✅ CHECKLIST FINAL

- [ ] Barra de promoción en todas las páginas
- [ ] Hero impactante con imagen Unsplash optimizada
- [ ] Mobile first en todo
- [ ] Navbar hamburguesa en móvil
- [ ] WhatsApp flotante en todas las páginas
- [ ] 8 sucursales con datos correctos
- [ ] Albrook diferenciado en 2 locales
- [ ] SEO completo en todas las páginas
- [ ] Schema markup en index.html
- [ ] Logo nítido
- [ ] Negro y dorado consistentes
- [ ] Mapa de sucursales funciona
- [ ] Formulario funciona
- [ ] Newsletter funciona
- [ ] Métodos de pago en footer
- [ ] Imágenes optimizadas
- [ ] Subido a GitHub: vpp
- [ ] Probado en Chrome, Safari, Firefox
- [ ] Probado en Android e iPhone

---

## 📝 NOTAS FINALES

- **Logo:** `Logo-Visual-Point-Y-300x104.png` — fondo transparente
- **Colores:** Negro `#1a1a1a` + Dorado `#F5C800` — toda la página gira aquí
- **Promoción:** "Lleva tus cristales y te regalamos los aros. Así de simple." — no modificar
- **Hero:** Usar imágenes de Unsplash CDN — gratuitas, rápidas, sin derechos
- **Transitions:** Marca específica de cristales — darle sección propia
- Fotos reales de sucursales llegarán después — dejar estructura lista
- Más tecnologías en cristales por confirmar — sección expandible
- Deploy al dominio: coordinar con quien maneja el dominio en la empresa

---

*Proyecto Visual Point Panamá | Repositorio: vpp | Desarrollador: Robert Castro | 2025*
