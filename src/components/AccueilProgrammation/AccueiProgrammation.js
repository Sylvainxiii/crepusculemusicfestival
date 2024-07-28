import "./AccueilProgrammation.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";

const AccueilProgrammation = () => {
    const idtitreAccueilProgrammation = "titre-accueil-programmation";
    const titreAccueilProgrammation = "PROGRAMMATION";

    const accueilProgrammation = AccueilContainer(idtitreAccueilProgrammation, titreAccueilProgrammation);
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.classList.add("flex-column", "start")


    return accueilProgrammation;
}

export default AccueilProgrammation;