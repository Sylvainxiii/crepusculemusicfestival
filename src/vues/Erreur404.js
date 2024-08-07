import Menu from "../components/Menu/Menu";
import Erreur from "../components/Erreur/Erreur";

const Erreur404 = (app) => {

    app.appendChild(Menu());
    app.appendChild(Erreur());


    return app;
};

export default Erreur404;
