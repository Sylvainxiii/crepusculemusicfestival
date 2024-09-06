import './Banniere.css';
import Portail from '/src/components/Portail/Portail';
import logo from "/src/assets/images/crepuscule-blanc.webp";

const Banniere = () => {

  const fragment = document.createDocumentFragment();

  const logoBanniere = document.createElement('img');
  logoBanniere.id = "logo-banniere";
  logoBanniere.className = "absolute";
  logoBanniere.src = logo;
  logoBanniere.alt = "Crepuscule Music Festival logo"

  fragment.appendChild(logoBanniere);
  fragment.appendChild(Portail());

  const banniere = document.createElement('div');
  banniere.id = 'banniere'
  banniere.className = "relative";
  banniere.appendChild(fragment);
  return banniere;
}

export default Banniere;