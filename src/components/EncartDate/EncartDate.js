import "./EncartDate.css";
import { info } from "/data/crepuscule2025.json"
const dates = info["dates"];
const ville = info["ville"]

const EncartDate = () => {
    const dateLieu = dates + " - " + ville;

    const fragment = document.createDocumentFragment();
    const texteEncart = document.createElement('div');
    texteEncart.textContent = dateLieu;
    fragment.appendChild(texteEncart);

    const encart = document.createElement('div');
    encart.classList.add("encart-date", "flex-row", "center", "absolute");
    encart.appendChild(fragment);

    return encart
}

export default EncartDate;