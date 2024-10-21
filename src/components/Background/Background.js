import "./Background.css";

const Background = () => {

    const background = document.createElement('div');
    background.className = "background";

    const backgroundImg = document.createElement('img');
    backgroundImg.className = "background-img";
    backgroundImg.src = "/src/assets/images/fond-body.webp";

    background.appendChild(backgroundImg);

    return background;
}

export default Background;