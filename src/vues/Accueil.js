import Banniere from "/src/components/Banniere/Banniere.js";
import AccueilGrille from "/src/components/AccueilGrille/AccueilGrille.js";
import AccueilInfo from "../components/AccueilInfo/AccueilInfo";

const Accueil = (app) => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(Banniere());
    fragment.appendChild(AccueilInfo());
    fragment.appendChild(AccueilGrille());

    app.appendChild(fragment);

    return app;
};

export default Accueil;