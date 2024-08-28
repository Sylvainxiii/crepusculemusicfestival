import "./PageTitre.css";

const PageTitre = (titre) => {
    const PageTitre = document.createElement('div');
    PageTitre.classList.add("titre-container", "relative");

    const textePageTitre = document.createElement('h1');
    textePageTitre.textContent = titre;
    PageTitre.appendChild(textePageTitre);

    return PageTitre;
}

export default PageTitre;