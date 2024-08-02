import "./Menu.css";
import OngletMenu from "../OngletMenu/OngletMenu";

const Menu = () => {

    const menu = document.createElement('div');
    menu.id = "menu";
    menu.classList.add("flex-column", "center", "absolute");

    menu.appendChild(OngletMenu());

    return menu;
}

export default Menu;
