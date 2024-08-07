import "./Menu.css";
import OngletMenu from "../OngletMenu/OngletMenu";
import BoutonMenuClassique from "../BoutonMenuClassique/BoutonMenuClassique";

const Menu = () => {

    const menu = document.createElement('div');
    menu.id = "menu";
    menu.classList.add("flex-column", "center", "absolute");
    menu.appendChild(BoutonMenuClassique());

    menu.appendChild(OngletMenu());

    return menu;
}

export default Menu;
