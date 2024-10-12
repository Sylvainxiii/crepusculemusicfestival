import "./AccueilProgrammation.css";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { programmation } from "/data/crepuscule2025.json";
import { genererArtefact } from "../Artefact/Artefact";
// const gallery = Object.values(import.meta.glob('/src/assets/images/artistes/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }))

const AccueilProgrammation = () => {

    const titreAccueilProgrammation = programmation["titre"];
    const artistes = programmation["artistes"];

    const fragment = document.createDocumentFragment();

    const titre = document.createElement('h1');
    titre.innerText = titreAccueilProgrammation;
    fragment.appendChild(titre);

    artistes.map(artiste => {
        const container = AccueilContainer();
        container.classList.add("container-artefact-accueil");
        container.id = "artiste" + artistes.indexOf(artiste);
        genererArtefact(container, artiste["artefact"], artiste["couleur"]);

        fragment.appendChild(container);
    })

    const accueilProgrammationGrille = document.createElement("div");
    accueilProgrammationGrille.id = "accueil-programmation-grille";
    accueilProgrammationGrille.className = "grid";
    accueilProgrammationGrille.appendChild(fragment);

    const accueilProgrammation = document.createElement("div");
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.classList.add("flex-column", "center");
    accueilProgrammation.appendChild(titre);
    accueilProgrammation.appendChild(accueilProgrammationGrille);

    return accueilProgrammation;
}

export default AccueilProgrammation;