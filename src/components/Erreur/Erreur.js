import "./Erreur.css";

const Erreur = () => {

    const fragment = document.createDocumentFragment();
    const containerErreur = document.createElement('div');
    containerErreur.id = "container-erreur";
    containerErreur.classList.add("flex-column", "center");
    fragment.appendChild(containerErreur);

    const titreErreur = document.createElement('div');
    titreErreur.id = "titre-404";
    titreErreur.textContent = "Vous êtes perdu!!";
    containerErreur.appendChild(titreErreur);

    const codeErreur = document.createElement('div');
    codeErreur.id = "code-404";
    codeErreur.textContent = "Code erreur: 404";
    containerErreur.appendChild(codeErreur);

    const link = document.createElement('a');
    link.classList.add("navlink");
    link.id = "retour-accueil-404";
    link.href = "/";
    link.textContent = "Accueil";
    containerErreur.appendChild(link);

    const erreur = document.createElement('div');
    erreur.id = "erreur";
    erreur.classList.add("flex-column", "center");
    erreur.appendChild(fragment);

    return erreur;
}

export default Erreur;