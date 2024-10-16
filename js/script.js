// Load Navbar 
document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            const menuToggle = document.getElementById('menu-toggle');
            const menuItems = document.getElementById('navbar-sticky');
            const sidebar = document.getElementById('sidebar');
            const closeSidebar = document.getElementById('close-sidebar');

            menuToggle.addEventListener('click', function() {
                sidebar.classList.toggle('hidden');
                sidebar.setAttribute('aria-expanded', sidebar.classList.contains('hidden') ? 'false' : 'true');
            });

            closeSidebar.addEventListener('click', function() {
                sidebar.classList.add('hidden');
                sidebar.setAttribute('aria-expanded', 'false');
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

// Load Icons Page
document.addEventListener("DOMContentLoaded", function() {
    fetch('icons.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('icons').innerHTML = data;
        })
        .catch(error => console.log('Error loading the icons:', error));
});


// Swap Buttons in Index
function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        if (btn.textContent.trim() === getButtonText(category)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
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

