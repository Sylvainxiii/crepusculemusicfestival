import './Teaser.css';
import teaser from "/src/assets/video/teaser.mp4";

const Teaser = () => {
    const video = document.createElement('video');
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;

    const sourcevideo = document.createElement('source');
    sourcevideo.src = teaser;
    sourcevideo.type = "video/mp4";
    video.appendChild(sourcevideo);

    const videoContainer = document.createElement('div');

    videoContainer.classList.add("video-container", "absolute");
    videoContainer.appendChild(video);

    const holoLight = document.createElement('div');
    holoLight.className = "holo-light";

    const holoContainer = document.createElement('div');
    holoContainer.className = "holo-container";

    holoContainer.appendChild(holoLight);
    holoContainer.appendChild(videoContainer);

    return holoContainer;
}

export default Teaser;