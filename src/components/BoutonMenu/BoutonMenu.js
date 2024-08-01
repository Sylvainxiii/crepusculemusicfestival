import "./BoutonMenu.css";
import imgMenuBtnCercleExt from "/src/assets/images/menu-btn-cercle-ext.svg";
import imgMenuBtnCercleInt from "/src/assets/images/menu-btn-cercle-int.svg";
import imgMenuBtnCentre from "/src/assets/images/menu-btn-centre.svg";

const BoutonMenu = () => {

    const boutonMenu = document.createElement('div');
    boutonMenu.className = "menu-btn-container";
    boutonMenu.id = "bouton-menu";

    let menuBtnCercleExt = document.createElement('img');
    menuBtnCercleExt.id = "menu-btn-ext";
    menuBtnCercleExt.src = imgMenuBtnCercleExt;

    let menuBtnCercleInt = document.createElement('img');
    menuBtnCercleInt.id = "menu-btn-int";
    menuBtnCercleInt.src = imgMenuBtnCercleInt;

    let menuBtnCentre = document.createElement('img');
    menuBtnCentre.id = "menu-btn-centre";
    menuBtnCentre.src = imgMenuBtnCentre;

    boutonMenu.appendChild(menuBtnCercleExt);
    boutonMenu.appendChild(menuBtnCercleInt);
    boutonMenu.appendChild(menuBtnCentre);

    let btnActivate = false;

    boutonMenu.addEventListener('click', function () {
        let menu = document.getElementById("menu");

        if (btnActivate == false) {
            boutonMenu.style.position = "fixed";
            menuBtnCercleExt.style.transform = 'rotate(300deg)';
            menuBtnCercleExt.style.scale = 0.6;
            menuBtnCercleInt.style.transform = 'rotate(-260deg)';
            menuBtnCercleInt.style.scale = 1.4;
            menuBtnCentre.style.transform = 'rotate(200deg)';
            menuBtnCentre.style.scale = 0.5;
            menu.style.top = 0;
            menu.style.position = "fixed";
            btnActivate = true
        } else {
            menuBtnCercleExt.style.transform = 'rotate(0deg)';
            menuBtnCercleExt.style.scale = 1;
            menuBtnCercleInt.style.transform = 'rotate(0deg)';
            menuBtnCercleInt.style.scale = 1;
            menuBtnCentre.style.transform = 'rotate(0deg)';
            menuBtnCentre.style.scale = 1;
            menu.style.top = "-102vh";
            menu.style.position = "absolute";
            btnActivate = false
        }

    })

    return boutonMenu;
}

export default BoutonMenu;