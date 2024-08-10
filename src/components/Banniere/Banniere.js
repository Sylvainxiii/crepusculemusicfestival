import './Banniere.css';
import teaser from "/src/assets/video/teaser.mp4";
import img from "/src/assets/images/fond-accueil.png";
import logo from "/src/assets/images/logo.svg";

const Banniere = () => {
  const banniere = document.createElement('div');
  banniere.id = 'banniere'
  banniere.classList.add("relative");

  const videoContainer = document.createElement('div');
  videoContainer.id = "container-video-banniere";
  videoContainer.classList.add("relative");

  const video = document.createElement('video');
  video.id = "video-banniere";
  video.classList.add("absolute");
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.loop = true;

  const sourcevideo = document.createElement('source');
  sourcevideo.src = teaser;
  sourcevideo.type = "video/mp4";
  video.appendChild(sourcevideo);

  const imgBanniere = document.createElement('img');
  imgBanniere.id = "img-banniere";
  imgBanniere.src = img;
  imgBanniere.classList.add("absolute");

  const logoBanniere = document.createElement('img');
  logoBanniere.id = "logo-banniere";
  logoBanniere.classList.add("absolute");
  logoBanniere.src = logo;

  const jour = document.createElement('div');
  jour.classList.add("texte-flashy-banniere")
  jour.textContent = "O8"

  const mois = document.createElement('div');
  mois.classList.add("texte-flashy-banniere")
  mois.textContent = "mars"

  const dateBanniere = document.createElement('div');
  dateBanniere.id = "date-banniere"
  dateBanniere.classList.add("flex-column", "start")
  dateBanniere.appendChild(jour);
  dateBanniere.appendChild(mois);


  const lieuBanniere = document.createElement('div');
  lieuBanniere.id = "lieu-banniere"
  lieuBanniere.classList.add("texte-flashy-banniere")
  lieuBanniere.textContent = "ALBI"

  videoContainer.appendChild(video);
  banniere.appendChild(videoContainer);
  banniere.appendChild(logoBanniere);
  banniere.appendChild(imgBanniere);
  banniere.appendChild(dateBanniere);
  banniere.appendChild(lieuBanniere);

  return banniere;
}

export default Banniere;