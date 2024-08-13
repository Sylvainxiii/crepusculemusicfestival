import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";



const Drac = (app) => {

    const idTitreAccueilDrac = "titre-accueil-drac";
    const titreAccueilDrac = "DRAC";

    const accueilDrac = AccueilContainer(idTitreAccueilDrac, titreAccueilDrac);
    accueilDrac.id = "accueil-drac";
    accueilDrac.classList.add("flex-column", "start")
    app.appendChild(accueilDrac);


    return app;
};

export default Drac;