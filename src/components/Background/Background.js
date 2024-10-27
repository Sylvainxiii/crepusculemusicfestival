import "./Background.css";
import img from "/src/assets/images/fond-body.webp";

const Background = () => {

    const background = document.createElement('div');
    background.className = "background";

    const backgroundImg = document.createElement('img');
    backgroundImg.className = "background-img";
    backgroundImg.src = img;

    background.appendChild(backgroundImg);

    return background;
}

export default Background;