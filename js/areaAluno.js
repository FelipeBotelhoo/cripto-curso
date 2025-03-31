/* CONFIG MENU MOBILE  */

document.addEventListener('DOMContentLoaded', function() {
    const mobileButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = mobileButton.querySelector('svg:first-child');
    const menuIconClose = mobileButton.querySelector('svg:last-child');

    mobileButton.addEventListener('click', function() {
        const isExpanded = mobileMenu.classList.contains('hidden');
        
        mobileMenu.classList.toggle('hidden');
        

        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });
}); 
/* FIM CONFIG MENU MOBILE  */