// Toggle 
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-sticky');
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const isExpanded = menu.classList.contains('hidden');
        toggleButton.setAttribute('aria-expanded', !isExpanded);
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay:{
  
      delay:3000,
      disableOnInteraction:false,
    }
  
  });