import BoutonMenu from "./components/BoutonMenu/BoutonMenu.js";
import BoutonMenuClassique from "./components/BoutonMenuClassique/BoutonMenuClassique.js";
import Menu from "./components/Menu/Menu.js";
import Banniere from "./components/Banniere/Banniere.js";
import AccueilInfo from "./components/AccueilInfo/AccueilInfo.js";
import AccueilBilletterie from "./components/AccueilBilleterie/AccueiBilletterie.js";
import AccueilPartenaires from "./components/AccueilPartenaire/AccueiPartenaires.js";
import AccueilProgrammation from "./components/AccueilProgrammation/AccueiProgrammation.js";

const App = () => {
    const app = document.createElement('div');
    app.className = 'app';

    app.appendChild(BoutonMenuClassique());
    app.appendChild(Menu());
    app.appendChild(Banniere());
    app.appendChild(AccueilInfo());
    app.appendChild(AccueilProgrammation());
    app.appendChild(AccueilBilletterie());
    app.appendChild(AccueilPartenaires());


    return app;
};

export default App;