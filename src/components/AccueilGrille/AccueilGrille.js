import AccueilInfo from "../AccueilInfo/AccueilInfo.js";
import AccueilBilletterie from "../AccueilBilleterie/AccueiBilletterie.js";
import AccueilPartenaires from "../AccueilPartenaire/AccueiPartenaires.js";
import AccueilProgrammation from "../AccueilProgrammation/AccueiProgrammation.js";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";
import "./AccueilGrille.css";

const AccueilGrille = () => {
    const accueilGrille = document.createElement('div');
    accueilGrille.id = "grille-accueil";
    accueilGrille.classList.add("flex-column", "start");

    accueilGrille.appendChild(AccueilInfo());
    accueilGrille.appendChild(AccueilBilletterie());
    accueilGrille.appendChild(AccueilProgrammation());

    const containerVide = AccueilContainer("", "");
    containerVide.id = "container-vide";
    containerVide.classList.add("flex-column", "center");
    accueilGrille.appendChild(containerVide);

    accueilGrille.appendChild(AccueilPartenaires());

    return accueilGrille;
}

export default AccueilGrille;