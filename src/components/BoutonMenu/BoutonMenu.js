import "./BoutonMenu.css";
import imgMenuBtnCercleExt from "/src/assets/images/menu-btn-cercle-ext.svg";
import imgMenuBtnCercleInt from "/src/assets/images/menu-btn-cercle-int.svg";
import imgMenuBtnCentre from "/src/assets/images/menu-btn-centre.svg";

const BoutonMenu = () => {

    const boutonMenu = document.createElement('div');
    boutonMenu.classList.add("menu-btn-container", "fixed");
    boutonMenu.id = "bouton-menu";

    const menuBtnCercleExt = document.createElement('img');
    menuBtnCercleExt.id = "menu-btn-ext";
    menuBtnCercleExt.classList.add("absolute");
    menuBtnCercleExt.src = imgMenuBtnCercleExt;

    const menuBtnCercleInt = document.createElement('img');
    menuBtnCercleInt.id = "menu-btn-int";
    menuBtnCercleInt.classList.add("absolute");
    menuBtnCercleInt.src = imgMenuBtnCercleInt;

    const menuBtnCentre = document.createElement('img');
    menuBtnCentre.id = "menu-btn-centre";
    menuBtnCentre.classList.add("absolute");
    menuBtnCentre.src = imgMenuBtnCentre;

    boutonMenu.appendChild(menuBtnCercleExt);
    boutonMenu.appendChild(menuBtnCercleInt);
    boutonMenu.appendChild(menuBtnCentre);

    let btnActivate = false;

    boutonMenu.addEventListener('click', function () {
        const menu = document.getElementById("menu");

        if (!btnActivate) {
            menuBtnCercleExt.classList.add('rotate-scale-ext');
            menuBtnCercleInt.classList.add('rotate-scale-int');
            menuBtnCentre.classList.add('rotate-scale-centre');

            menu.style.top = 0;
            menu.classList.replace("absolute", "fixed");

            btnActivate = true
        } else {
            menuBtnCercleExt.classList.remove('rotate-scale-ext');
            menuBtnCercleInt.classList.remove('rotate-scale-int');
            menuBtnCentre.classList.remove('rotate-scale-centre');

            menu.style.top = "-102vh";
            menu.classList.replace("fixed", "absolute");

            btnActivate = false
        }

    })

    return boutonMenu;
}

export default BoutonMenu;