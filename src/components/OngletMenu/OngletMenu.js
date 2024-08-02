import "./OngletMenu.css";
import dataMenu from "/data/menu.json"

const OngletMenu = () => {
    console.log(dataMenu);

    const ongletMenu = document.createElement('ul');
    ongletMenu.id = "liste-menu";

    for (let elmt in dataMenu) {
        let line = document.createElement('li');
        line.id = "line" + elmt;
        line.classList.add("line-menu", "flex-row", "center");
        let link = document.createElement('a');
        link.classList.add("link-menu");
        link.id = "link" + elmt;
        link.href = dataMenu[elmt]["link"];
        link.textContent = dataMenu[elmt]["title"];
        line.appendChild(link);
        ongletMenu.appendChild(line);
    }

    return ongletMenu;
}

export default OngletMenu;
