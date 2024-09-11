import Banniere from "/src/components/Banniere/Banniere.js";
import AccueilInfo from "/src/components/AccueilInfo/AccueilInfo";
import AccueilBilletterie from "/src/components/AccueilBilleterie/AccueilBilletterie";
import AccueilPartenaires from "/src/components/AccueilPartenaire/AccueilPartenaires";
import AccueilProgrammation from "../components/AccueilProgrammation/AccueilProgrammation";

const Accueil = (app) => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(Banniere());
    fragment.appendChild(AccueilInfo());
    fragment.appendChild(AccueilProgrammation());
    fragment.appendChild(AccueilBilletterie());
    fragment.appendChild(AccueilPartenaires());

    app.appendChild(fragment);

    return app;
};

export default Accueil;