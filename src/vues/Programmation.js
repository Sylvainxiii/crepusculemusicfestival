import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { programmation } from "/data/crepuscule2025.json";

const Programmation = (app) => {

    const idTitreAccueilProgrammation = "titre-programmation";
    const titreAccueilProgrammation = programmation["titre"];

    const fragment = document.createDocumentFragment();
    const accueilProgrammation = AccueilContainer(idTitreAccueilProgrammation, titreAccueilProgrammation);
    accueilProgrammation.id = "programmation";
    accueilProgrammation.classList.add("flex-column", "start")
    fragment.appendChild(accueilProgrammation);

    app.appendChild(fragment);

    return app;
};

export default Programmation;