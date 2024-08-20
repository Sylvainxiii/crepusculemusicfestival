import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { billetterie } from "/data/crepuscule2025.json";

const Billetterie = (app) => {

    const idTitreAccueilBilletterie = "titre-billetterie";
    const titreAccueilBilletterie = billetterie["titre"];

    const fragment = document.createDocumentFragment();
    const accueilBilletterie = AccueilContainer(idTitreAccueilBilletterie, titreAccueilBilletterie);
    accueilBilletterie.id = "billetterie";
    accueilBilletterie.classList.add("flex-column", "start")
    fragment.appendChild(accueilBilletterie);

    app.appendChild(fragment);

    return app;
};

export default Billetterie;