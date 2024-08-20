import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { engagements } from "/data/crepuscule2025.json";

const Engagements = (app) => {

    const idTitreAccueilEngagements = "titre-engagements";
    const titreAccueilEngagements = engagements["titre"];

    const fragment = document.createDocumentFragment();
    const accueilEngagements = AccueilContainer(idTitreAccueilEngagements, titreAccueilEngagements);
    accueilEngagements.id = "engagements";
    accueilEngagements.classList.add("flex-column", "start")
    fragment.appendChild(accueilEngagements);

    app.appendChild(fragment);

    return app;
};

export default Engagements;