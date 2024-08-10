import "./AccueilInfo.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer";
import Bouton from "../Bouton/Bouton";
// import contenuTexteAccueilInfo from "/data/texteAccueilInfo.txt?raw";

const AccueilInfo = () => {
    const idtitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = "CREPUSCULE MUSIC FESTIVAL";

    const accueilInfo = AccueilContainer(idtitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "center");

    const accrocheAccueilInfo = document.createElement('div');
    accrocheAccueilInfo.id = "accroche-accueil-info";
    accrocheAccueilInfo.innerText = "Entrez dans l’irréel !";
    accueilInfo.appendChild(accrocheAccueilInfo);

    const texteAccueilInfo = document.createElement('div');
    texteAccueilInfo.id = "texte-accueil-info";
    texteAccueilInfo.innerText = "Le CRÉPUSCULE Music Festival offre une expérience visuelle unique à la frontière de l’imaginaire. Embarquez dans un show mêlant musique électronique, images et lumières transcendantes qui ne laisseront personnes indifférentes.";
    accueilInfo.appendChild(texteAccueilInfo);

    const boutonAccueilInfo = Bouton("En savoir plus", "/crepuscule/");
    // link.classList.add("btn", "navlink");
    // link.href = "/crepuscule/";
    // link.textContent = "En Savoir plus";
    accueilInfo.appendChild(boutonAccueilInfo);


    return accueilInfo;
}

export default AccueilInfo;