import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Engagements = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilEngagements = "titre-accueil-engagements";
    const titreAccueilEngagements = "ENGAGEMENTS";

    const accueilEngagements = AccueilContainer(idTitreAccueilEngagements, titreAccueilEngagements);
    accueilEngagements.id = "accueil-engagements";
    accueilEngagements.classList.add("flex-column", "start")
    app.appendChild(accueilEngagements);


    return app;
};

export default Engagements;