import "./Crepuscule.css"
import PageTitre from "/src/components/PageTitre/PageTitre.js";
import VueContainer from "/src/components/VueContainer copy/VueContainer";
import { crepuscule } from "/data/crepuscule2025.json";
const page = crepuscule["page"];

const Crepuscule = (app) => {
    console.log(page);
    const titreAccueilInfo = page["titreh2"];

    const fragment = document.createDocumentFragment();
    const pageTitre = PageTitre(titreAccueilInfo);
    pageTitre.classList.add("flex-column", "center")
    fragment.appendChild(pageTitre);

    const contenu = VueContainer();

    for (let paragraphe in page) {
        if (paragraphe !== "titreh2") {
            const divParagraphe = document.createElement("div");
            divParagraphe.id = paragraphe;
            const titreParagraphe = document.createElement("h3");
            titreParagraphe.textContent = page[paragraphe]["titreh3"];
            divParagraphe.appendChild(titreParagraphe);
            const texteParagraphe = document.createElement("p");
            texteParagraphe.textContent = page[paragraphe]["paragraphe"];
            divParagraphe.appendChild(texteParagraphe);
            contenu.appendChild(divParagraphe);
        }
    }

    fragment.appendChild(contenu);
    app.appendChild(fragment);

    return app;
};

export default Crepuscule;