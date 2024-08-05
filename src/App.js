import Accueil from "./vues/Accueil.js";
import Billetterie from "./vues/Billetterie.js";
import Contact from "./vues/Contact.js";
import Crepuscule from "./vues/Crepuscule.js";
import Drac from "./vues/Drac.js";
import Engagements from "./vues/Engagements.js";
import Info from "./vues/Info.js";
import Partenaires from "./vues/Partenaires.js";
import Programmation from "./vues/Programmation.js";


const App = () => {

    const app = document.createElement('div');
    app.className = 'app';

    const currentPath = window.location.pathname;

    const routes = {
        '/': Accueil,
        '/crepuscule/': Crepuscule,
        '/programmation/': Programmation,
        '/billetterie/': Billetterie,
        '/infos-pratiques/': Info,
        '/engagements/': Engagements,
        '/partenaires/': Partenaires,
        '/dracevents/': Drac,
        '/contact/': Contact
    };

    const Component = routes[currentPath];

    if (Component) {
        Component(app);
    } else {
        const notFound = document.createElement('div');
        notFound.textContent = 'Page non trouvée';
        app.appendChild(notFound);
    }

    return app;
};

export default App;