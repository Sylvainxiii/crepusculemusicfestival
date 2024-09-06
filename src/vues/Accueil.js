import Banniere from "/src/components/Banniere/Banniere.js";
import AccueilGrille from "/src/components/AccueilGrille/AccueilGrille.js";
import AccueilInfo from "/src/components/AccueilInfo/AccueilInfo";
import AccueilBilletterie from "/src/components/AccueilBilleterie/AccueilBilletterie";

const Accueil = (app) => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(Banniere());
    fragment.appendChild(AccueilInfo());
    fragment.appendChild(AccueilGrille());
    fragment.appendChild(AccueilBilletterie());


    app.appendChild(fragment);

    return app;
};

export default Accueil;