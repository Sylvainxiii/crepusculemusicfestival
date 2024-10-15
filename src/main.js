import '/src/assets/styles/style.css'
import Background from './components/Background/Background';
import App from '/src/App.js';

document.body.appendChild(App());
document.body.appendChild(Background());

const app = document.querySelector('.app');

let lastScrollY = 0;
app.addEventListener('scroll', () => {
    const scrollY = app.scrollTop;
    const background = document.querySelector('.background');
    const windowHeight = window.innerHeight;

    // Obtenir le positionnement de la div par rapport à la fenêtre
    const backgroundRect = background.getBoundingClientRect();

    // Calculer la position du bas de la div par rapport à la fenêtre
    const backgroundBottom = backgroundRect.bottom;
    const backgroundTop = backgroundRect.top;

    // Détecter le sens du défilement
    let direction = (scrollY > lastScrollY) ? 'down' : 'up';


    // Si le bas de l'élément est encore au-dessous du bas de la fenêtre, continue de bouger
    if (backgroundBottom - 20 > windowHeight) {
        background.style.top = (-scrollY / 3) + 'px';
    } else if (direction === 'up') {
        console.log(scrollY);
        console.log(backgroundTop);
        if (-scrollY >= backgroundTop * 3) {
            background.style.top = (-scrollY / 3) + 'px';
        }
    }

    // Mettre à jour la position précédente de défilement
    lastScrollY = scrollY;

})