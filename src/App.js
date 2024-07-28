import Banniere from "./components/Banniere/Banniere.js";
import AccueilInfo from "./components/AccueilInfo/AccueilInfo.js";
import AccueilBilletterie from "./components/AccueilBilleterie/AccueiBilletterie.js";
import AccueilPartenaires from "./components/AccueilPartenaire/AccueiPartenaires.js";
import AccueilProgrammation from "./components/AccueilProgrammation/AccueiProgrammation.js";

const App = () => {
    const app = document.createElement('div');
    app.className = 'app';

    app.appendChild(Banniere());
    app.appendChild(AccueilInfo());
    app.appendChild(AccueilProgrammation());
    app.appendChild(AccueilBilletterie());
    app.appendChild(AccueilPartenaires());

    return app;
};

export default App;