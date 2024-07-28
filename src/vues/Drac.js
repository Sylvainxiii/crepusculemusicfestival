import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { drac } from "/data/crepuscule2025.json";

const Drac = (app) => {

    const idTitreAccueilDrac = "titre-drac";
    const titreAccueilDrac = drac["titre"];

    const fragment = document.createDocumentFragment();
    const accueilDrac = AccueilContainer(idTitreAccueilDrac, titreAccueilDrac);
    accueilDrac.id = "drac";
    accueilDrac.classList.add("flex-column", "start")
    fragment.appendChild(accueilDrac);

    app.appendChild(fragment);

    return app;
};

export default Drac;