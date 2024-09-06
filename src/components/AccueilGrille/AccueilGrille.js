
import AccueilProgrammation from "/src/components/AccueilProgrammation/AccueilProgrammation.js";

import "./AccueilGrille.css";

const AccueilGrille = () => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(AccueilProgrammation());

    const accueilGrille = document.createElement('div');
    accueilGrille.id = "grille-accueil";
    accueilGrille.classList.add("flex-column", "start");
    accueilGrille.appendChild(fragment);

    return accueilGrille;
}

export default AccueilGrille;