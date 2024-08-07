import Menu from "../components/Menu/Menu";
import Erreur from "../components/Erreur/Erreur";

const erreur404 = (app) => {

    app.appendChild(Menu());
    app.appendChild(Erreur());


    return app;
};

export default erreur404;