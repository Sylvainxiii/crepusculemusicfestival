import AccueilInfo from "/src/components/AccueilInfo/AccueilInfo.js";
import AccueilBilletterie from "/src/components/AccueilBilleterie/AccueilBilletterie.js";
import AccueilPartenaires from "/src/components/AccueilPartenaire/AccueilPartenaires.js";
import AccueilProgrammation from "/src/components/AccueilProgrammation/AccueilProgrammation.js";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import "./AccueilGrille.css";

const AccueilGrille = () => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(AccueilInfo());
    fragment.appendChild(AccueilBilletterie());
    fragment.appendChild(AccueilProgrammation());

    const containerVide = AccueilContainer("", "");
    containerVide.id = "container-vide";
    containerVide.classList.add("flex-column", "center");
    fragment.appendChild(containerVide);

    fragment.appendChild(AccueilPartenaires());

    const accueilGrille = document.createElement('div');
    accueilGrille.id = "grille-accueil";
    accueilGrille.classList.add("flex-column", "start");
    accueilGrille.appendChild(fragment);

    return accueilGrille;
}

export default AccueilGrille;