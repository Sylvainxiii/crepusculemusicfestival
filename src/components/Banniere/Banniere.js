import './Banniere.css';
import teaser from "/src/assets/video/teaser.mp4";
import img from "/src/assets/images/fond-accueil.webp";
import logo from "/src/assets/images/logo.svg";

const Banniere = () => {

  const fragment = document.createDocumentFragment();
  const videoContainer = document.createElement('div');
  videoContainer.id = "container-video-banniere";
  videoContainer.className = "relative";

  const video = document.createElement('video');
  video.id = "video-banniere";
  video.className = "absolute";
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
  imgBanniere.className = "absolute";
  imgBanniere.alt = "Crepuscule Music Festival ALBI"

  const logoBanniere = document.createElement('img');
  logoBanniere.id = "logo-banniere";
  logoBanniere.className = "absolute";
  logoBanniere.src = logo;
  logoBanniere.alt = "Crepuscule Music Festival logo"

  videoContainer.appendChild(video);
  fragment.appendChild(videoContainer);
  fragment.appendChild(logoBanniere);
  fragment.appendChild(imgBanniere);

  const banniere = document.createElement('div');
  banniere.id = 'banniere'
  banniere.className = "relative";
  banniere.appendChild(fragment);
  return banniere;
}

export default Banniere;