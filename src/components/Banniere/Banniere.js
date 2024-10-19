import './Banniere.css';
import Portail from '/src/components/Portail/Portail';
import logo from "/src/assets/images/logo_crepuscule.svg";
import { info } from "/data/crepuscule2025.json";

const Banniere = () => {

  const fragment = document.createDocumentFragment();
  const dateLieu = info["ville"] + " - " + info["dates"];

  const logoBanniere = document.createElement('img');
  logoBanniere.id = "logo-banniere";
  logoBanniere.src = logo;
  logoBanniere.alt = "Crepuscule Music Festival logo"

  const dateLieuBanniere = document.createElement('h1');
  dateLieuBanniere.id = "date-lieu-banniere";
  dateLieuBanniere.innerText = dateLieu;

  fragment.appendChild(logoBanniere);
  fragment.appendChild(dateLieuBanniere);
  fragment.appendChild(Portail());

  const banniere = document.createElement('div');
  banniere.id = 'banniere'
  banniere.classList.add("flex-column", "start");
  banniere.appendChild(fragment);
  return banniere;
}

export default Banniere;