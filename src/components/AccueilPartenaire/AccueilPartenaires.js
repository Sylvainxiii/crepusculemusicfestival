import "./AccueilPartenaires.css";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { partenaires } from "/data/crepuscule2025.json"
const logoPartenaires = Object.values(import.meta.glob('/src/assets/images/partenaires/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }))

const AccueilPartenaires = () => {
    const idtitreAccueilPartenaires = "titre-accueil-partenaires";
    const titreAccueilPartenaires = partenaires["titre"];

    const fragment = document.createDocumentFragment();
    const grillePartenaire = document.createElement('div');
    grillePartenaire.id = "grille-partenaire";
    fragment.appendChild(grillePartenaire);

    logoPartenaires.map(partenaire => {
        const imgPartenaire = document.createElement('img');
        imgPartenaire.src = partenaire;
        imgPartenaire.className = ("logo-partenaire-accueil");
        grillePartenaire.appendChild(imgPartenaire);
    })

    const accueilPartenaires = AccueilContainer(idtitreAccueilPartenaires, titreAccueilPartenaires);
    accueilPartenaires.id = "accueil-partenaires";
    accueilPartenaires.classList.add("flex-column", "start");
    accueilPartenaires.appendChild(fragment);

    return accueilPartenaires;
}

export default AccueilPartenaires;