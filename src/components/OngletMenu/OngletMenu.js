import "./OngletMenu.css";
import data from "/data/crepuscule2025.json"

const OngletMenu = () => {

    const fragment = document.createDocumentFragment();

    for (let onglet in data) {

        if (onglet !== "footer") {
            const line = document.createElement('li');
            line.classList.add("line-menu", "flex-row", "center");

            const link = document.createElement('a');
            link.classList.add("link-menu", "navlink");
            link.href = data[onglet]["path"];
            link.textContent = data[onglet]["titre"];

            line.appendChild(link);
            fragment.appendChild(line);
        }
    }

    const ongletMenu = document.createElement('ul');
    ongletMenu.id = "liste-menu";
    ongletMenu.className = "flex-column";
    ongletMenu.appendChild(fragment);

    return ongletMenu;
}

export default OngletMenu;
