// JavaScript/scroll-animations.js

// 1. Inicializar ScrollReveal
const sr = ScrollReveal({
    distance: '70px',
    duration: 1200, 
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: false, 
    viewFactor: 0.15
});

// =======================================================
// 2. Definir las Animaciones por SECCIÓN
// =======================================================

// A. ANIMACIÓN INICIAL DEL HEADER (NUEVO REQUERIMIENTO)
sr.reveal('.main-header', { 
    origin: 'top',
    distance: '10px', 
    duration: 800,
    delay: 100, // Retraso de 0.1s para que se note la transición
    viewFactor: 1.0 // Se activa inmediatamente
});

// B. ANIMACIÓN DEL HERO (Ajuste Final: Aparece a los 3s y queda fijo)

// 1. ANIMACIÓN DEL CONTENEDOR ELIMINADA (para que no se "vaya")

// 2. Revela el contenido PRINCIPAL (h1, p, a) de forma secuencial.
sr.reveal('.hero-content > *', { 
    origin: 'bottom',
    distance: '20px', 
    delay: 200, // Aparece 3 segundos después de la carga.
    interval: 100, 
    viewFactor: 1.0 
});


// C. Efecto para la sección EMPRESA (FIX: "sube antes de que deslice")
sr.reveal('.section-empresa h2', { 
    origin: 'bottom',
    delay: 300, 
    viewFactor: 0.75 
});
sr.reveal('.section-empresa p', { 
    origin: 'bottom', 
    delay: 500,
    viewFactor: 0.75 
});

// D. Efecto para la sección SERVICIOS
sr.reveal('.section-servicios h2', { 
    origin: 'bottom',
    delay: 200 
});
sr.reveal('.service-intro-text', { 
    origin: 'bottom', 
    delay: 400 
});

// Animación escalonada para las tarjetas de servicio
sr.reveal('.service-card', { 
    origin: 'bottom', 
    interval: 150,
    scale: 0.9 
});


// E. Efecto para la sección TRABAJOS
sr.reveal('.section-trabajos h2', { 
    origin: 'bottom',
    delay: 200 
});
// Animación para el carrusel de trabajos
sr.reveal('.carrusel-wrapper', {
    origin: 'bottom',
    delay: 400,
    distance: '30px'
});


// F. Efecto para el FOOTER (FIX: "el footer se traba")
sr.reveal('footer', { 
    origin: 'bottom', 
    distance: '30px', 
    delay: 200, 
    duration: 1000,
    reset: true 
});