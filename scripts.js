let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializar a primeira imagem
showSlide(currentSlide);
