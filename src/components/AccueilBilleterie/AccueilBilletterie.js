import "./AccueilBilletterie.css";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import Bouton from "/src/components/Bouton/Bouton";
import { billetterie, info } from "/data/crepuscule2025.json";
const dates = info["dates"];

const AccueilBilletterie = () => {

    const titreAccueilBilletterie = billetterie["titre"];
    const designation = billetterie["designation"];
    const prix = billetterie["prix"];
    const bouton = billetterie["bouton"];
    const path = billetterie["path"];

    const fragment = document.createDocumentFragment();

    const titre = document.createElement('h1');
    titre.id = "titre-accueil-billetterie";
    titre.innerText = titreAccueilBilletterie;
    fragment.appendChild(titre);

    const grilleBilletterie = document.createElement('div');
    grilleBilletterie.id = "grille-billetterie";
    fragment.appendChild(grilleBilletterie);

    const grilleCellule1 = document.createElement('div');
    grilleCellule1.id = "cellule-1-billetterie";
    grilleCellule1.textContent = designation;
    grilleBilletterie.appendChild(grilleCellule1);

    const grilleCellule2 = document.createElement('div');
    grilleCellule2.id = "cellule-2-billetterie";
    grilleCellule2.textContent = dates;
    grilleBilletterie.appendChild(grilleCellule2);

    const grilleCellule3 = document.createElement('div');
    grilleCellule3.id = "cellule-3-billetterie";
    grilleCellule3.textContent = prix;
    grilleBilletterie.appendChild(grilleCellule3);

    const boutonBilletterie = Bouton(bouton, path);
    fragment.appendChild(boutonBilletterie);

    const accueilBilletterie = document.createElement("div");
    accueilBilletterie.id = "accueil-billetterie";
    accueilBilletterie.classList.add("flex-column", "space-between");
    accueilBilletterie.appendChild(fragment);

    return accueilBilletterie;
}

export default AccueilBilletterie;