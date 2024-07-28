import Banniere from "/src/components/Banniere/Banniere.js";
import AccueilGrille from "/src/components/AccueilGrille/AccueilGrille.js";

const Accueil = (app) => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(Banniere());
    fragment.appendChild(AccueilGrille());

    app.appendChild(fragment);

    return app;
};

export default Accueil;