import "./AccueilInfo.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer";
import contenuTexteAccueilInfo from "/data/texteAccueilInfo.txt?raw";

const AccueilInfo = () => {
    const idtitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = "CREPUSCULE MUSIC FESTIVAL";

    const accueilInfo = AccueilContainer(idtitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "center");

    const texteAccueilInfo = document.createElement('div');
    texteAccueilInfo.id = "texte-accueil-info";
    texteAccueilInfo.innerText = contenuTexteAccueilInfo;

    accueilInfo.appendChild(texteAccueilInfo);

    return accueilInfo;
}

export default AccueilInfo;