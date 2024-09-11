import "./AccueilPartenaires.css";
import { partenaires } from "/data/crepuscule2025.json"
const logoPartenaires = Object.values(import.meta.glob('/src/assets/images/partenaires/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }))

const AccueilPartenaires = () => {
    const titreAccueilPartenaires = partenaires["titre"];

    const fragment = document.createDocumentFragment();

    const titre = document.createElement('h1');
    titre.innerText = titreAccueilPartenaires;
    fragment.appendChild(titre);

    const grillePartenaire = document.createElement('div');
    grillePartenaire.id = "grille-partenaire";
    grillePartenaire.className = "grid";
    fragment.appendChild(grillePartenaire);

    logoPartenaires.map(partenaire => {
        const imgPartenaire = document.createElement('img');
        imgPartenaire.src = partenaire;
        imgPartenaire.className = ("logo-partenaire-accueil");
        grillePartenaire.appendChild(imgPartenaire);
    })

    const accueilPartenaires = document.createElement("div");
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start");
    accueilPartenaires.appendChild(fragment);

    return accueilPartenaires;
}

export default AccueilPartenaires;