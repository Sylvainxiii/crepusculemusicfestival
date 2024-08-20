import "./AccueilInfo.css";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer";
import Bouton from "/src/components/Bouton/Bouton";
import { crepuscule } from "/data/crepuscule2025.json";

const AccueilInfo = () => {

    const idtitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = crepuscule["titre"];
    const titreh2 = crepuscule["titreh2"];
    const texte = crepuscule["texte"];
    const bouton = crepuscule["bouton"];
    const path = crepuscule["path"];

    const fragment = document.createDocumentFragment();
    const accrocheAccueilInfo = document.createElement('div');
    accrocheAccueilInfo.id = "accroche-accueil-info";
    accrocheAccueilInfo.innerText = titreh2;
    fragment.appendChild(accrocheAccueilInfo);

    const texteAccueilInfo = document.createElement('div');
    texteAccueilInfo.id = "texte-accueil-info";
    texteAccueilInfo.innerText = texte;
    fragment.appendChild(texteAccueilInfo);

    const boutonAccueilInfo = Bouton(bouton, path);
    fragment.appendChild(boutonAccueilInfo);

    const accueilInfo = AccueilContainer(idtitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "center");
    accueilInfo.appendChild(fragment);

    return accueilInfo;
}

export default AccueilInfo;