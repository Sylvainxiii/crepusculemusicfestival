import Accueil from "./vues/Accueil.js";
import Billetterie from "./vues/Billetterie.js";
import Contact from "./vues/Contact.js";
import Crepuscule from "./vues/Crepuscule.js";
import Drac from "./vues/Drac.js";
import Engagerments from "./vues/Engagements.js";
import Info from "./vues/Info.js";
import Partenaires from "./vues/Partenaires.js";
import Programmation from "./vues/Programmation.js";


const App = () => {

    const app = document.createElement('div');
    app.className = 'app';
    const currentPath = window.location.pathname;
    console.log(currentPath);

    switch (currentPath) {
        case '/':
            Accueil(app);
            break;
        case '/crepuscule/':
            Crepuscule(app);
            break;
        case '/programmation/':
            Programmation(app);
            break;
        case '/billetterie/':
            Billetterie(app);
            break;
        case '/infos-pratiques/':
            Info(app);
            break;
        case '/engagements/':
            Engagerments(app);
            break;
        case '/partenaires/':
            Partenaires(app);
            break;
        case '/dracevents/':
            Drac(app);
            break;
        case '/contact/':
            Contact(app);
            break;
    }

    return app;
};

export default App;