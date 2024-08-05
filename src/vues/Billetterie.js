import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Billetterie = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilBilletterie = "titre-accueil-billetterie";
    const titreAccueilBilletterie = "BILLETTERIE";

    const accueilBilletterie = AccueilContainer(idTitreAccueilBilletterie, titreAccueilBilletterie);
    accueilBilletterie.id = "accueil-billetterie";
    accueilBilletterie.classList.add("flex-column", "start")
    app.appendChild(accueilBilletterie);

    return app;
};

export default Billetterie;