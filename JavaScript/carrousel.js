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






/*carrusel trabajo */
document.addEventListener('DOMContentLoaded', () => {
    const galeria = document.querySelector('.carrusel-galeria');
    const flechaPrev = document.querySelector('.carrusel-flecha.prev');
    const flechaNext = document.querySelector('.carrusel-flecha.next');
    const items = document.querySelectorAll('.trabajo-item');
    
    let currentIndex = 0;
    const totalItems = items.length; // Si tienes 6 imágenes, totalItems será 6.
    
    // Si hay menos de 3 ítems (la vista mínima), no hacemos nada.
    // **NOTA:** Este valor de '3' debe coincidir con la cantidad visible en CSS.
    if (totalItems < 3) return; 

    // --- FUNCIÓN PRINCIPAL DE MOVIMIENTO ---

    const updateCarrusel = () => {
        // Obtenemos el ancho de un solo item
        const itemWidth = items[0].offsetWidth; 
        
        // Calculamos el desplazamiento: (el índice actual) * (el ancho de un item)
        const desplazamiento = currentIndex * itemWidth;
        
        // Aplica el desplazamiento suave (gracias a la transición CSS)
        galeria.style.transform = `translateX(-${desplazamiento}px)`;
    };

    // --- FUNCIONES DE NAVEGACIÓN (Bucle Infinito) ---

    const nextSlide = () => {
        // Bucle Adelante: Si es el último slide que se puede ver, vuelve al inicio.
        if (currentIndex < totalItems - 3) { 
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al primer slide
        }
        updateCarrusel();
    };

    const prevSlide = () => {
        // Bucle Atrás: Si es el primer slide (índice 0), va al último slide visible.
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // El último índice al que se puede mover es totalItems - 3
            currentIndex = totalItems - 3; 
        }
        updateCarrusel();
    };

    // --- EVENT LISTENERS (Flechas Manuales) ---

    flechaNext.addEventListener('click', nextSlide);
    flechaPrev.addEventListener('click', prevSlide);

    // ------------------------------------------------------------------
    // CLAVE: Se elimina la sección AUTOPLAY para que la navegación sea 
    //        exclusivamente manual al hacer click en las flechas.
    // ------------------------------------------------------------------
});