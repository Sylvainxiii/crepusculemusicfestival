import Accueil from "./vues/Accueil.js";
import Billetterie from "./vues/Billetterie.js";
import Contact from "./vues/Contact.js";
import Crepuscule from "./vues/Crepuscule.js";
import Drac from "./vues/Drac.js";
import Engagements from "./vues/Engagements.js";
import erreur404 from "./vues/erreur404.js";
import Info from "./vues/Info.js";
import Partenaires from "./vues/Partenaires.js";
import Programmation from "./vues/Programmation.js";


const App = () => {

    const app = document.createElement('div');
    app.className = 'app';


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

    // Fonction qui permet de récupérer le chemin de la barre de navigation et d'executer le module adéquat
    const handleLocation = () => {
        const currentPath = window.location.pathname;
        const Component = routes[currentPath];
        app.innerHTML = ""
        if (Component) {
            Component(app);
        } else { erreur404(app) }
    }

    // Fonction qui permet de désactiver le comportement par défaut des liens (rechargement de page), d'affecter le nouveau chemin à la barre des taches et d'executer le rendu (handleLocation)
    const navigation = (event) => {
        if (event.target.classList.contains("link-menu")) {
            event.preventDefault();
            const newpath = event.target.href;
            window.history.pushState({}, newpath, newpath);
            handleLocation();
        }

    }

    // Execution du rendu de la page au premier chargement
    document.onload = handleLocation()

    // Cette expression permet de charger les pages précedemment consultées
    window.onpopstate = handleLocation;


    document.addEventListener('click', (event) => {
        navigation(event);
    })

    return app;
};

export default App;