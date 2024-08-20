import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";
import { info } from "/data/crepuscule2025.json";


const Info = (app) => {

    const idTitreAccueilInfo = "titre-info";
    const titreAccueilInfo = info["titre"];

    const fragment = document.createDocumentFragment();
    const accueilInfo = AccueilContainer(idTitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "info";
    accueilInfo.classList.add("flex-column", "start")
    fragment.appendChild(accueilInfo);

    app.appendChild(fragment);

    return app;
};

export default Info;