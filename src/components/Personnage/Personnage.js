import "./Personnage.css";
import personnage from "../../assets/images/personnage.png";
import caillou1 from "../../assets/images/caillou_1.png";
import caillou2 from "../../assets/images/caillou_2.png";
import caillou3 from "../../assets/images/caillou_3.png";
import caillou4 from "../../assets/images/caillou_4.png";

const Personnage = () => {

    const scene = document.createElement("div");
    scene.id = "scene";
    scene.className = "absolute";

    const personnageImg = document.createElement("img");
    personnageImg.className = "absolute";
    personnageImg.id = "personnage";
    personnageImg.src = personnage;

    const caillou1Img = document.createElement("img");
    caillou1Img.className = "absolute";
    caillou1Img.id = "caillou-1";
    caillou1Img.src = caillou1;

    const caillou2Img = document.createElement("img");
    caillou2Img.className = "absolute";
    caillou2Img.id = "caillou-2";
    caillou2Img.src = caillou2;

    const caillou3Img = document.createElement("img");
    caillou3Img.className = "absolute";
    caillou3Img.id = "caillou-3";
    caillou3Img.src = caillou3;

    const caillou4Img = document.createElement("img");
    caillou4Img.className = "absolute";
    caillou4Img.id = "caillou-4";
    caillou4Img.src = caillou4;

    scene.appendChild(personnageImg);
    scene.appendChild(caillou1Img);
    scene.appendChild(caillou2Img);
    scene.appendChild(caillou3Img);
    scene.appendChild(caillou4Img);

    return scene;
}

export default Personnage;