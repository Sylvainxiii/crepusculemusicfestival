import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { partenaires } from "/data/crepuscule2025.json";

const Partenaires = (app) => {

    const idTitreAccueilPartenaires = "titre-partenaires";
    const titreAccueilPartenaires = partenaires["titre"];

    const fragment = document.createDocumentFragment();
    const accueilPartenaires = AccueilContainer(idTitreAccueilPartenaires, titreAccueilPartenaires);
    accueilPartenaires.id = "partenaires";
    accueilPartenaires.classList.add("flex-column", "start")
    fragment.appendChild(accueilPartenaires);

    app.appendChild(fragment);

    return app;
};

export default Partenaires;