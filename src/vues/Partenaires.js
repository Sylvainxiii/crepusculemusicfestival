import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";

const Partenaires = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilPartenaires = "titre-accueil-partenaires";
    const titreAccueilPartenaires = "PARTENAIRES";

    const accueilPartenaires = AccueilContainer(idTitreAccueilPartenaires, titreAccueilPartenaires);
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start")
    app.appendChild(accueilPartenaires);

    return app;
};

export default Partenaires;