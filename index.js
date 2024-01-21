document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navItems = document.querySelector('.nav-item');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', function () {
        navItems.classList.toggle('show');
        navbar.classList.toggle('abcd');
    });
});
