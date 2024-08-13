import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";

const Programmation = (app) => {

    const idTitreAccueilProgrammation = "titre-accueil-programmation";
    const titreAccueilProgrammation = "PROGRAMMATION";

    const accueilProgrammation = AccueilContainer(idTitreAccueilProgrammation, titreAccueilProgrammation);
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.classList.add("flex-column", "start")
    app.appendChild(accueilProgrammation);


    return app;
};

export default Programmation;