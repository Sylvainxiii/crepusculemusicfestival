import "./AccueilContainer.css";

const AccueilContainer = () => {
    const accueilContainer = document.createElement('div');
    accueilContainer.classList.add("accueil-container", "relative", "flex-column", "center");

    return accueilContainer;
}

export default AccueilContainer;