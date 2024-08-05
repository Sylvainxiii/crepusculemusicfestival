import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";

const Crepuscule = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idtitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = "CREPUSCULE MUSIC FESTIVAL";

    const accueilInfo = AccueilContainer(idtitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "center")
    app.appendChild(accueilInfo);

    return app;
};

export default Crepuscule;