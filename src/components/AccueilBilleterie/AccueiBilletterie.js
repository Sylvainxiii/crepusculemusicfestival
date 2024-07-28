import "./AccueilBilletterie.css";
import AccueilContainer from "../AccueilContainer/AccueilContainer.js";

const AccueilBilletterie = () => {

    const idTitreAccueilBilletterie = "titre-accueil-billetterie";
    const titreAccueilBilletterie = "BILLETTERIE";

    const accueilBilletterie = AccueilContainer(idTitreAccueilBilletterie, titreAccueilBilletterie);
    accueilBilletterie.id = "accueil-billetterie";
    accueilBilletterie.classList.add("flex-column", "start")

    return accueilBilletterie;
}

export default AccueilBilletterie;