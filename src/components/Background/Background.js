import "./Background.css";

const Background = () => {

    const background = document.createElement('img');
    background.className = "background";
    background.src = "/src/assets/images/fond-body.webp";

    return background;
}

export default Background;