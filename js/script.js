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


// Swap Buttons in Index
function filterCards(category) {
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(btn => {
if (btn.textContent.trim() === getButtonText(category)) {
    btn.classList.remove('bg-transparent', 'text-black', 'border-[#C10D10]');
    btn.classList.add('bg-[#C10D10]', 'text-white');
} else {
    btn.classList.remove('bg-[#C10D10]', 'text-white');
    btn.classList.add('bg-transparent', 'text-black', 'border-[#C10D10]');
}
});

cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
    } else {
        card.classList.add('hidden');
    }
});
}

function getButtonText(category) {
switch(category) {
    case 'all': return 'الكل';
    case 'ads': return 'أبرز الإعلانات التجارية';
    case 'personal': return 'أبرز الإعلانات الشخصية';
    default: return '';
}
}

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    initialSlide: 2,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
    autoplay: false,
    breakpoints: {
        640: {
            slidesPerView: 1, 
        },
        641: {
            slidesPerView: 3,
        },
    },
},
});
