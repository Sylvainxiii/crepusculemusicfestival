import VueTitre from "/src/components/VueTitre/VueTitre.js";
import VueContainer from "/src/components/VueContainer/VueContainer";
import { engagements } from "/data/crepuscule2025.json";
const page = engagements["page"];
const paragraphes = page["paragraphes"]

const Engagements = (app) => {

    const titreEngagements = page["titreh1"];

    const fragment = document.createDocumentFragment();
    const vueTitre = VueTitre(titreEngagements);
    vueTitre.classList.add("flex-column", "center")
    fragment.appendChild(vueTitre);

    const contenu = VueContainer();
    fragment.appendChild(contenu);
    const epilogue = document.createElement("p");
    epilogue.innerHTML = page["epilogue"];
    contenu.appendChild(epilogue);

    for (let paragraphe in paragraphes) {
        const contenuParagraphe = paragraphes[paragraphe];
        const divParagraphe = document.createElement("div");
        divParagraphe.id = paragraphe;

        const titreParagraphe = document.createElement("h2");
        titreParagraphe.innerHTML = paragraphes[paragraphe]["titreh2"];
        divParagraphe.appendChild(titreParagraphe);

        for (let liste in contenuParagraphe) {
            const contenuListe = contenuParagraphe[liste];


            if (liste.indexOf("liste") == 0) {
                const divListe = document.createElement("div");
                divListe.id = liste;

                const titreListe = document.createElement("h3");
                titreListe.innerHTML = contenuParagraphe[liste]["titreh3"];
                divListe.appendChild(titreListe);

                const ulListe = document.createElement("ul");
                for (let ligne in contenuListe) {
                    if (ligne !== "titreh3") {
                        const liListe = document.createElement("li");
                        liListe.innerHTML = contenuListe[ligne];
                        ulListe.appendChild(liListe);
                        divListe.appendChild(ulListe);
                    }
                }
                divParagraphe.appendChild(divListe);
            } else if (liste == "paragraphe") {
                const sousParagraphe = document.createElement("p");
                sousParagraphe.innerHTML = contenuParagraphe["paragraphe"];
                divParagraphe.appendChild(sousParagraphe);
            }

        }

        contenu.appendChild(divParagraphe);
    }

    app.appendChild(fragment);

    return app;
};

export default Engagements;