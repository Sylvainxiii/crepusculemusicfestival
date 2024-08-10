import "./Bouton.css";

const Bouton = (texte, path) => {

    const bouton = document.createElement('div');
    bouton.classList.add("bouton", "relative", "inline-block");

    for (let i = 0; i < 4; i = i + 1) {
        const spanBouton = document.createElement('span');
        spanBouton.classList.add("absolute", "block");
        bouton.appendChild(spanBouton);
    }

    const textBouton = document.createElement('div');
    const lienBouton = document.createElement('a');
    lienBouton.textContent = texte;
    lienBouton.href = path;
    textBouton.appendChild(lienBouton);
    bouton.appendChild(textBouton);

    return bouton
}

export default Bouton;