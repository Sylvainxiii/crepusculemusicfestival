import "./AccueilInfo.css";
import Bouton from "/src/components/Bouton/Bouton";
import { crepuscule } from "/data/crepuscule2025.json";

const AccueilInfo = () => {

    const titreAccueilInfo = crepuscule["titre"];
    const titreh2 = crepuscule["titreh2"];
    const texteAccueilInfo = crepuscule["texte"];
    const boutonAccueilInfo = crepuscule["bouton"];
    const path = crepuscule["path"];

    const fragment = document.createDocumentFragment();

    const titre = document.createElement('h1');
    titre.id = "titre-accueil-info";
    titre.innerText = titreAccueilInfo;
    fragment.appendChild(titre);

    const titreH2 = document.createElement('h2');
    titreH2.id = "titreh2-accueil-info";
    titreH2.innerText = titreh2;
    fragment.appendChild(titreH2);

    const texte = document.createElement('div');
    texte.id = "texte-accueil-info";
    texte.innerText = texteAccueilInfo;
    fragment.appendChild(texte);

    const bouton = Bouton(boutonAccueilInfo, path);
    fragment.appendChild(bouton);

    const accueilInfo = document.createElement("div");
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "center");
    accueilInfo.appendChild(fragment);

    return accueilInfo;
}

export default AccueilInfo;