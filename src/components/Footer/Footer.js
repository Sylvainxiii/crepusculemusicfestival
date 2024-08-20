import "./Footer.css";
import map from "/src/assets/images/carte.webp";
import { contact, footer } from "/data/crepuscule2025.json"

const Footer = () => {
    const fragment = document.createDocumentFragment();

    const bordureFooter = document.createElement('div');
    bordureFooter.id = "bordure-footer";
    bordureFooter.className = "absolute";
    fragment.appendChild(bordureFooter);

    const backgroundFooter = document.createElement('div');
    backgroundFooter.id = "background-footer";
    backgroundFooter.classList.add("flex-row", "space-between", "absolute");
    fragment.appendChild(backgroundFooter);

    // Volet reseaux sociaux---------------------------------------------------------------------------------
    const linkFacebook = contact["facebook"];
    const linkInstagram = contact["instagram"];
    const linkEmail = contact["email"];
    const titreReseau = footer["reseauh2"];

    const socialFooter = document.createElement('div');
    socialFooter.classList.add("flex-column", "start");
    socialFooter.id = "social-footer";

    const titreSocialFooter = document.createElement('h2');
    titreSocialFooter.textContent = titreReseau;
    socialFooter.appendChild(titreSocialFooter);

    const facebook = document.createElement('a');
    facebook.classList.add("fa-brands", "fa-facebook-f");
    facebook.href = linkFacebook;
    facebook.ariaLabel = "Facebook de Drac Events";
    facebook.target = "_blank";
    socialFooter.appendChild(facebook);

    const instagram = document.createElement('a');
    instagram.classList.add("fa-brands", "fa-instagram");
    instagram.href = linkInstagram;
    instagram.ariaLabel = "Instagram de Drac Events";
    instagram.target = "_blank";
    socialFooter.appendChild(instagram);

    fragment.appendChild(socialFooter);

    // Volet Contact---------------------------------------------------------------------------------------------
    const titreContact = footer["contacth2"];

    const contactFooter = document.createElement('div');
    contactFooter.classList.add("flex-column", "center");
    contactFooter.id = "contact-footer";

    const titrecontactFooter = document.createElement('h2');
    titrecontactFooter.textContent = titreContact;
    contactFooter.appendChild(titrecontactFooter);

    const email = document.createElement('a');
    email.href = `mailto:${linkEmail}`;
    email.ariaLabel = "Envoyer un mail à Drac Event";
    email.textContent = linkEmail;
    contactFooter.appendChild(email);

    fragment.appendChild(contactFooter);

    // Volet Accès Festival--------------------------------------------------------------------------------------
    const titreAcces = footer["accesh2"];

    const accesFooter = document.createElement('div');
    accesFooter.classList.add("flex-column", "start");
    accesFooter.id = "acces-footer";

    const titreaccesFooter = document.createElement('h2');
    titreaccesFooter.textContent = titreAcces;
    accesFooter.appendChild(titreaccesFooter);

    const mapaccesFooter = document.createElement('img');
    mapaccesFooter.id = "map-acces-footer"
    mapaccesFooter.src = map;
    accesFooter.appendChild(mapaccesFooter);

    fragment.appendChild(accesFooter);

    const piedDePage = document.createElement('div');
    piedDePage.id = "footer";
    piedDePage.classList.add("flex-row", "space-between", "relative");
    piedDePage.appendChild(fragment);

    return piedDePage;
}

export default Footer;