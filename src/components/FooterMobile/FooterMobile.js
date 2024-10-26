import "./FooterMobile.css";
import { contact, info } from "/data/crepuscule2025.json";
import logoFacebook from "/src/assets/images/facebook-f.svg";
import logoInstagram from "/src/assets/images/instagram.svg";
import logoEmail from "/src/assets/images/envelope.svg";
import logoLocation from "/src/assets/images/location-dot.svg";

const FooterMobile = () => {
    const fragment = document.createDocumentFragment();

    const linkFacebook = contact["facebook"];
    const linkInstagram = contact["instagram"];
    const linkEmail = contact["email"];
    const linkMap = info["google_map"];

    //Facebook
    const facebook = document.createElement('a');
    facebook.classList.add("fa-brands", "fa-facebook-f");
    facebook.href = linkFacebook;
    facebook.ariaLabel = "Facebook de Drac Events";
    facebook.target = "_blank";
    const imgFacebook = document.createElement("img");
    imgFacebook.src = logoFacebook;
    facebook.appendChild(imgFacebook);
    fragment.appendChild(facebook);

    //Instagram
    const instagram = document.createElement('a');
    instagram.classList.add("fa-brands", "fa-instagram");
    instagram.href = linkInstagram;
    instagram.ariaLabel = "Instagram de Drac Events";
    instagram.target = "_blank";
    const imgInstagram = document.createElement("img");
    imgInstagram.src = logoInstagram;
    instagram.appendChild(imgInstagram);
    fragment.appendChild(instagram);

    //Email
    const email = document.createElement('a');
    email.href = `mailto:${linkEmail}`;
    email.ariaLabel = "Envoyer un mail à Drac Event";
    const imgEmail = document.createElement("img");
    imgEmail.src = logoEmail;
    email.appendChild(imgEmail);
    fragment.appendChild(email);

    //Localisation
    const lienGoogleMap = document.createElement('a');
    lienGoogleMap.href = linkMap;
    lienGoogleMap.target = "_blank";
    lienGoogleMap.ariaLabel = "Localiser Crépuscule Music Festival";
    const imgMap = document.createElement("img");
    imgMap.src = logoLocation;
    lienGoogleMap.appendChild(imgMap);
    fragment.appendChild(lienGoogleMap);


    const piedDePage = document.createElement('div');
    piedDePage.id = "footer-mobile";
    piedDePage.classList.add("flex-row", "center", "relative");
    piedDePage.appendChild(fragment);

    return piedDePage;
}

export default FooterMobile;