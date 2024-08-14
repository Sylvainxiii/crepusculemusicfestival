import "./AccueilContainer.css";

const AccueilContainer = (id, text) => {
    const accueilContainer = document.createElement('div');
    accueilContainer.className = "accueil-container";

    const titreAccueilContainer = document.createElement('h1');
    titreAccueilContainer.id = id;
    titreAccueilContainer.textContent = text;
    accueilContainer.appendChild(titreAccueilContainer);

    const borderAccueilContainer = document.createElement('div');
    borderAccueilContainer.classList.add("border-accueil-container", "absolute");
    accueilContainer.appendChild(borderAccueilContainer);

    return accueilContainer;
}

export default AccueilContainer;