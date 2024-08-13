import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Contact = (app) => {

    const idTitreAccueilContact = "titre-accueil-contact";
    const titreAccueilContact = "CONTACT";

    const accueilContact = AccueilContainer(idTitreAccueilContact, titreAccueilContact);
    accueilContact.id = "accueil-contact";
    accueilContact.classList.add("flex-column", "start")
    app.appendChild(accueilContact);



    return app;
};

export default Contact;