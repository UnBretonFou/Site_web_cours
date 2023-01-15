const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-image');
const back = document.querySelector('.back-image');

const sFront = 150;
const SBack = 400;

parallax.addEventListener('mousemove', e => {
    //Get the x,y mouse coordinates
    const x = e.clientX;
    const y = e.clientY;
    front.style.transform = 'translate(${x / sFront} % ${y / sFront})';
}