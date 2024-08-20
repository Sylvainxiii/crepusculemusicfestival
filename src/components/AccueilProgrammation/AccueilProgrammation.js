import "./AccueilProgrammation.css";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import { programmation } from "/data/crepuscule2025.json";
const gallery = Object.values(import.meta.glob('/src/assets/images/artistes/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }))

const AccueilProgrammation = () => {

    const idtitreAccueilProgrammation = "titre-accueil-programmation";
    const titreAccueilProgrammation = programmation["titre"];
    const artistes = programmation["artistes"];

    const fragment = document.createDocumentFragment();
    const programmationContainer = document.createElement('div');
    programmationContainer.classList.add("flex-row", "center");
    fragment.appendChild(programmationContainer);

    artistes.map(artiste => {
        const containerIconeArtefact = document.createElement('div');
        containerIconeArtefact.classList.add("container-artefact-accueil", "relative");
        const iconeArtefact = document.createElement('img');
        const index = gallery.findIndex(src => src.includes(artiste["img"]));
        iconeArtefact.src = gallery[index];
        iconeArtefact.classList.add("artefact-accueil", "absolute");
        containerIconeArtefact.appendChild(iconeArtefact);
        programmationContainer.appendChild(containerIconeArtefact);
    })

    const accueilProgrammation = AccueilContainer(idtitreAccueilProgrammation, titreAccueilProgrammation);
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.classList.add("flex-column", "start")
    accueilProgrammation.appendChild(fragment);

    return accueilProgrammation;
}

export default AccueilProgrammation;