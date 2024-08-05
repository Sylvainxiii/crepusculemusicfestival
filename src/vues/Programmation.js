import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";

const Programmation = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilProgrammation = "titre-accueil-programmation";
    const titreAccueilProgrammation = "PROGRAMMATION";

    const accueilProgrammation = AccueilContainer(idTitreAccueilProgrammation, titreAccueilProgrammation);
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.classList.add("flex-column", "start")
    app.appendChild(accueilProgrammation);


    return app;
};

export default Programmation;