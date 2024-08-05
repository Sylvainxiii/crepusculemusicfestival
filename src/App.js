import Accueil from "./vues/Accueil.js";

const App = () => {
    const app = document.createElement('div');
    app.className = 'app';

    Accueil(app);

    return app;
};

export default App;