import VueContainer from "/src/components/VueContainer/VueContainer";
import { crepuscule } from "/data/crepuscule2025.json";
import VueTitre from "/src/components/VueTitre/VueTitre";
const page = crepuscule["page"];

const Crepuscule = (app) => {
    console.log(page);
    const titreAccueilInfo = page["titreh2"];

    const fragment = document.createDocumentFragment();
    const vueTitre = VueTitre(titreAccueilInfo);
    vueTitre.classList.add("flex-column", "center")
    fragment.appendChild(vueTitre);

    const contenu = VueContainer();
    contenu.classList.add("texte-centre");

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