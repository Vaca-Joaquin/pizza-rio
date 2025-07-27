// Animación de aparición para las cards del menú
function animateMenuCards() {
  const cards = document.querySelectorAll('.menu-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 200 + i * 120);
  });
}

// Animación de aparición para testimonios
function animateOpinions() {
  const opinions = document.querySelectorAll('.opinion');
  opinions.forEach((op, i) => {
    op.style.opacity = 0;
    op.style.transform = 'scale(0.95)';
    setTimeout(() => {
      op.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
      op.style.opacity = 1;
      op.style.transform = 'scale(1)';
    }, 400 + i * 180);
  });
}

// Smooth scroll para los links de menú
function enableSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  animateMenuCards();
  animateOpinions();
  enableSmoothScroll();
});
