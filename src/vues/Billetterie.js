import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Billetterie = (app) => {

    const idTitreAccueilBilletterie = "titre-accueil-billetterie";
    const titreAccueilBilletterie = "BILLETTERIE";

    const accueilBilletterie = AccueilContainer(idTitreAccueilBilletterie, titreAccueilBilletterie);
    accueilBilletterie.id = "accueil-billetterie";
    accueilBilletterie.classList.add("flex-column", "start")
    app.appendChild(accueilBilletterie);

    return app;
};

export default Billetterie;