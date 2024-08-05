import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Info = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = "INFO";

    const accueilInfo = AccueilContainer(idTitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "start")
    app.appendChild(accueilInfo);


    return app;
};

export default Info;