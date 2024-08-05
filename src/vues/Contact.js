import BoutonMenu from "../components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "../components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "../components/Menu/Menu.js";
import AccueilContainer from "../components/AccueilContainer/AccueilContainer.js";


const Contact = (app) => {

    app.appendChild(BoutonMenuClassique());
    // app.appendChild(BoutonMenu());
    app.appendChild(Menu());

    const idTitreAccueilContact = "titre-accueil-contact";
    const titreAccueilContact = "CONTACT";

    const accueilContact = AccueilContainer(idTitreAccueilContact, titreAccueilContact);
    accueilContact.id = "accueil-contact";
    accueilContact.classList.add("flex-column", "start")
    app.appendChild(accueilContact);



    return app;
};

export default Contact;