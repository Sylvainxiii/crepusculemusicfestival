import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { crepuscule } from "/data/crepuscule2025.json";

const Crepuscule = (app) => {

    const idtitreAccueilInfo = "titre-info";
    const titreAccueilInfo = crepuscule["titre"];

    const fragment = document.createDocumentFragment();
    const accueilInfo = AccueilContainer(idtitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "info";
    accueilInfo.classList.add("flex-column", "center")
    fragment.appendChild(accueilInfo);

    app.appendChild(fragment);

    return app;
};

export default Crepuscule;