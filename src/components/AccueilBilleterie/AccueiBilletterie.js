import "./AccueilBilletterie.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";
import Bouton from "../Bouton/Bouton";

const AccueilBilletterie = () => {

    const idTitreAccueilBilletterie = "titre-accueil-billetterie";
    const titreAccueilBilletterie = "BILLETTERIE";

    const accueilBilletterie = AccueilContainer(idTitreAccueilBilletterie, titreAccueilBilletterie);
    accueilBilletterie.id = "accueil-billetterie";
    accueilBilletterie.classList.add("flex-column", "start");

    const grilleBilletterie = document.createElement('div');
    grilleBilletterie.id = "grille-billetterie";
    accueilBilletterie.appendChild(grilleBilletterie);

    const grilleCellule1 = document.createElement('div');
    grilleCellule1.id = "cellule-1-billetterie";
    grilleCellule1.textContent = "PASS CREPUSCULE MUSIC FESTIVAL";
    grilleBilletterie.appendChild(grilleCellule1);

    const grilleCellule2 = document.createElement('div');
    grilleCellule2.id = "cellule-2-billetterie";
    grilleCellule2.textContent = "8 mars 2025";
    grilleBilletterie.appendChild(grilleCellule2);


    const grilleCellule3 = document.createElement('div');
    grilleCellule3.id = "cellule-3-billetterie";
    grilleCellule3.textContent = "38€";
    grilleBilletterie.appendChild(grilleCellule3);

    const boutonBilletterie = Bouton("Acheter un billet", "/billetterie/");
    accueilBilletterie.appendChild(boutonBilletterie);

    return accueilBilletterie;
}

export default AccueilBilletterie;