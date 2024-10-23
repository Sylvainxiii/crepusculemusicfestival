import "./AccueilPartenaires.css";
import { partenaires } from "/data/crepuscule2025.json"

const AccueilPartenaires = () => {
    const titreAccueilPartenaires = partenaires["titre"];

    const accueilPartenaires = document.createElement("div");
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start");

    const titre = document.createElement('h1');
    titre.innerText = titreAccueilPartenaires;
    accueilPartenaires.appendChild(titre);

    const lignePartenaire = document.createElement('div');
    lignePartenaire.id = "ligne-partenaire";
    lignePartenaire.classList.add("flex-row", "center");

    // Compte le nombre de partenaires
    const max = Object.keys(partenaires["liste"]).length;
    // Choisi le logo central aléatoirement pour le premier chargement
    const index = Math.floor(Math.random() * (max - 0));
    // Génère la liste des 5 logos qui apparaissent: le central, les deux avant et les deux après avec le principe de liste infinie
    const listeLogoInitial = getLogos(partenaires["liste"], index);

    for (const logo in listeLogoInitial) {
        const logoPartenaire = document.createElement('img');
        logoPartenaire.src = "/src/assets/images/partenaires/" + listeLogoInitial[logo]["logo"];
        logoPartenaire.id = logo;
        logoPartenaire.className = ("logo-partenaire-accueil");

        if (logo == 3) {
            logoPartenaire.classList.add("logo-centre")
        } else if (["1", "2", "4", "5"].includes(logo)) {
            logoPartenaire.classList.add("logo-voisin-" + logo)
        } else if (logo == 1) {
            logoPartenaire.classList.add("logo-hidden-gauche")
        } else if (logo == 6) {
            logoPartenaire.classList.add("logo-hidden-droite")
        } else {
            logoPartenaire.classList.add("hidden-logo")
        }

        lignePartenaire.appendChild(logoPartenaire)
    }

    accueilPartenaires.appendChild(lignePartenaire);

    //Démarrer l'animation après un court délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
        animateLogos();
    }, 100);


    return accueilPartenaires;
}

export default AccueilPartenaires;

export function getLogos(liste, index) {
    const longueurListe = Object.keys(liste).length;

    // Pour sélectionner deux éléments avant et après l'index
    let result = []
    for (let i = 3; i >= 1; i--) {
        result.push(liste[(index - i) % longueurListe]);
    }

    result.push(liste[index])  // Premier élément avant l'index

    for (let i = 1; i < longueurListe - 3; i++) {
        result.push(liste[(index + i) % longueurListe]);
    }
    return result;
}

function animateLogos() {
    const logosContainer = document.getElementById('ligne-partenaire');
    if (!logosContainer) return;

    const logos = Array.from(logosContainer.getElementsByClassName('logo-partenaire-accueil'));

    // Fonction pour déplacer les logos
    const shiftLogos = () => {
        // Pour chaque logo, obtenir sa nouvelle classe
        let previousClass = "hidden-logo";

        logos.forEach((logo) => {
            const currentClasses = logo.classList;
            const currentClass = currentClasses[1];

            // Ajouter la nouvelle classe
            logo.classList.replace(currentClass, previousClass);
            previousClass = currentClass;
        });

        // Réorganiser physiquement les logos dans le DOM
        const firstLogo = logos[0];
        logosContainer.removeChild(firstLogo);
        logosContainer.appendChild(firstLogo);

        // Mettre à jour le tableau des logos
        logos.push(logos.shift());
    };

    // Configuration de l'animation
    const ANIMATION_INTERVAL = 2000; // 3 secondes entre chaque défilement

    // Démarre l'animation
    let animationInterval = setInterval(shiftLogos, ANIMATION_INTERVAL);

    // Arrête l'animation quand l'élément n'est plus visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                clearInterval(animationInterval);
            } else {
                animationInterval = setInterval(shiftLogos, ANIMATION_INTERVAL);
            }
        });
    });

    observer.observe(logosContainer);

    // Nettoyage lors du démontage du composant
    return () => {
        clearInterval(animationInterval);
        observer.disconnect();
    };
}