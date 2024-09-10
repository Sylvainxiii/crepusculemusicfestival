import "./AccueilProgrammation.css";
import AccueilContainer from "/src/components/AccueilContainer/AccueilContainer.js";
import teaser from "/src/assets/video/teaser.mp4"
import { programmation } from "/data/crepuscule2025.json";
import { genererArtefact } from "../Artefact/Artefact";
const gallery = Object.values(import.meta.glob('/src/assets/images/artistes/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }))

const AccueilProgrammation = () => {

    const idtitreAccueilProgrammation = "titre-accueil-programmation";
    const titreAccueilProgrammation = programmation["titre"];
    const artistes = programmation["artistes"];

    console.log(artistes);

    const fragment = document.createDocumentFragment();

    artistes.map(artiste => {
        const container = AccueilContainer();
        container.classList.add("container-artefact-accueil");
        container.id = "artiste" + artistes.indexOf(artiste);
        // const Artefact = document.createElement('img');
        // const index = gallery.findIndex(src => src.includes(artiste["img"]));
        // Artefact.src = gallery[index];
        // Artefact.classList.add("artefact-accueil", "absolute");
        // container.appendChild(Artefact);
        genererArtefact(container, artiste["artefact"], artiste["couleur"]);

        fragment.appendChild(container);
    })

    const videoContainer = AccueilContainer();
    videoContainer.id = "teaser";
    const video = document.createElement('video');
    video.className = "absolute";
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;

    const sourcevideo = document.createElement('source');
    sourcevideo.src = teaser;
    sourcevideo.type = "video/mp4";
    video.appendChild(sourcevideo);

    videoContainer.appendChild(video);
    fragment.appendChild(videoContainer);

    const accueilProgrammation = document.createElement("div");
    accueilProgrammation.id = "accueil-programmation";
    accueilProgrammation.appendChild(fragment);

    return accueilProgrammation;
}

export default AccueilProgrammation;