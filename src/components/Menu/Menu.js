import "./Menu.css";
import OngletMenu from "/src/components/OngletMenu/OngletMenu";
import BoutonMenuClassique from "/src/components/BoutonMenuClassique/BoutonMenuClassique";

const Menu = () => {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(BoutonMenuClassique());
    fragment.appendChild(OngletMenu());

    const menu = document.createElement('div');
    menu.id = "menu";
    menu.classList.add("flex-column", "center", "absolute");
    menu.appendChild(fragment);

    return menu;
}

export default Menu;
