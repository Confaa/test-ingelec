import anime from 'animejs/lib/anime.es.js';

// Función para ejecutar el fade-in cuando la página cargue
const fadeInPage = () => {
  document.body.style.visibility = 'visible';

  anime({
    targets: 'body',
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad',
  });
};

// Función para animar elementos cuando entran en el viewport
const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const animation = target.dataset.animation;

      switch (animation) {
        case 'fadeIn':
          anime({
            targets: target,
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuad',
          });
          break;
        // Puedes agregar más casos para diferentes tipos de animaciones
      }

      observer.unobserve(target);
    }
  });
};

// Configurar el Intersection Observer
const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    threshold: 0.1,
  });

  document.querySelectorAll('[data-animation]').forEach((el) => {
    observer.observe(el);
  });
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
});

// Ejecutar la animación de fade-in cuando la página esté completamente cargada
window.addEventListener('load', fadeInPage);
