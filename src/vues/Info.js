import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Info = (app) => {

    const idTitreAccueilInfo = "titre-accueil-info";
    const titreAccueilInfo = "INFO";

    const accueilInfo = AccueilContainer(idTitreAccueilInfo, titreAccueilInfo);
    accueilInfo.id = "accueil-info";
    accueilInfo.classList.add("flex-column", "start")
    app.appendChild(accueilInfo);


    return app;
};

export default Info;