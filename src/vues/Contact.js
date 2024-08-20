import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { contact } from "/data/crepuscule2025.json";

const Contact = (app) => {

    const idTitreAccueilContact = "titre-contact";
    const titreAccueilContact = contact["titre"];

    const fragment = document.createDocumentFragment();
    const accueilContact = AccueilContainer(idTitreAccueilContact, titreAccueilContact);
    accueilContact.id = "contact";
    accueilContact.classList.add("flex-column", "start")
    fragment.appendChild(accueilContact);

    app.appendChild(fragment);

    return app;
};

export default Contact;