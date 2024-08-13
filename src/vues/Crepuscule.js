import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";

const Crepuscule = (app) => {

    const idtitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = "CREPUSCULE MUSIC FESTIVAL";

    const accueilInfo = AccueilContainer(idtitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "center")
    app.appendChild(accueilInfo);

    return app;
};

export default Crepuscule;