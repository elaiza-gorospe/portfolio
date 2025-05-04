const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

const canvas = document.getElementById('make-me-cool');

const settings = {
    colors: ['#111111', '#4a4a4a', '#c3c3c3'],
    triangleSize: 77,
    bleed: 150,
    noise: -73,
};

ThpaceGL.create(canvas, settings);
           