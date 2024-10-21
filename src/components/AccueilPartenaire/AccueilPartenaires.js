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
    lignePartenaire.className = "flex-row";

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

        if (logo == 2) {
            logoPartenaire.classList.add("logo-centre")
        } else if (["0", "1", "3", "4"].includes(logo)) {
            logoPartenaire.classList.add("logo-voisin")
        }

        lignePartenaire.appendChild(logoPartenaire)
    }

    accueilPartenaires.appendChild(lignePartenaire);

    return accueilPartenaires;
}

export default AccueilPartenaires;

export function getLogos(liste, index) {
    const longueurListe = Object.keys(liste).length;

    // Pour sélectionner deux éléments avant et après l'index
    let result = [
        liste[(index - 2 + longueurListe) % longueurListe],  // Deuxième élément avant l'index
        liste[(index - 1 + longueurListe) % longueurListe],  // Premier élément avant l'index
        liste[index],  // Premier élément avant l'index
        liste[(index + 1) % longueurListe],           // Premier élément après l'index
        liste[(index + 2) % longueurListe]            // Deuxième élément après l'index
    ];

    return result;
}

// export function attribueClasse() {
//     const logos = document.getElementsByClassName("logo-partenaire-accueil")
//     const idLogoCentre = document.querySelector(".logo-centre").id
//     const listeVoisin = getVoisins(logos, idLogoCentre);

//     for (let i = 0; i < logos.length; i++) {
//         const idLogo = logos.namedItem(i).id
//         if (idLogo != idLogoCentre) {
//             if (listeVoisin.includes(logos.namedItem(i))) {
//                 logos.namedItem(i).classList.add("logo-voisin")
//             } else {
//                 logos.namedItem(i).classList.add("hidden")
//             }
//         }
//     }
// }
