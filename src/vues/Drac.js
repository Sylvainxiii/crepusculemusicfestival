import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";



const Drac = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilDrac = "titre-accueil-drac";
    const titreAccueilDrac = "DRAC";

    const accueilDrac = AccueilContainer(idTitreAccueilDrac, titreAccueilDrac);
    accueilDrac.id = "accueil-drac";
    accueilDrac.classList.add("flex-column", "start")
    app.appendChild(accueilDrac);


    return app;
};

export default Drac;