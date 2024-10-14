import '/src/assets/styles/style.css'
import Background from './components/Background/Background';
import App from '/src/App.js';

document.body.appendChild(App());
document.body.appendChild(Background());

const app = document.querySelector('.app');

app.addEventListener('scroll', () => {
    const scrollY = app.scrollTop;
    const background = document.querySelector('.background');
    background.style.top = (-scrollY / 2) + 'px';

})