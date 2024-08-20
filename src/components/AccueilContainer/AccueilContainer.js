import "./AccueilContainer.css";

const AccueilContainer = (id, titre) => {
    const accueilContainer = document.createElement('div');
    accueilContainer.classList.add("accueil-container", "relative");

    const titreAccueilContainer = document.createElement('h1');
    titreAccueilContainer.id = id;
    titreAccueilContainer.textContent = titre;
    accueilContainer.appendChild(titreAccueilContainer);

    const borderAccueilContainer = document.createElement('div');
    borderAccueilContainer.classList.add("border-accueil-container", "absolute");
    accueilContainer.appendChild(borderAccueilContainer);

    return accueilContainer;
}

export default AccueilContainer;