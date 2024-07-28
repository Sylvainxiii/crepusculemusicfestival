import "./VueTitre.css";

const VueTitre = (titre) => {
    const vueTitre = document.createElement('div');
    vueTitre.classList.add("titre-container", "relative");

    const texteVueTitre = document.createElement('h1');
    texteVueTitre.textContent = titre;
    vueTitre.appendChild(texteVueTitre);

    return vueTitre;
}

export default VueTitre;