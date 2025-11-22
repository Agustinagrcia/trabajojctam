/**
 * Lógica del menú de hamburguesa y el carrusel de imágenes.
 */
document.addEventListener('DOMContentLoaded', () => {
    // =======================================================
    // 1. LÓGICA DEL MENÚ HAMBURGUESA
    // =======================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Si no encuentra los elementos, no intenta añadir el listener
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // DEBUG: Comprobación de que el clic funciona
            console.log('☰ Botón de menú clicado. Abriendo/cerrando.');

            // Verifica el estado actual y lo invierte
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Alterna la clase para el despliegue visual (definida en styles.css)
            mobileNav.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open'); 
        });

        // Cierra el menú móvil al hacer clic en un enlace (para navegación interna)
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    } else {
        console.error('ERROR: No se encontraron los elementos .menu-toggle o .mobile-nav. Revisar HTML y selectores.');
    }

    // =======================================================
    // 2. LÓGICA DEL CARRUSEL
    // =======================================================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Solo ejecuta la lógica del carrusel si hay slides
    if (totalSlides > 0) {
        let currentSlide = 0;
        const intervalTime = 5000; // 5 segundos

        function updateCarousel() {
            slides.forEach((slide, index) => {
                // Elimina clases en todos
                slide.classList.remove('active-slide');
                dots[index].classList.remove('active-dot');
                
                // Añade clases al slide y dot actual
                if (index === currentSlide) {
                    slide.classList.add('active-slide');
                    dots[index].classList.add('active-dot');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        // Navegación manual por puntos (dots)
        dots.forEach(dot => {
            dot.addEventListener('click', (event) => {
                currentSlide = parseInt(event.target.dataset.slide);
                updateCarousel();
                // Reinicia el temporizador si el usuario interactúa
                resetInterval();
            });
        });

        // Control del temporizador de autoplay
        let slideInterval = setInterval(nextSlide, intervalTime);

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        // Estado inicial
        updateCarousel();
    }
});