import VueTitre from "/src/components/VueTitre/VueTitre.js";
import VueContainer from "/src/components/VueContainer/VueContainer";
import { info } from "/data/crepuscule2025.json";
import VueDeroulant from "../components/VueDeroulant/VueDeroulant";
const page = info["page"];


const Info = (app) => {

    const titreInfo = info["titre"];

    const fragment = document.createDocumentFragment();
    const titreVueInfo = VueTitre(titreInfo);
    titreVueInfo.id = "info";
    titreVueInfo.classList.add("flex-column", "start")
    fragment.appendChild(titreVueInfo);

    const contenu = VueContainer();
    fragment.appendChild(contenu);

    for (let paragraphe in page) {
        const contenuParagraphe = page[paragraphe];
        const divParagraphe = document.createElement("div");
        divParagraphe.id = paragraphe;

        const titreParagraphe = document.createElement("h3");
        titreParagraphe.textContent = page[paragraphe]["titreh3"];
        divParagraphe.appendChild(titreParagraphe);
        contenu.appendChild(divParagraphe);

        for (let elmt in contenuParagraphe) {
            if (elmt !== "titreh3" && elmt !== "faq") {
                const sousParagraphe = document.createElement("div");
                sousParagraphe.textContent = contenuParagraphe[elmt];
                divParagraphe.appendChild(sousParagraphe);
            } else if (elmt == "faq") {
                const faq = contenuParagraphe[elmt];
                for (let question in faq) {
                    divParagraphe.appendChild(VueDeroulant(faq[question]["question"], faq[question]["reponse"], question));
                }

            }
        }
    }


    app.appendChild(fragment);

    return app;
};

export default Info;