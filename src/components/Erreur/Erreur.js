import "./Erreur.css";

const Erreur = () => {

    const erreur = document.createElement('div');
    erreur.id = "erreur";
    erreur.classList.add("flex-column", "center", "absolute");
    erreur.textContent = "OOPPSS!!! Erreur 404.";


    return erreur;
}

export default Erreur;