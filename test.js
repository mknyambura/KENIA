'use sctrict'

// Navbar
const navbarOpenButton = document.querySelector('[data-nav-open]');
const navbarCloseButton  = document.querySelector('[data-nav-close]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navbarArray = [
    navbarOpenButton, 
    navbarCloseButton,
    navbar,
    overlay
];

for (const i = 0; i< navbarArray.length; i++){
    navbarArray[i].addEventListener('click', function(){
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('active');
    })
}