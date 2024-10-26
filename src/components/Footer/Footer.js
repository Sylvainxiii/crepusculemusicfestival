import "./Footer.css";
import { contact, footer, info } from "/data/crepuscule2025.json";
import logoFacebook from "/src/assets/images/facebook-f.svg";
import logoInstagram from "/src/assets/images/instagram.svg";

const Footer = () => {
    const fragment = document.createDocumentFragment();

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

    const logoContainer = document.createElement('div');
    logoContainer.classList.add("flex-row", "space-between");

    const facebook = document.createElement('a');
    facebook.classList.add("fa-brands", "fa-facebook-f");
    facebook.href = linkFacebook;
    facebook.ariaLabel = "Facebook de Drac Events";
    facebook.target = "_blank";
    const imgFacebook = document.createElement("img");
    imgFacebook.src = logoFacebook;
    facebook.appendChild(imgFacebook);
    logoContainer.appendChild(facebook);

    const instagram = document.createElement('a');
    instagram.classList.add("fa-brands", "fa-instagram");
    instagram.href = linkInstagram;
    instagram.ariaLabel = "Instagram de Drac Events";
    instagram.target = "_blank";
    const imgInstagram = document.createElement("img");
    imgInstagram.src = logoInstagram;
    instagram.appendChild(imgInstagram);
    logoContainer.appendChild(instagram);

    socialFooter.appendChild(logoContainer);

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
    const lieux = info["lieux"];
    const rue = info["rue"];
    const codePostal = info["CP"];
    const ville = info["ville"];
    const mapFooter = info["google_map"];

    const accesFooter = document.createElement('div');
    accesFooter.classList.add("flex-column", "start");
    accesFooter.id = "acces-footer";

    const lienGoogleMap = document.createElement('a');
    lienGoogleMap.href = mapFooter;
    lienGoogleMap.target = "_blank";
    lienGoogleMap.ariaLabel = "Localiser Crépuscule Music Festival";

    const titreaccesFooter = document.createElement('h2');
    titreaccesFooter.textContent = titreAcces;
    lienGoogleMap.appendChild(titreaccesFooter);

    const adresseFooter = document.createElement('div');
    adresseFooter.classList.add("flex-column", "start");
    adresseFooter.id = "adresse-footer";
    adresseFooter.innerHTML = `<p>${lieux}</p><p>${rue}</p><p>${codePostal} ${ville}</p>`;
    lienGoogleMap.appendChild(adresseFooter);
    accesFooter.appendChild(lienGoogleMap);

    fragment.appendChild(accesFooter);

    const piedDePage = document.createElement('div');
    piedDePage.id = "footer";
    piedDePage.classList.add("flex-row", "space-between-top", "relative");
    piedDePage.appendChild(fragment);

    return piedDePage;
}

export default Footer;