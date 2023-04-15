let sky = document.getElementById('sky');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');

let hill = document.getElementById('hill');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    title.style.marginTop = value * 1 + 'px'
    subtitle.style.marginTop = value * 1 + 'px'
});