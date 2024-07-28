import "./AccueilPartenaires.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";

const AccueilPartenaires = () => {
    const idtitreAccueilPartenaires = "titre-accueil-partenaires";
    const titreAccueilPartenaires = "PARTENAIRES";

    const accueilPartenaires = AccueilContainer(idtitreAccueilPartenaires, titreAccueilPartenaires);
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start")



    return accueilPartenaires;
}

export default AccueilPartenaires;