import Footer from "/src/components/Footer/Footer.js";
import FooterMobile from "/src/components/FooterMobile/FooterMobile.js";
import Menu from "/src/components/Menu/Menu.js";
import Accueil from "/src/vues/Accueil.js";
import Billetterie from "/src/vues/Billetterie.js";
import Contact from "/src/vues/Contact.js";
import Crepuscule from "/src/vues/Crepuscule.js";
import Drac from "/src/vues/Drac.js";
import Engagements from "/src/vues/Engagements.js";
import Erreur404 from "/src/vues/Erreur404.js";
import Info from "/src/vues/Info.js";
import Partenaires from "/src/vues/Partenaires.js";
import Programmation from "/src/vues/Programmation.js";


const App = () => {

    const app = document.createElement('div');
    app.classList.add('app', "flex-column", "space-between");


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
        } else { Erreur404(app) }
        app.appendChild(Menu());
        app.appendChild(Footer());
        app.appendChild(FooterMobile());
    }

    // Fonction qui permet de désactiver le comportement par défaut des liens (rechargement de page), d'affecter le nouveau chemin à la barre des taches et d'executer le rendu (handleLocation)
    const navigation = (event) => {
        if (event.target.classList.contains("navlink")) {
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