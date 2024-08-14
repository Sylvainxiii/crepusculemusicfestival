import "./AccueilProgrammation.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";
import artefact1 from "/src/assets/images/artefact1.jpg";
import artefact2 from "/src/assets/images/artefact2.jpg";
import artefact3 from "/src/assets/images/artefact3.jpg";
import artefact4 from "/src/assets/images/artefact4.jpg";

const AccueilProgrammation = () => {
    const idtitreAccueilProgrammation = "titre-accueil-programmation";
    const titreAccueilProgrammation = "PROGRAMMATION";
    const listeArtefacts = [artefact1, artefact2, artefact3, artefact4];

    const accueilProgrammation = AccueilContainer(idtitreAccueilProgrammation, titreAccueilProgrammation);
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.classList.add("flex-column", "start")

    const programmationContainer = document.createElement('div');
    programmationContainer.classList.add("flex-row", "center");
    accueilProgrammation.appendChild(programmationContainer);


    listeArtefacts.forEach(artefact => {
        const containerIconeArtefact = document.createElement('div');
        containerIconeArtefact.classList.add("container-artefact-accueil", "relative");
        const iconeArtefact = document.createElement('img');
        iconeArtefact.src = artefact;
        iconeArtefact.classList.add("artefact-accueil", "absolute");
        containerIconeArtefact.appendChild(iconeArtefact);
        programmationContainer.appendChild(containerIconeArtefact);
    })


    return accueilProgrammation;
}

export default AccueilProgrammation;