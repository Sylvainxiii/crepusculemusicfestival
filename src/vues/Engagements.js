import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Engagements = (app) => {

    const idTitreAccueilEngagements = "titre-accueil-engagements";
    const titreAccueilEngagements = "ENGAGEMENTS";

    const accueilEngagements = AccueilContainer(idTitreAccueilEngagements, titreAccueilEngagements);
    accueilEngagements.id = "accueil-engagements";
    accueilEngagements.classList.add("flex-column", "start")
    app.appendChild(accueilEngagements);


    return app;
};

export default Engagements;