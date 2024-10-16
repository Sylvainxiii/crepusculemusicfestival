import "./Portail.css";
import Personnage from "../Personnage/Personnage";

const Portail = () => {
    const portail = document.createElement("div");
    portail.id = "portail";
    portail.className = "relative";

    const faceDessusOmbre = document.createElement("div");
    faceDessusOmbre.id = "face-dessus-ombre";
    faceDessusOmbre.className = "relative";

    const faceDessus = document.createElement("div");
    faceDessus.id = "face-dessus";
    faceDessus.className = "relative";
    faceDessusOmbre.appendChild(faceDessus);

    const faceGauche = document.createElement("div");
    faceGauche.id = "face-gauche";
    faceGauche.className = "absolute";

    const faceDroite = document.createElement("div");
    faceDroite.id = "face-droite";
    faceDroite.className = "absolute";

    const faceArriere = document.createElement("div");
    faceArriere.id = "face-arriere";
    faceArriere.className = "relative";



    portail.appendChild(faceDessusOmbre);
    portail.appendChild(faceArriere);
    portail.appendChild(faceGauche);
    portail.appendChild(faceDroite);
    portail.appendChild(Personnage());

    return portail;
}

export default Portail;