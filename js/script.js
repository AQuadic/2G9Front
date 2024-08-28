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