import "./AccueilContainer.css";

const AccueilContainer = (id, text) => {
    const accueilContainer = document.createElement('div');
    accueilContainer.className = "accueil-container";

    const titreAccueilContainer = document.createElement('h1');
    titreAccueilContainer.id = id;
    titreAccueilContainer.innerText = text;
    accueilContainer.appendChild(titreAccueilContainer);

    return accueilContainer;
}

export default AccueilContainer;