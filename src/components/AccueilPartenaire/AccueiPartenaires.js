import "./AccueilPartenaires.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";
import logoPartenaire from "/src/assets/images/img-partenaire.webp"

const AccueilPartenaires = () => {
    const idtitreAccueilPartenaires = "titre-accueil-partenaires";
    const titreAccueilPartenaires = "PARTENAIRES";

    const accueilPartenaires = AccueilContainer(idtitreAccueilPartenaires, titreAccueilPartenaires);
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start")

    const grillePartenaire = document.createElement('div');
    grillePartenaire.id = "grille-partenaire";
    accueilPartenaires.appendChild(grillePartenaire);

    for (let i = 0; i < 8; i = i + 1) {
        const imgPartenaire = document.createElement('img');
        imgPartenaire.src = logoPartenaire;
        imgPartenaire.classList.add("logo-partenaire-accueil");
        grillePartenaire.appendChild(imgPartenaire);
    }


    return accueilPartenaires;
}

export default AccueilPartenaires;