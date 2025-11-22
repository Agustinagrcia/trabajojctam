/*carrusel principal*/
        document.addEventListener('DOMContentLoaded', function () {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            let currentSlide = 0;
            const slideInterval = 5000;

            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active-slide'));
                dots.forEach(dot => dot.classList.remove('active-dot'));
                slides[index].classList.add('active-slide');
                dots[index].classList.add('active-dot');
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            let carouselTimer = setInterval(nextSlide, slideInterval);

            dots.forEach(dot => {
                dot.addEventListener('click', function () {
                    clearInterval(carouselTimer);
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    currentSlide = slideIndex;
                    showSlide(currentSlide);
                    carouselTimer = setInterval(nextSlide, slideInterval);
                });
            });

            showSlide(currentSlide);
        });




/*carrusel trabajo *//*carrusel trabajo */
document.addEventListener('DOMContentLoaded', () => {
    const galeria = document.querySelector('.carrusel-galeria');
    const flechaPrev = document.querySelector('.carrusel-flecha.prev');
    const flechaNext = document.querySelector('.carrusel-flecha.next');
    const items = document.querySelectorAll('.trabajo-item');
    
    let currentIndex = 0;
    const totalItems = items.length; 
    
    if (totalItems < 3) return; 

    // --- FUNCIÓN PRINCIPAL DE MOVIMIENTO (VERSIÓN DEFINITIVA) ---
    // Usamos offsetLeft para obtener el desplazamiento exacto del elemento,
    // eliminando errores de redondeo del cálculo manual (offsetWidth + 30).
    const updateCarrusel = () => {
        // Obtenemos el elemento que debe ser el primero visible.
        const itemAdesplazar = items[currentIndex];
        
        // offsetLeft da la posición X del elemento relativa a su contenedor padre (carrusel-galeria).
        // Esta posición ya incluye el ancho del ítem MÁS su margen izquierdo (15px) y 
        // el margen derecho de los ítems anteriores.
        const desplazamiento = itemAdesplazar.offsetLeft;
        
        // Aplicamos el desplazamiento, asegurando que el ítem[currentIndex] se mueva al borde izquierdo del carrusel-contenedor
        // (que tiene un padding de 15px, lo cual está bien porque el ítemAdesplazar tiene un margen izquierdo de 15px).
        galeria.style.transform = `translateX(-${desplazamiento}px)`;
    };

    // --- FUNCIONES DE NAVEGACIÓN (Bucle Infinito) ---

    const nextSlide = () => {
        // El último índice al que podemos desplazarnos para que aún se vean 3 ítems
        const maxIndex = totalItems - 3; 

        if (currentIndex < maxIndex) { 
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al inicio
        }
        updateCarrusel();
    };

    const prevSlide = () => {
        const maxIndex = totalItems - 3; 
        
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Ir al último slide visible
            currentIndex = maxIndex; 
        }
        updateCarrusel();
    };

    // --- EVENT LISTENERS (Flechas Manuales) ---

    flechaNext.addEventListener('click', nextSlide);
    flechaPrev.addEventListener('click', prevSlide);

    // Opcional: Recalcular en caso de redimensionamiento (responsive)
    // window.addEventListener('resize', updateCarrusel);

    // Inicializa la posición al cargar
    updateCarrusel();
});