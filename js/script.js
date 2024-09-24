// Load Navbar 
document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            const menuToggle = document.getElementById('menu-toggle');
            const menuItems = document.getElementById('navbar-sticky');
            menuToggle.addEventListener('click', function() {
                menuItems.classList.toggle('hidden');
                menuItems.setAttribute('aria-expanded', menuItems.classList.contains('hidden') ? 'false' : 'true');
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});

// Load Footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the footer:', error));
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

