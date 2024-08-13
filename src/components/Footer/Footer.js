import "./Footer.css";
import map from "/src/assets/images/carte.png";

const Footer = () => {

    const footer = document.createElement('div');
    footer.id = "footer";
    footer.classList.add("flex-row", "space-between", "relative");

    const bordureFooter = document.createElement('div');
    bordureFooter.id = "bordure-footer";
    bordureFooter.classList.add("absolute");
    footer.appendChild(bordureFooter);

    const backgroundFooter = document.createElement('div');
    backgroundFooter.id = "background-footer";
    backgroundFooter.classList.add("flex-row", "space-between", "absolute");
    footer.appendChild(backgroundFooter);

    // Volet reseaux sociaux---------------------------------------------------------------------------------

    const socialFooter = document.createElement('div');
    socialFooter.classList.add("flex-column", "start");
    socialFooter.id = "social-footer";

    const titreSocialFooter = document.createElement('h2');
    titreSocialFooter.textContent = "Suivez nous!";
    socialFooter.appendChild(titreSocialFooter);

    const facebook = document.createElement('a');
    facebook.classList.add("fa-brands", "fa-facebook-f");
    facebook.href = "https://www.facebook.com/profile.php?id=100092378724145";
    facebook.target = "_blank";
    socialFooter.appendChild(facebook);

    const instagram = document.createElement('a');
    instagram.classList.add("fa-brands", "fa-instagram");
    instagram.href = "https://www.instagram.com/drac_events/";
    instagram.target = "_blank";
    socialFooter.appendChild(instagram);

    footer.appendChild(socialFooter);

    // Volet Contact---------------------------------------------------------------------------------------------

    const contactFooter = document.createElement('div');
    contactFooter.classList.add("flex-column", "center");
    contactFooter.id = "contact-footer";

    const titrecontactFooter = document.createElement('h2');
    titrecontactFooter.textContent = "Contact";
    contactFooter.appendChild(titrecontactFooter);

    const email = document.createElement('a');
    email.href = "mailto:contact@drac-events.com";
    email.textContent = "contact@drac-events.com"
    contactFooter.appendChild(email);

    footer.appendChild(contactFooter);

    // Volet Accès Festival--------------------------------------------------------------------------------------

    const accesFooter = document.createElement('div');
    accesFooter.classList.add("flex-column", "start");
    accesFooter.id = "acces-footer";

    const titreaccesFooter = document.createElement('h2');
    titreaccesFooter.textContent = "Accéder au festival";
    accesFooter.appendChild(titreaccesFooter);

    const mapaccesFooter = document.createElement('img');
    mapaccesFooter.id = "map-acces-footer"
    mapaccesFooter.src = map;
    accesFooter.appendChild(mapaccesFooter);

    footer.appendChild(accesFooter);

    return footer;
}

export default Footer;