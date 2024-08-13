import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";

const Partenaires = (app) => {

    const idTitreAccueilPartenaires = "titre-accueil-partenaires";
    const titreAccueilPartenaires = "PARTENAIRES";

    const accueilPartenaires = AccueilContainer(idTitreAccueilPartenaires, titreAccueilPartenaires);
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start")
    app.appendChild(accueilPartenaires);

    return app;
};

export default Partenaires;