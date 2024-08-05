import "./OngletMenu.css";
import dataMenu from "/data/menu.json"

const OngletMenu = () => {

    const ongletMenu = document.createElement('ul');
    ongletMenu.id = "liste-menu";
    ongletMenu.classList.add("flex-column")

    dataMenu.forEach((item) => {
        const line = document.createElement('li');
        line.classList.add("line-menu", "flex-row", "center");

        const link = document.createElement('a');
        link.classList.add("link-menu");
        link.href = item.path;
        link.textContent = item.title;

        line.appendChild(link);
        ongletMenu.appendChild(line);
    })

    return ongletMenu;
}

export default OngletMenu;
